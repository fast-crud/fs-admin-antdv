<template>
  <fs-page>
    <template #header>
      <div class="title">授权管理</div>
    </template>
    <fs-crud ref="crudRef" v-bind="crudBinding">
      <!--      <template #form_settings="{ form }">-->
      <!--        <template v-if="accessProviderDict?.dataMap && accessProviderDict.dataMap[form?.type]">-->
      <!--          <a-row>-->
      <!--            <a-col v-for="(item, key) of accessProviderDict.dataMap[form?.type].inputs" :key="item.name" :span="12">-->
      <!--              <a-form-item v-bind="item" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">-->
      <!--                <fs-component-render v-model="form.settings[key]" v-bind="item.component"></fs-component-render>-->
      <!--              </a-form-item>-->
      <!--            </a-col>-->
      <!--          </a-row>-->
      <!--        </template>-->
      <!--      </template>-->
    </fs-crud>
  </fs-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { useCrud } from "@fast-crud/fast-crud";
import createCrudOptions from "./crud";
import { useExpose } from "@fast-crud/fast-crud";
import { message } from "ant-design-vue";
export default defineComponent({
  name: "CertdAccess",
  setup() {
    // crud组件的ref
    const crudRef = ref();
    // crud 配置的ref
    const crudBinding = ref();
    // 暴露的方法
    const { expose } = useExpose({ crudRef, crudBinding });
    // 你的crud配置
    const { crudOptions, output } = createCrudOptions({ expose });
    // 初始化crud配置
    // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
    const { resetCrudOptions } = useCrud({ expose, crudOptions });
    // 你可以调用此方法，重新初始化crud配置
    // resetCrudOptions(options)

    // 页面打开后获取列表数据
    onMounted(() => {
      expose.doRefresh();
    });

    return {
      crudBinding,
      crudRef,
      ...output
    };
  }
});
</script>
