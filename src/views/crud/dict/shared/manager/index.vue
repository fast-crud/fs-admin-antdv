<template>
  <fs-page>
    <fs-crud ref="crudRef" v-bind="crudBinding">
      <template #actionbar-right>
        <a-alert class="ml-1" type="warning" message="管理共享字典，此处添加和修改字典，在使用时实时变化" />
      </template>
    </fs-crud>
  </fs-page>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import {useFs, UseFsProps} from "@fast-crud/fast-crud";
import createCrudOptions from "./crud";

export default defineComponent({
  name: "DictSharedManager",
  setup() {
    const customValue: any = {}; //自定义变量，传给createCrudOptions的额外参数（可以任意命名，任意多个）
    const { crudBinding, crudRef, crudExpose, customExport } = useFs({ createCrudOptions, customValue } as UseFsProps);

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
