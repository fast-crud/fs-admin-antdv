<template>
  <fs-page>
    <template #header>
      <div class="title">
        列宽调整
        <span class="sub">列头可以调整宽度</span>
      </div>
      <div class="more">
        <a target="_blank" href="http://fast-crud.docmirror.cn/api/crud-options/table.html#对应ui库的table组件的参数">文档</a>
      </div>
    </template>
    <fs-crud ref="crudRef" style="position: relative" v-bind="crudBinding"> </fs-crud>
  </fs-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useCrud } from "@fast-crud/fast-crud";
import createCrudOptions from "./crud";
import { useExpose } from "@fast-crud/fast-crud";
import { message } from "ant-design-vue";
export default defineComponent({
  name: "FeatureColumnResize",
  setup() {
    const { crudBinding, crudRef, crudExpose } = useFs({ createCrudOptions });

    // 页面打开后获取列表数据
    onMounted(() => {
      crudExpose.doRefresh();
    });

    return {
      crudBinding,
      crudRef
    };
  }
});
</script>
