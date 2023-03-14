<template>
  <fs-page>
    <fs-crud ref="crudRef" v-bind="crudBinding">
      <template #actionbar-right> </template>
    </fs-crud>
  </fs-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useCrud, useExpose, useColumns } from "@fast-crud/fast-crud";
import createCrudOptions from "./crud";
import _ from "lodash-es";
import { message } from "ant-design-vue";
export default defineComponent({
  name: "FormNewPage",
  setup(props, ctx) {
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
