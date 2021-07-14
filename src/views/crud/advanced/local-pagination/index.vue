<template>
  <fs-page>
    <template #header>
      <div class="title">本地分页</div>
    </template>
    <fs-crud ref="crudRef" v-bind="crudBinding"> </fs-crud>
  </fs-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { useCrud, useExpose } from "@fast-crud/fast-crud";
import createCrudOptions from "./crud";
import { GetList } from "./api";

/**
 * 本示例演示如何本地分页
 * 主要就是将pageRequest修改为从本地获取数据就行了
 */
export default defineComponent({
  name: "AdvanceLocalPagination",
  setup() {
    // crud组件的ref
    const crudRef = ref();
    // crud 配置的ref
    const crudBinding = ref();

    const localDataRef = ref();
    // 页面打开后获取列表数据
    onMounted(async () => {
      const ret = await GetList();
      localDataRef.value = ret.records;
      // 暴露的方法
      const { expose } = useExpose({ crudRef, crudBinding });
      // 你的crud配置
      const { crudOptions } = createCrudOptions({ expose, localDataRef });
      // 初始化crud配置
      // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
      const { resetCrudOptions } = useCrud({ expose, crudOptions });
      // 你可以调用此方法，重新初始化crud配置
      // resetCrudOptions(options)

      expose.doRefresh();
    });

    return {
      crudBinding,
      crudRef
    };
  }
});
</script>
