import * as api from "./api";
import { utils } from "@fast-crud/fast-crud";
import dayjs from "dayjs";
console.log("utils", utils);
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
      table: {
        scroll: { x: 1700 }
      },
      rowHandle: { fixed: "right" },
      columns: {
        id: {
          title: "ID",
          type: "number",
          column: {
            width: 50
          },
          form: {
            show: false
          }
        },
        timestamp: {
          title: "时间戳",
          type: "datetime",
          search: {
            show: true,
            width: 185,
            component: {}
          },
          valueBuilder({ value, row, key }) {
            debugger
            if (value != null) {
              row[key] = dayjs(value);
            }
          },
          valueResolve({ value, row, key }) {
            if (value != null) {
              row[key] = value.unix();
            }
          }
        },

      }
    }
  };
}
