<template>
  <fs-page>
    <template #header>
      <div class="title">独立使用组件</div>
      <div class="more"></div>
    </template>
    <div style="padding: 20px">
      <a-form ref="formRef" :model="form" laba-width="120px">
        <a-form-item label="上传">
          <fs-file-uploader v-model="form.upload" :uploader="uploader"></fs-file-uploader>
        </a-form-item>
        <a-form-item label="裁剪">
          <fs-cropper-uploader v-model="form.avatar" v-bind="cropperUploader"></fs-cropper-uploader>
        </a-form-item>
        <a-form-item label="可复制">
          <fs-cropper-uploader v-model="form.avatar" v-bind="cropperUploader"></fs-cropper-uploader>
        </a-form-item>
        <a-form-item>
          <a-button @click="submit">提交</a-button>
        </a-form-item>
      </a-form>
    </div>
  </fs-page>
</template>

<script lang="ts" setup>
import { defineOptions, nextTick, reactive, ref } from "vue";
import { message } from "ant-design-vue";
defineOptions({
  name: "ComponentIndependent"
});
const form = reactive({
  upload: [],
  avatar: undefined
});

const uploader = ref({
  type: "cos",
  keepName: true
});

const cropperUploader = ref({
  uploader: {
    type: "cos",
    keepName: true
  },
  cropper: {
    viewMode: 1
  },
  async onReady(context: any) {
    console.log("onReady", context);
    context.zoom(-0.1);
    context.zoom(-0.1);
    context.zoom(-0.1);
  }
});

function submit() {
  message.info("submit:" + JSON.stringify(form));
  console.log("submit:", form);
}
</script>
