<template>
  <a-config-provider :locale="locale">
    <router-view v-if="routerEnabled" />
  </a-config-provider>
  <!-- 先加载fs-images-format，修复表格中第一次加载头像导致操作列错位的bug -->
  <!--https://github.com/fast-crud/fast-crud/issues/6 -->
  <fs-images-format />
</template>

<script>
import zhCN from "ant-design-vue/es/locale/zh_CN";
import { provide, ref, nextTick } from "vue";
import { usePageStore } from "/src/store/modules/page";
import { useResourceStore } from "/src/store/modules/resource";
import { useSettingStore } from "/@/store/modules/settings";
export default {
  name: "App",
  setup() {
    //刷新页面方法
    const routerEnabled = ref(true);
    async function reload() {
      routerEnabled.value = false;
      await nextTick();
      routerEnabled.value = true;
    }
    provide("fn:router.reload", reload);

    //其他初始化
    const resourceStore = useResourceStore();
    resourceStore.init();
    const pageStore = usePageStore();
    pageStore.init();
    const settingStore = useSettingStore();
    settingStore.init();

    return {
      routerEnabled
    };
  },
  data() {
    return {
      locale: zhCN
    };
  }
};
</script>
