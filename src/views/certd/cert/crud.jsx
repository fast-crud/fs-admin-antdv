import * as api from "./api";
import { dict } from "@fast-crud/fast-crud";
import { useI18n } from "vue-i18n";
export default function ({ expose }) {
  const { t } = useI18n();
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
      columns: {
        id: {
          title: "ID",
          key: "id",
          type: "number",
          column: {
            width: 50
          },
          form: {
            show: false
          }
        },
        domains: {
          title: "域名",
          type: ["dict-select", "colspan"],
          search: { show: false },
          form: {
            component: {
              mode: "tags"
            },
            valueResolve({ form }) {
              form.domains = form.domains?.join(",");
            },
            rules: [{ required: true, message: "请填写域名" }]
          }
        },
        email: {
          title: "邮箱",
          type: "text",
          search: { show: false },
          form: {
            rules: [{ required: true, type: "email", message: "请填写邮箱" }]
          }
        },
        certIssuerId: {
          title: "证书签发者",
          type: "dict-select",
          dict: dict({ data: [{ value: "letencrypt", label: "LetEncrypt" }] }),
          form: {
            value: "letencrypt"
          }
        },
        challengeType: {
          title: "校验方式",
          type: "dict-select",
          dict: dict({ data: [{ value: "dns", label: "DNS校验" }] }),
          form: {
            value: "dns"
          }
        },
        challengeAccessId: {
          title: "校验Dns授权",
          type: "dict-select",
          dict: dict({
            data: [
              { value: 1, label: "Aliyun" },
              { value: 2, label: "DnsPod" }
            ]
          })
        },
        country: {
          title: "国家",
          type: "text"
        },
        state: {
          title: "省份",
          type: "text"
        },
        locality: {
          title: "市区",
          type: "text"
        },
        organization: {
          title: "单位",
          type: "text"
        },
        organizationUnit: {
          title: "部门",
          type: "text"
        },
        remark: {
          title: "备注",
          type: "text"
        }
      }
    }
  };
}
