import { defineAsyncComponent } from "vue";

const AsyncHighLight = defineAsyncComponent(() => import("./d2-highlight/index.vue"));

export default {
  install(app) {
    app.component("D2Highlight", AsyncHighLight);
  }
};
