import { defineStore } from "pinia";
import { useResourceStore } from "/src/store/modules/resource";
import { getPermissions } from "./api";
import mitt from "mitt";

interface PermissionState {
  permissions: [];
  inited: boolean;
}

/**
 * 构建权限码列表
 * @param menuTree
 * @param permissionList
 * @returns {*}
 */
function formatPermissions(menuTree: Array<any>, permissionList = []) {
  if (menuTree == null) {
    menuTree = [];
  }
  menuTree.forEach((item: any) => {
    if (item.permission) {
      // @ts-ignore
      permissionList.push(item.permission);
    }
    if (item.children != null && item.children.length > 0) {
      formatPermissions(item.children, permissionList);
    }
  });
  return permissionList;
}

export const usePermissionStore = defineStore({
  id: "app.permission",
  state: (): PermissionState => ({
    permissions: [],
    inited: false
  }),
  getters: {
    getPermissions() {
      return this.permissions;
    },
    isInited() {
      return this.inited;
    }
  },
  actions: {
    init({ permissions }) {
      this.permissions = permissions;
      this.inited = true;
    },
    clear() {
      this.permissions = [];
      this.inited = false;
    },
    resolve(resourceTree) {
      const permissions = formatPermissions(resourceTree);
      this.init({ permissions });

      //过滤没有权限额菜单
      const resourceStore = useResourceStore();
      resourceStore.filterByPermission(permissions);
    },
    async loadFromRemote() {
      let menuTree = await getPermissions();
      if (menuTree == null) {
        menuTree = [];
      }
      console.log("获取权限数据成功：", menuTree);
      this.resolve(menuTree);
    }
  }
});

const mitter = mitt();
mitter.on("app.logout", () => {
  const permissionStore = usePermissionStore();
  permissionStore.clear();
});
