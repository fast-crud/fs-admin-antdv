import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import visualizer from "rollup-plugin-visualizer";
import viteCompression from "vite-plugin-compression";
import PurgeIcons from "vite-plugin-purge-icons";
import path from "path";
import { getThemeVariables } from "ant-design-vue/dist/theme";

import { defineConfig, Plugin } from "vite";
import { viteThemePlugin, mixLighten, mixDarken, tinycolor } from "vite-plugin-theme";

const resolve = path.resolve;
// https://vitejs.dev/config/
// 增加环境变量
process.env.VITE_APP_VERSION = require("./package.json").version;
process.env.VITE_APP_BUILD_TIME = require("dayjs")().format("YYYY-M-D HH:mm:ss");

function generateModifyVars(dark = false) {
  const modifyVars = getThemeVariables({ dark });
  console.log("modifyVars", modifyVars);
  let vars = `${resolve("src/style/theme/index.less")}`;
  return {
    ...modifyVars,
    hack: `true; @import (reference) "${vars}";`
  };
}
export default ({ command, mode }) => {
  console.log("args", command, mode);

  let devAlias = [];
  if (mode === "debug") {
    devAlias = [
      { find: /@fast-crud\/fast-crud\/dist/, replacement: path.resolve("../../fast-crud/src/") },
      { find: /@fast-crud\/fast-crud$/, replacement: path.resolve("../../fast-crud/src/") },
      { find: /@fast-crud\/extends-uploader\/dist/, replacement: path.resolve("../../extends/extends-uploader/src/") },
      { find: /@fast-crud\/extends-uploader$/, replacement: path.resolve("../../extends/extends-uploader/src/") },
      { find: /@fast-crud\/ui-antdv$/, replacement: path.resolve("../../ui/ui-antdv/src/") }
    ];
  }
  console.log("devAlias", devAlias);
  return {
    base: "/antdv/",
    plugins: [
      vueJsx(),
      vue(),
      viteCompression(),
      PurgeIcons({
        iconSource: "local",
        remoteDataAPI: "https://gitee.com/fast-crud/collections-json/raw/master/json",
        includedCollections: ["ion"]
      }),
      viteThemePlugin({
        // Match the color to be modified
        colorVariables: ["#1890ff"]
      })
    ],
    // optimizeDeps: {
    //   exclude: ["@fast-crud/fast-crud-extends"],
    // },
    esbuild: {
      jsxFactory: "h",
      jsxFragment: "Fragment"
    },
    resolve: {
      alias: [
        ...devAlias,
        { find: "/@", replacement: path.resolve("./src") },
        { find: "/#", replacement: path.resolve("./types") }
      ],
      dedupe: ["vue"]
    },
    build: {
      rollupOptions: {
        plugins: [visualizer()]
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: generateModifyVars(),
          javascriptEnabled: true
        }
      }
    },
    server: {
      proxy: {
        // with options
        "/api": {
          target: "http://127.0.0.1:7001"
        }
      }
    }
  };
};
