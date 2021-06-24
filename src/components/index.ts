import { defineAsyncComponent } from "vue";
import FsIconify from "./fs-iconify.vue";
import FsPage from "./fs-page.vue";
const AsyncHighLight = defineAsyncComponent(() => import("./d2-highlight/index.vue"));

export default {
  install(app) {
    app.component("D2Highlight", AsyncHighLight);
    app.component("FsIconify", FsIconify);
    app.component("FsPage", FsPage);
  }
};
