export const certdResources = [
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
        component: "/certd/cert/index.vue",
        meta: {
          icon: "ion-disc-outline"
        }
      },
      {
        title: "授权",
        name: "access",
        path: "/certd/access",
        component: "/certd/access/index.vue",
        meta: {
          icon: "ion-disc-outline"
        }
      }
    ]
  }
];
