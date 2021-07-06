import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.less";
import "virtual:windi.css";
import "./style/common.less";
import "@iconify/iconify";
import "@purge-icons/generated";
import "./mock";
import i18n from "./i18n";
import store from "./store";
import components from "./components";
import FastCrud from "./plugin/fast-crud";
import permission from "./plugin/permission";

// @ts-ignore
const app = createApp(App);
app.use(Antd);
app.use(router);
app.use(i18n);
app.use(store);
app.use(components);
app.use(FastCrud, { i18n });
app.use(permission);
app.mount("#app");
