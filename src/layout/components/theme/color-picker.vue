<template>
  <div class="fs-theme-color-picker">
    <h4>主题色</h4>
    <div class="fs-theme-colors">
      <a-tooltip v-for="(item, index) in colorList" :key="index" class="fs-theme-color-item">
        <template #title>
          {{ item.key }}
        </template>
        <a-tag :color="item.color" @click="changeColor(item.color)">
          <CheckOutlined v-if="item.color === primaryColor" />
        </a-tag>
      </a-tooltip>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
const colorListDefine = [
  {
    key: "薄暮",
    color: "#F5222D"
  },
  {
    key: "火山",
    color: "#FA541C"
  },
  {
    key: "日暮",
    color: "#FAAD14"
  },
  {
    key: "明青",
    color: "#13C2C2"
  },
  {
    key: "极光绿",
    color: "#52C41A"
  },
  {
    key: "拂晓蓝（默认）",
    color: "#1890FF"
  },
  {
    key: "极客蓝",
    color: "#2F54EB"
  },
  {
    key: "酱紫",
    color: "#722ED1"
  }
];
export default defineComponent({
  name: "FsThemeColorPicker",
  props: {
    primaryColor: {
      default: "#1890ff"
    }
  },
  emits: ["change"],
  setup(props, ctx) {
    const colorList = ref(colorListDefine);
    function changeColor(color) {
      ctx.emit("change", color);
    }
    return {
      colorList,
      changeColor
    };
  }
});
</script>
<style lang="less">
.fs-theme-color-picker {
  .fs-theme-colors {
    margin-top: 10px;
    display: flex;
    justify-content: left;
    justify-items: center;
    align-items: center;
    .fs-theme-color-item {
      width: 20px;
      height: 20px;
      border-radius: 2px;
      cursor: pointer;
      margin-right: 8px;
      padding-left: 0px;
      padding-right: 0px;
      text-align: center;
      color: #fff;
      font-weight: 700;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        font-size: 14px;
      }
    }
  }
}
</style>
