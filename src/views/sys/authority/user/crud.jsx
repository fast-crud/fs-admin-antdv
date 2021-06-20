import * as api from "./api";
import { dict } from "@fast-crud/fast-crud";
export default function ({ expose }) {
  const pageRequest = async (query) => {
    return await api.GetList(query);
  };
  const editRequest = async ({ form, row }) => {
    form.id = row.id;
    return await api.UpdateObj(form);
  };
  const delRequest = async ({ row }) => {
    return await api.DelObj(row.id);
  };

  const addRequest = async ({ form }) => {
    return await api.AddObj(form);
  };
  return {
    crudOptions: {
      request: {
        pageRequest,
        addRequest,
        editRequest,
        delRequest
      },
      rowHandle: {
        fixed: "right"
      },
      columns: {
        id: {
          title: "id",
          form: { show: false }, // 表单配置
          column: {
            width: 70,
            sorter: true
          }
        },
        createTime: {
          title: "创建时间",
          type: "datetime",
          form: { show: false }, // 表单配置
          column: {
            width: 180,
            sorter: true
          }
        },
        // updateTime: {
        //   title: "修改时间",
        //   type: "datetime",
        //   form: { show: false }, // 表单配置
        //   column: {
        //     sortable: "update_time",
        //     width: 180
        //   }
        // },
        username: {
          title: "用户名",
          type: "text",
          search: { show: true }, // 开启查询
          form: {
            rules: [{ required: true, message: "请输入用户名" }]
          },
          editForm: { component: { disabled: true } },
          column: {
            sorter: true
          }
        },
        password: {
          title: "密码",
          type: "text",
          key: "password",
          column: {
            show: false
          },
          form: {
            component: {
              showPassword: true
            },
            helper: "填写则修改密码"
          }
        },
        // avatar: {
        //   title: "头像",
        //   type: "avatar-uploader",
        //   search: {
        //     show: false
        //   },
        //   column: {
        //     width: 100,
        //     sortable: "custom"
        //   }
        // },
        nickName: {
          title: "昵称",
          type: "text",
          search: { show: true }, // 开启查询
          column: {
            sorter: true
          }
        },

        roles: {
          title: "角色",
          type: "dict-select",
          dict: dict({
            url: "/sys/authority/role/list",
            value: "id",
            label: "name"
          }), // 数据字典
          form: {
            component: { mode: "multiple" }
          },
          column: {
            width: 250,
            sortable: true
          }
        }
      }
    }
  };
}
