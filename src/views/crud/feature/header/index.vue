<template>
  <fs-page>
    <template #header>
      <div class="title">
        <span>自定义header</span>
        <span class="sub">通过配置a-table的headerCell插槽实现</span>
      </div>
    </template>
    <fs-crud ref="crudRef" v-bind="crudBinding" />
  </fs-page>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import createCrudOptions from "./crud.js";
import { useFs } from "@fast-crud/fast-crud";
defineOptions({
  name: "FeatureHeader"
});
const { crudBinding, crudRef, crudExpose } = useFs({ createCrudOptions });
// 页面打开后获取列表数据
onMounted(() => {
  crudExpose.doRefresh();
});
</script>
