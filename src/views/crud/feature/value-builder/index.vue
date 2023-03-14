<template>
  <fs-page>
    <fs-crud ref="crudRef" v-bind="crudBinding">
      <template #cell_roles="scope">
        <!-- 后台返回的列表数据已经包含了角色的名称，所以无需通过fs-values-format来从dict里获取label-->
        <template v-if="scope.value">
          <a-tag v-for="item of scope.value"> {{ item.name }}</a-tag>
        </template>
      </template>
    </fs-crud>
  </fs-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import createCrudOptions from "./crud";
import { useExpose, useCrud } from "@fast-crud/fast-crud";
export default defineComponent({
  name: "FeatureValueBuilder",
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
