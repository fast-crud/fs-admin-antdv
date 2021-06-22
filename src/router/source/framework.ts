import LayoutFramework from "/src/layout/layout-framework.vue";
import LayoutPass from "/src/layout/layout-pass.vue";
export const frameworkResource = [
  {
    title: "框架",
    name: "framework",
    path: "/",
    redirect: "/index",
    component: LayoutFramework,
    meta: {
      icon: "ion:accessibility"
    },
    children: [
      {
        title: "首页",
        name: "index",
        path: "/index",
        component: "/framework/home/index.vue",
        meta: {
          fixedAside: true,
          showOnHeader: false,
          icon: "ion-home-outline"
        }
      },
      {
        title: "示例",
        name: "demo",
        path: "/demo",
        redirect: "/demo/crud",
        component: LayoutPass,
        meta: {
          icon: "ion-bulb-outline"
        },
        children: [
          {
            title: "crud",
            name: "basis",
            path: "/demo/crud",
            redirect: "/demo/crud/i18n",
            meta: {
              icon: "ion:accessibility"
            },
            children: [
              {
                title: "国际化",
                name: "CrudI18n",
                path: "/demo/crud/i18n",
                component: "/demo/crud/i18n/index.vue",
                meta: {
                  icon: "ion:accessibility"
                }
              }
            ]
          }
        ]
      },
      {
        title: "系统管理",
        name: "sys",
        path: "/sys",
        redirect: "/sys/authority",
        component: LayoutPass,
        meta: {
          icon: "ion-settings-outline",
          permission: "sys"
        },
        children: [
          {
            title: "权限管理",
            name: "authority",
            path: "/sys/authority",
            redirect: "/sys/authority/permission",
            meta: {
              icon: "ion-ribbon-outline",
              //需要校验权限
              permission: "sys:auth"
            },
            children: [
              {
                title: "权限资源管理",
                name: "permission",
                meta: {
                  icon: "ion-sparkles-outline",
                  //需要校验权限
                  permission: "sys:auth:per:view"
                },
                path: "/sys/authority/permission",
                component: "/sys/authority/permission/index.vue"
              },
              {
                title: "角色管理",
                name: "role",
                meta: {
                  icon: "ion-people-outline",
                  permission: "sys:auth:role:view"
                },
                path: "/sys/authority/role",
                component: "/sys/authority/role/index.vue"
              }
            ]
          },
          {
            title: "用户管理",
            name: "user",
            meta: {
              icon: "ion-person-outline",
              permission: "sys:auth:user:view"
            },
            path: "/sys/authority/user",
            component: "/sys/authority/user/index.vue"
          }
        ]
      }
    ]
  }
];
console.assert(frameworkResource.length === 1, "frameworkResource数组长度只能为1，你只能配置framework路由的子路由");
