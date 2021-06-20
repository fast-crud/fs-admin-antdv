import LayoutFramework from "/src/layout/layout-framework.vue";
/**
 * 错误页面
 */
export const indexResource = [
  {
    meta: {
      title: "框架"
    },
    name: "framework",
    path: "/",
    redirect: "/index",
    component: LayoutFramework,
    children: [
      {
        meta: {
          title: "首页"
        },
        name: "index",
        path: "/index",
        component: "/framework/home/index.vue"
      }
    ]
  }
];
