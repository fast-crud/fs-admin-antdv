import { defineStore } from "pinia";
// @ts-ignore
import { frameworkMenus, headerMenus, indexMenus } from "/src/router/resolve";
import { mitter } from "/src/utils/util.mitt";

//监听注销事件
mitter.on("app.logout", () => {
  const resourceStore = useResourceStore();
  resourceStore.clear();
});

interface ResourceState {
  frameworkMenus: Array<any>;
  headerMenus: Array<any>;
  asideMenus: Array<any>;
  inited: boolean;
  currentAsidePath: string;
}

export const useResourceStore = defineStore({
  id: "app.resource",
  state: (): ResourceState => ({
    // user info
    frameworkMenus: [],
    headerMenus: [],
    asideMenus: [],
    inited: false,
    currentAsidePath: ""
  }),
  getters: {
    getAsideMenus() {
      return this.asideMenus;
    },
    getHeaderMenus() {
      return this.headerMenus;
    },
    getFrameworkMenus() {
      return this.frameworkMenus;
    }
  },
  actions: {
    clear() {
      this.inited = false;
    },
    /**
     * 初始化资源
     */
    init() {
      if (this.inited) {
        return;
      }
      this.inited = true;

      this.frameworkMenus = frameworkMenus;
      this.headerMenus = headerMenus;
      this.setAsideMenu();
    },
    setAsideMenu(topMenu?) {
      if (this.frameworkMenus.length === 0) {
        return;
      }
      if (topMenu == null) {
        topMenu = this.frameworkMenus[0];
      }
      const asideMenus = topMenu?.children || [];

      this.asideMenus = [...indexMenus, ...asideMenus];
    },
    setAsideMenuByCurrentRoute(matched) {
      const menuHeader = this.frameworkMenus;
      const matchedPath = matched[0].path;
      const _side = menuHeader.filter((menu) => menu.path === matchedPath);
      if (_side.length > 0) {
        if (this.currentAsidePath === _side[0]) {
          return;
        }
        this.currentAsidePath = _side[0];
        this.setAsideMenu(_side[0]);
      }
    },
    filterByPermission(permissions) {
      this.frameworkMenus = this.filterChildrenByPermission(this.frameworkMenus, permissions);
    },
    filterChildrenByPermission(list, permissions) {
      const menus = list.filter((item) => {
        if (item?.meta?.permission) {
          return permissions.includes(item.meta.permission);
        }
        return true;
      });
      for (const menu of menus) {
        if (menu.children && menu.children.length > 0) {
          menu.children = this.filterChildrenByPermission(menu.children, permissions);
        }
      }
      return menus;
    }
  }
});
