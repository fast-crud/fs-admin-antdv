export const crudResources = [
  {
    title: "CRUD示例",
    name: "crud",
    path: "/crud",
    redirect: "/crud/basis",
    meta: {
      icon: "ion-apps-sharp"
    },
    children: [
      {
        title: "基本特性",
        name: "basis",
        path: "/crud/basis",
        redirect: "/crud/basis/dict",
        children: [
          {
            title: "动态计算",
            path: "/crud/basis/compute",
            component: "/crud/basis/compute/index.vue"
          },
          {
            title: "国际化",
            path: "/crud/basis/i18n",
            component: "/crud/basis/i18n/index.vue"
          }
          // {
          //   title: "debug",
          //   path: "/crud/debug/select",
          //   component: "/crud/debug/select/index.vue"
          // }
        ]
      },
      {
        title: "数据字典",
        name: "dict",
        path: "/crud/dict",
        redirect: "/dict/single",
        children: [
          {
            title: "单例",
            path: "/crud/dict/single",
            component: "/crud/dict/single/index.vue"
          },
          {
            title: "分发复制",
            path: "/crud/dict/cloneable",
            component: "/crud/dict/cloneable/index.vue"
          },
          {
            title: "原型复制",
            path: "/crud/dict/prototype",
            component: "/crud/dict/prototype/index.vue"
          }
        ]
      },
      {
        title: "组件示例",
        name: "component",
        path: "/crud/component",
        redirect: "/component/text",
        children: [
          {
            title: "文本输入(input)",
            path: "/crud/component/text",
            component: "/crud/component/text/index.vue"
          },
          {
            title: "选择(select)",
            path: "/crud/component/select",
            component: "/crud/component/select/index.vue"
          },
          {
            title: "级联(cascader)",
            path: "/crud/component/cascader",
            component: "/crud/component/cascader/index.vue"
          },
          {
            title: "多选(checkbox)",
            path: "/crud/component/checkbox",
            component: "/crud/component/checkbox/index.vue"
          },
          {
            title: "单选(radio)",
            path: "/crud/component/radio",
            component: "/crud/component/radio/index.vue"
          },
          {
            title: "开关(switch)",
            path: "/crud/component/switch",
            component: "/crud/component/switch/index.vue"
          },
          {
            title: "日期时间(date)",
            path: "/crud/component/date",
            component: "/crud/component/date/index.vue"
          },
          {
            title: "按钮链接",
            path: "/crud/component/button",
            component: "/crud/component/button/index.vue"
          },
          {
            title: "数字",
            path: "/crud/component/number",
            component: "/crud/component/number/index.vue"
          },
          {
            title: "树形选择",
            path: "/crud/component/tree",
            component: "/crud/component/tree/index.vue"
          },
          {
            title: "图片裁剪上传",
            path: "/crud/component/uploader/cropper",
            component: "/crud/component/uploader/cropper/index.vue"
          },
          {
            title: "表单本地上传",
            path: "/crud/component/uploader/form",
            component: "/crud/component/uploader/form/index.vue"
          },
          {
            title: "阿里云oss上传",
            path: "/crud/component/uploader/alioss",
            component: "/crud/component/uploader/alioss/index.vue"
          },
          {
            title: "腾讯云cos上传",
            path: "/crud/component/uploader/cos",
            component: "/crud/component/uploader/cos/index.vue"
          },
          {
            title: "七牛云上传",
            path: "/crud/component/uploader/qiniu",
            component: "/crud/component/uploader/qiniu/index.vue"
          }
        ]
      },
      {
        title: "Form表单",
        name: "form",
        path: "/crud/form",
        redirect: "/form/text",
        children: [
          {
            title: "表单Grid布局",
            path: "/crud/form/layout-grid",
            component: "/crud/form/layout-grid/index.vue"
          },
          {
            title: "表单Flex布局",
            path: "/crud/form/layout-flex",
            component: "/crud/form/layout-flex/index.vue"
          },
          {
            title: "表单动态布局",
            path: "/crud/form/layout",
            component: "/crud/form/layout/index.vue"
          },
          {
            title: "表单校验",
            path: "/crud/form/validation",
            component: "/crud/form/validation/index.vue"
          },
          {
            title: "抽屉表单",
            path: "/crud/form/drawer",
            component: "/crud/form/drawer/index.vue"
          },
          {
            title: "表单分组",
            path: "/crud/form/group",
            component: "/crud/form/group/index.vue"
          },
          {
            title: "表单分组(tabs)",
            path: "/crud/form/group-tabs",
            component: "/crud/form/group-tabs/index.vue"
          },
          {
            title: "自定义表单",
            path: "/crud/form/custom-form",
            component: "/crud/form/custom-form/index.vue"
          },
          {
            title: "独立使用表单",
            path: "/crud/form/independent",
            component: "/crud/form/independent/index.vue"
          }
        ]
      },
      {
        title: "表格特性",
        path: "feature",
        children: [
          {
            title: "操作列按钮折叠",
            path: "/crud/feature/dropdown",
            component: "/crud/feature/dropdown/index.vue"
          },
          {
            title: "部件显隐",
            path: "/crud/feature/hide",
            component: "/crud/feature/hide/index.vue"
          },
          {
            title: "多选&批量删除",
            path: "/crud/feature/selection",
            component: "/crud/feature/selection/index.vue"
          },
          {
            title: "表头过滤",
            path: "/crud/feature/filter",
            component: "/crud/feature/filter/index.vue"
          },
          {
            title: "行展开",
            path: "/crud/feature/expand",
            component: "/crud/feature/expand/index.vue"
          },
          {
            title: "树形表格",
            path: "/crud/feature/tree",
            component: "/crud/feature/tree/index.vue"
          },
          {
            title: "多级表头",
            path: "/crud/feature/header-group",
            component: "/crud/feature/header-group/index.vue"
          },
          {
            title: "序号",
            path: "/crud/feature/index",
            component: "/crud/feature/index/index.vue"
          },
          {
            title: "排序",
            path: "/crud/feature/sortable",
            component: "/crud/feature/sortable/index.vue"
          },
          {
            title: "固定列",
            path: "/crud/feature/fixed",
            component: "/crud/feature/fixed/index.vue"
          },
          {
            title: "可编辑",
            path: "/crud/feature/editable",
            component: "/crud/feature/editable/index.vue"
          },
          {
            title: "行编辑",
            path: "/crud/feature/editable-row",
            component: "/crud/feature/editable-row/index.vue"
          }
        ]
      },
      {
        title: "插槽",
        path: "slots",
        children: [
          {
            title: "页面占位插槽",
            path: "/crud/slots/layout",
            component: "/crud/slots/layout/index.vue"
          },
          {
            title: "表单占位插槽",
            path: "/crud/slots/form",
            component: "/crud/slots/form/index.vue"
          },
          {
            title: "查询字段插槽",
            path: "/crud/slots/search",
            component: "/crud/slots/search/index.vue"
          },
          {
            title: "单元格插槽",
            path: "/crud/slots/cell",
            component: "/crud/slots/cell/index.vue"
          },
          {
            title: "表单字段插槽",
            path: "/crud/slots/form-item",
            component: "/crud/slots/form-item/index.vue"
          }
        ]
      },
      {
        title: "复杂需求",
        path: "advanced",
        children: [
          {
            title: "选择联动",
            path: "/crud/advanced/linkage",
            component: "/crud/advanced/linkage/index.vue"
          },
          {
            title: "后台加载crud",
            path: "/crud/advanced/from-backend",
            component: "/crud/advanced/from-backend/index.vue"
          },
          {
            title: "嵌套子表格",
            path: "/crud/advanced/nest",
            component: "/crud/advanced/nest/index.vue"
          }
        ]
      }
    ]
  }
];
