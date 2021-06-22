import LayoutFramework from "/src/layout/layout-framework.vue";

export const frameworkResource = [
  {
    title: "示例",
    name: "demo",
    path: "/demo",
    redirect: "/demo/crud",
    component: LayoutFramework,
    children: [
      {
        title: "crud",
        name: "basis",
        path: "/demo/crud",
        redirect: "/demo/crud/i18n",
        children: [
          {
            title: "国际化",
            name: "CrudI18n",
            path: "/demo/crud/i18n",
            component: "/demo/crud/i18n/index.vue"
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
    component: LayoutFramework,
    meta: {
      permission: "sys"
    },
    children: [
      {
        title: "权限管理",
        name: "authority",
        path: "/sys/authority",
        redirect: "/sys/authority/permission",
        meta: {
          //需要校验权限
          permission: "sys:auth"
        },
        children: [
          {
            title: "权限资源管理",
            name: "permission",
            meta: {
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
          permission: "sys:auth:user:view"
        },
        path: "/sys/authority/user",
        component: "/sys/authority/user/index.vue"
      }
    ]
  }
];
