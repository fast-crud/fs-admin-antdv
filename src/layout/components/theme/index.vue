<template>
  <div class="fs-theme">
    <fs-iconify icon="ion-sparkles-outline" @click="show()" />
    <a-drawer
      v-model:visible="visible"
      title="主题设置"
      placement="right"
      :closable="false"
      :after-visible-change="afterVisibleChange"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "FsTheme",
  setup() {
    const visible = ref(false);
    function afterVisibleChange() {}
    function show() {
      visible.value = true;
    }
    return {
      visible,
      show,
      afterVisibleChange
    };
  }
});
</script>

<style lang="less">
.fs-theme {
}
.fs-theme-drawer {
}
</style>
