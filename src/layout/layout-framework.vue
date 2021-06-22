<template>
  <a-layout class="fs-framework">
    <a-layout-sider v-model:collapsed="asideCollapsed" :trigger="null" collapsible>
      <div class="header-logo">
        <img src="/images/logo/rect-black.svg" />
      </div>
      <div class="aside-menu">
        <fs-menu :scroll="true" :menus="asideMenus" :expand-selected="true" />
      </div>
    </a-layout-sider>

    <a-layout class="layout-body">
      <a-layout-header class="header">
        <div class="header-buttons">
          <div class="menu-fold" @click="asideCollapsedToggle">
            <MenuUnfoldOutlined v-if="asideCollapsed" />
            <MenuFoldOutlined v-else />
          </div>
        </div>

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
          <div class="header-buttons">
            <locale />
          </div>
          <user-info></user-info>
        </div>
      </a-layout-header>
      <fs-tabs></fs-tabs>
      <a-layout-content class="fs-framework-content">
        <router-view>
          <template #default="{ Component, route }">
            <transition name="fade-transverse">
              <component :is="Component" :key="route.fullPath" />
            </transition>
          </template>
        </router-view>
      </a-layout-content>
      <a-layout-footer class="fs-framework-footer"
        >by fast-crud
        <source-link />
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import { computed, ref } from "vue";
import FsMenu from "./components/fs-menu.jsx";
import Locale from "./components/locale.vue";
import SourceLink from "./components/source-link/index.vue";
import UserInfo from "./components/user-info.vue";
import FsTabs from "./components/tabs/index.vue";
import { useResourceStore } from "../store/modules/resource";
import { usePageStore } from "/@/store/modules/page";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons-vue";
export default {
  name: "LayoutFramework",
  // eslint-disable-next-line vue/no-unused-components
  components: { MenuFoldOutlined, MenuUnfoldOutlined, FsMenu, Locale, SourceLink, UserInfo, FsTabs },
  setup() {
    const resourceStore = useResourceStore();
    const frameworkMenus = computed(() => {
      return resourceStore.getFrameworkMenus;
    });
    const headerMenus = computed(() => {
      return resourceStore.getHeaderMenus;
    });
    const asideMenus = computed(() => {
      return resourceStore.getAsideMenus;
    });

    const pageStore = usePageStore();
    const keepAlive = pageStore.keepAlive;

    const asideCollapsed = ref(false);
    function asideCollapsedToggle() {
      asideCollapsed.value = !asideCollapsed.value;
    }
    return {
      frameworkMenus,
      headerMenus,
      asideMenus,
      keepAlive,
      asideCollapsed,
      asideCollapsedToggle
    };
  }
};
</script>
<style lang="less">
.fs-framework {
  height: 100%;
  overflow-x: hidden;
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
  .header-buttons {
    display: flex;
    align-items: center;
    & > * {
      cursor: pointer;
      padding: 0 10px;
    }
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
