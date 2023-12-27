import {FormColumnType} from "@/components/base-form";
import {FormTypeEnum} from "@/enums/componentEnum";
import {Column} from "@/components/base-table/src/types";
import {listDictKeyList} from "@/api/system/dict";

export function useColumn(action?: any, dialog?: any) {
    const filterColumn: FormColumnType[] = [
        {
            fieldName: "name",
            fieldDesc: "名称",
            fieldType: FormTypeEnum.INPUT
        },
    ];

    const tableColumn: Column[] = [
        {
            fieldName: "name",
            fieldDesc: "名称",
            fixed:"left",
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
                    icon: "delete",
                    label: "删除",
                    callFunction: action?.delete
                }
            ]
        }
    ];

    const dialogColumn: FormColumnType[] = [
        {
            fieldName: "password",
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
