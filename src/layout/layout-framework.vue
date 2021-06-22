<template>
  <a-layout class="fs-framework" :has-sider="true">
    <a-layout-sider>
      <div class="header-logo">
        <img src="/images/logo/rect-black.svg" />
      </div>
      <div class="aside-menu">
        <fs-menu :scroll="true" :menus="asideMenus" :expand-selected="true" />
      </div>
    </a-layout-sider>

    <a-layout class="layout-body">
      <a-layout-header class="header">
        <fs-menu
          class="header-menu"
          mode="horizontal"
          :expand-selected="false"
          :selectable="false"
          :menus="frameworkMenus"
        />
        <div class="header-right">
          <fs-menu
            class="header-menu"
            mode="horizontal"
            :expand-selected="false"
            :selectable="false"
            :menus="headerMenus"
          />
          <locale />
          <user-info></user-info>
        </div>
      </a-layout-header>
      <fs-tabs></fs-tabs>
      <a-layout-content class="fs-framework-content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="fs-framework-footer"
        >by fast-crud
        <source-link />
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import FsMenu from "./components/fs-menu.jsx";
import Locale from "./components/locale.vue";
import SourceLink from "./components/source-link/index.vue";
import UserInfo from "./components/user-info.vue";
import FsTabs from "./components/tabs/index.vue";
import { useResourceStore } from "../store/modules/resource";
export default {
  name: "LayoutFramework",
  // eslint-disable-next-line vue/no-unused-components
  components: { FsMenu, Locale, SourceLink, UserInfo, FsTabs },
  setup() {
    const resourceStore = useResourceStore();
    const frameworkMenus = resourceStore.getFrameworkMenus;
    const headerMenus = resourceStore.getHeaderMenus;
    const asideMenus = resourceStore.getAsideMenus;

    return {
      frameworkMenus,
      headerMenus,
      asideMenus
    };
  }
};
</script>
<style lang="less">
.fs-framework {
  height: 100%;
  .header-logo {
    width: 100%;
    height: 50px;
    display: flex;
    justify-items: center;
    align-items: center;
    // margin: 16px 24px 16px 0;
    //background: rgba(255, 255, 255, 0.3);
    img {
      width: 100%;
      height: 80%;
    }
  }
  .fs-framework-content {
    flex: 1;
    border-left: 1px solid #f0f0f0;
  }
  .fs-framework-footer {
    border-left: 1px solid #f0f0f0;
    padding: 10px 20px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    background: #f6f6f6;
  }
  .header-menu {
    flex: 1;
  }
  .aside-menu {
    flex: 1;
    ui {
      height: 100%;
    }
    overflow: hidden;
    // overflow-y: auto;
  }
  .header-right {
    font-size: 14px;
    justify-content: flex-end;
    align-items: center;
    display: flex;
    > * {
      margin: 0 5px;
    }
  }
  .layout-body {
    flex: 1;
  }
}
//antdv
.fs-framework {
  &.ant-layout {
    flex-direction: row;
  }

  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
  }

  .ant-layout-sider {
    // border-right: 1px solid #eee;
  }

  .ant-layout-header {
    height: 50px;
    padding: 0 10px;
    line-height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .ant-layout-content {
    background: #fff;
    height: 100%;
    position: relative;
  }
}
//element
.fs-framework {
  .el-aside {
    .el-menu {
      height: 100%;
    }
  }
}
</style>
