import {FormColumnType} from "@/components/base-form";
import {FormTypeEnum} from "@/enums/componentEnum";
import {Column} from "@/components/base-table/src/types";
import {listDictKeyList} from "@/api/system/dict";

export function useColumn(action?: any, dialog?: any) {
    const astNameDic = ref([]);

    listDictKeyList("astNameDic").then(data => {
        astNameDic.value = data;
    });
    const filterColumn: FormColumnType[] = [
        {
            fieldName: "name",
            fieldDesc: "名称",
            fieldType: FormTypeEnum.INPUT
        },
        {
            fieldName: "id",
            fieldDesc: "名称",
            fieldType: FormTypeEnum.SELECT,
            config: {
                multiple: true,
                api: () => unref(astNameDic),
            }
        },
    ];

    const tableColumn: Column[] = [
        {
            fieldName: "#",
            fieldDesc: "操作",
            formType: "operation",
            width: 200,
            operation: [
                {
                    icon: "edit",
                    label: "编辑",
                    callFunction: action?.edit
                },
                {
                    icon: "CopyDocument",
                    label: "复制",
                    callFunction: action?.copy
                },
                {
                    icon: "delete",
                    label: "删除",
                    callFunction: action?.delete
                }
            ]
        },
        {
            fixed:"left",
            fieldName: "name",
            fieldDesc: "名称",
            width: 100,
            showOverflowTooltip: true,
        },
        {
            fieldName: "analysisContent",
            fieldDesc: "解析",
            width: 300,
            showOverflowTooltip: true,
            config: {
            }
        },
        {
            fieldName: "remark",
            fieldDesc: "备注",
            showOverflowTooltip: true,
        },
        {
            fieldName: "createTime",
            fieldDesc: "创建时间",
            width: 180,
        },

        {
            fieldName: "updateTime",
            fieldDesc: "修改时间",
            width: 180,
        },

    ];

    const dialogColumn: FormColumnType[] = [
        {
            fieldName: "name",
            fieldDesc: "名称",
            fieldType: FormTypeEnum.INPUT
        },

        {
            fieldName: "analysisContent",
            fieldDesc: "解析",
            fieldType: FormTypeEnum.INPUT,
            config: {
                type: 'textarea',
                rows: 20,
                colProps: {
                    span: 24
                }
            }
        },
        {
            fieldName: "remark",
            fieldDesc: "备注",
            fieldType: FormTypeEnum.INPUT,
            config: {
                type: 'textarea',
            }
        },
    ];

    return {
        filterColumn,
        tableColumn,
        dialogColumn
    };
}
