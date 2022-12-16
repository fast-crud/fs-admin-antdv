<template>
  <fs-page>
    <fs-crud ref="crudRef" v-bind="crudBinding">
      <template #actionbar-right>
        <a-alert class="ml-1" type="info" message="基本表单" />
      </template>
    </fs-crud>

    <a-modal v-drag-modal :visible="true" title="拖动测试"></a-modal>
  </fs-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { useFs } from "@fast-crud/fast-crud";
import createCrudOptions from "./crud";
export default defineComponent({
  name: "FormBase",
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
