export const crudResources = [
  {
    title: "CertD",
    name: "certd",
    path: "/certd",
    redirect: "/certd/cert",
    meta: {
      icon: "ion-apps-sharp"
    },
    children: [
      {
        title: "证书",
        name: "cert",
        path: "/certd/cert",
        component: "certd/cert/index.vue",
        meta: {
          icon: "ion-disc-outline"
        }
      },
      {
        title: "证书",
        name: "cert",
        path: "/certd/cert",
        meta: {
          icon: "ion-disc-outline"
        }
      }
    ]
  }
];
