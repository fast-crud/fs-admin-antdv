import * as api from "./api";
import { dict, useExpose } from "@fast-crud/fast-crud";
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
      form: {
        wrapper: {
          //设置如下三个参数即可在fast-crud内部弹出表单
          getContainer() {
            return expose.crudRef.value.$el;
          },
          maskStyle: {
            position: "absolute"
          },
          wrapClassName: "fs-form-wrapper  fs-dialog-inner"
        }
      },
      columns: {
        name: {
          title: "姓名",
          type: "text"
        },
        age: {
          title: "年龄",
          type: "text"
        }
      }
    }
  };
}
