import { CreateCrudOptionsProps, CreateCrudOptionsRet, uiContext } from "@fast-crud/fast-crud";

export default function ({ crudExpose }: CreateCrudOptionsProps): CreateCrudOptionsRet {
  return {
    crudOptions: {
      mode: {
        name: "local",
        isMergeWhenUpdate: true,
        isAppendWhenAdd: true
      },
      table: {
        remove: {
          //删除数据后不请求后台
          refreshTable: false
        },
        editable: {
          enabled: true,
          mode: "row",
          activeTrigger: false
        }
      },
      search: {
        show: false
      },
      toolbar: {
        show: false
      },
      pagination: {
        show: false
      },
      columns: {
        name: {
          type: "text",
          title: "联系人姓名"
        },
        mobile: {
          type: "text",
          title: "联系人手机号码"
        }
      }
    }
  };
}
