<template>
  <fs-page>
    <fs-crud ref="crudRef" v-bind="crudBinding">
      <template #actionbar-right>
        <a-alert
          class="ml-1"
          type="info"
          message="在表单字段下方可以显示该字段的帮助说明，点击右边编辑按钮查看示例效果"
        />
      </template>
    </fs-crud>
  </fs-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useCrud } from "@fast-crud/fast-crud";
import createCrudOptions from "./crud";
import { useExpose } from "@fast-crud/fast-crud";
export default defineComponent({
  name: "FormValidation",
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
