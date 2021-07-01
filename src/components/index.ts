import { defineAsyncComponent } from "vue";
import FsIconify from "./fs-iconify.vue";
import FsPage from "./fs-page.vue";
const AsyncHighLight = defineAsyncComponent(() => import("./highlight/index.vue"));

export default {
  install(app) {
    app.component("FsHighlight", AsyncHighLight);
    app.component("FsIconify", FsIconify);
    app.component("FsPage", FsPage);
  }
};
