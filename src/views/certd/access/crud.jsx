import * as api from "./api";
import { dict } from "@fast-crud/fast-crud";
import { useI18n } from "vue-i18n";
import _ from "lodash-es";
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
  let accessProviderDict = dict({
    url: "certd/access/providers",
    value: "name"
  });
  return {
    output: {
      accessProviderDict
    },
    crudOptions: {
      request: {
        pageRequest,
        addRequest,
        editRequest,
        delRequest
      },
      form: {
        labelCol: {
          span: 6
        }
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
        name: {
          title: "名称",
          type: "text",
          form: {
            rules: [{ required: true, message: "必填项" }]
          }
        },
        type: {
          title: "类型",
          type: "dict-select",
          dict: accessProviderDict,
          form: {
            rules: [{ required: true, message: "必填项" }],
            component: {},
            valueChange({ form }) {
              const formOptions = expose.getFormWrapperRef()?.formOptions;

              const inputs = accessProviderDict.dataMap[form?.type].inputs;
              _.forEach(inputs, (item, key) => {
                formOptions.columns["settings#" + key] = item;
              });
            }
          }
        },
        settings: {
          title: "",
          type: "colspan",
          column: {
            show: false
          },
          form: {
            value: {},
            show: false,
            wrapperCol: {
              span: 24
            }
          }
        }
      }
    }
  };
}
