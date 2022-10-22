import "./iconify";
import "./iconfont";
import FastCrud from "./fast-crud";
import permission from "./permission";
import { VueClipboard } from "@soerenmartius/vue3-clipboard";
function install(app, options: any = {}) {
  app.use(FastCrud, options);
  app.use(permission);
  app.use(VueClipboard);
}

export default {
  install
};
