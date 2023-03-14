<template>
  <fs-page>
    <template #header>
      <div class="title">权限管理</div>
    </template>
    <fs-crud ref="crudRef" v-bind="crudBinding">
      <a-button v-permission="'sys:auth:per:add'" style="margin-left: 20px" @click="addHandle({})">
        <fs-icon :icon="$fsui.icons.add"></fs-icon>
        添加</a-button
      >
      <fs-permission-tree class="permission-tree" :tree="crudBinding.data" :checkable="false" :actions="permission" @add="addHandle" @edit="editHandle" @remove="removeHandle"></fs-permission-tree>
    </fs-crud>
  </fs-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useCrud, useExpose, CrudExpose, useUi } from "@fast-crud/fast-crud";
import createCrudOptions from "./crud.js";
import FsPermissionTree from "./fs-permission-tree.vue";
import { usePermission } from "/src/plugin/permission";
export default defineComponent({
  name: "AuthorityPermission",
  components: { FsPermissionTree },
  setup() {
    // 此处传入permission进行通用按钮权限设置，会通过commonOptions去设置actionbar和rowHandle的按钮的show属性
    // 更多关于按钮权限的源代码设置，请参考 ./src/plugin/fast-crud/index.js （75-77行）
    const { crudBinding, crudRef, crudExpose } = useFs({ createCrudOptions, permission: "sys:auth:per" });

    // 页面打开后获取列表数据
    onMounted(async () => {
      await crudExpose.doRefresh();
    });

    //用户业务代码

    async function addHandle(item) {
      await expose.openAdd({ initialForm: { parentId: item?.id ?? -1 } });
    }
    async function editHandle(item) {
      await expose.openEdit({ row: item });
    }
    async function removeHandle(item) {
      await expose.doRemove({ row: { id: item.id } });
    }

    const { hasPermissions } = usePermission();
    const permission = ref({
      add: hasPermissions("sys:auth:per:add"),
      edit: hasPermissions("sys:auth:per:edit"),
      remove: hasPermissions("sys:auth:per:remove")
    });

    return {
      crudBinding,
      crudRef,
      addHandle,
      editHandle,
      removeHandle,
      permission
    };
  }
});
</script>
<style lang="less">
.permission-tree {
  margin-left: 20px;
}
</style>
