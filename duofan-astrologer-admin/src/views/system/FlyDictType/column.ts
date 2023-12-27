import {FormColumnType} from "@/components/base-form";
import {FormTypeEnum} from "@/enums/componentEnum";
import {Column} from "@/components/base-table/src/types";
import {getDataLabel} from "@/utils";
import {BooleanStatus} from "@/constant/basic";

export function useColumn(action?: any, dialog?: any) {
    const filterColumn: FormColumnType[] = [
        {
            fieldName: "name",
            fieldDesc: "名称",
            fieldType: FormTypeEnum.INPUT
        },
        {
            fieldName: "isEnabled",
            fieldDesc: "是否启用",
            fieldType: FormTypeEnum.INPUT
        },
        {
            fieldName: "type",
            fieldDesc: "类型",
            fieldType: FormTypeEnum.INPUT
        },
    ];

    const tableColumn: Column[] = [
        {
            fieldName: "name",
            fieldDesc: "名称",
            formType: "slot"
        },
        {
            fieldName: "type",
            fieldDesc: "类型",
        },
        {
            fieldName: "isEnabled",
            fieldDesc: "是否启用",
            formatter: (row: any) => {
                return getDataLabel(BooleanStatus, row.isEnabled);
            }
        },
        {
            fieldName: "remark",
            fieldDesc: "备注",
        },
        {
            fieldName: "sort",
            fieldDesc: "排序",
        },

        {
            fieldName: "updateTime",
            fieldDesc: "修改时间",
        },
        {
            fieldName: "#",
            fieldDesc: "操作",
            formType: "operation",
            width: 375,
            fixed: "right",
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
            fieldName: "name",
            required: true,
            fieldDesc: "名称",
            fieldType: FormTypeEnum.INPUT
        },
        {
            fieldName: "type",
            required: true,
            fieldDesc: "类型",
            fieldType: FormTypeEnum.INPUT,
            config: {
                disabled: dialog?.isEdit
            }
        },
        {
            fieldName: "isEnabled",
            fieldDesc: "是否启用",
            fieldType: FormTypeEnum.SWITCH,
            config: {
                activeValue: '1',
                inactiveValue: '0'
            }
        },
        {
            fieldName: "remark",
            fieldDesc: "备注",
            fieldType: FormTypeEnum.INPUT
        },
        {
            fieldName: "sort",
            fieldDesc: "排序",
            fieldType: FormTypeEnum.INPUT
        },
    ];

    return {
        filterColumn,
        tableColumn,
        dialogColumn
    };
}
