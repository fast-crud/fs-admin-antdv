<template>
  <a-config-provider :locale="locale">
    <router-view v-if="routerEnabled" />
  </a-config-provider>
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
