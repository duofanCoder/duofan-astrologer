import {FormColumnType} from "@/components/base-form";
import {FormTypeEnum} from "@/enums/componentEnum";
import {Column} from "@/components/base-table/src/types";
import {getDataLabel} from "@/utils";
import {BooleanStatus} from "@/constant/basic";

export function useColumn(action?: any, dialog?: any) {
    const filterColumn: FormColumnType[] = [
        {
            fieldName: "label",
            fieldDesc: "名称",
            fieldType: FormTypeEnum.INPUT
        },
        {
            fieldName: "isEnabled",
            fieldDesc: "是否启用",
            fieldType: FormTypeEnum.SELECT,
            config: {
                options: BooleanStatus
            }

        },
    ];

    const tableColumn: Column[] = [

        {
            fieldName: "label",
            fieldDesc: "名称",
        },
        {
            fieldName: "type",
            fieldDesc: "类型",
        },
        {
            fieldName: "value",
            fieldDesc: "值",
        },
        {
            fieldName: "isDefault",
            fieldDesc: "是否默认",
            formatter: (row: any) => {
                return getDataLabel(BooleanStatus, row.isDefault);
            }
        },
        {
            fieldName: "isEnabled",
            fieldDesc: "是否启用",
            formatter: (row: any) => {
                return getDataLabel(BooleanStatus, row.isEnabled);
            }
        },
        {
            fieldName: "listClass",
            fieldDesc: "listClass",
        },
        {
            fieldName: "cssClass",
            fieldDesc: "css样式",
        },
        {
            fieldName: "sort",
            fieldDesc: "sort",
        },
        {
            fieldName: "updateTime",
            fieldDesc: "updateTime",
        },
        {
            fieldName: "remark",
            fieldDesc: "备注",
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
            fieldName: "type",
            fieldDesc: "类型",
            fieldType: FormTypeEnum.INPUT,
            config: {
                disabled: true
            }
        },
        {
            fieldName: "label",
            fieldDesc: "名称",
            fieldType: FormTypeEnum.INPUT
        },
        {
            fieldName: "value",
            fieldDesc: "值",
            fieldType: FormTypeEnum.INPUT,
            config: {
                disabled: dialog?.isEdit
            }
        },
        {
            fieldName: "isDefault",
            fieldDesc: "是否默认",
            fieldType: FormTypeEnum.SWITCH,
            config: {
                "active-value": "1",
                "inactive-value": "0"
            }
        },
        {
            fieldName: "isEnabled",
            fieldDesc: "是否启用",
            fieldType: FormTypeEnum.SWITCH,
            config: {
                "active-value": "1",
                "inactive-value": "0"
            }
        },
        {
            fieldName: "listClass",
            fieldDesc: "listClass",
            fieldType: FormTypeEnum.INPUT
        },
        {
            fieldName: "cssClass",
            fieldDesc: "css样式",
            fieldType: FormTypeEnum.INPUT
        },
        {
            fieldName: "sort",
            fieldDesc: "sort",
            fieldType: FormTypeEnum.INPUT
        },
        {
            fieldName: "remark",
            fieldDesc: "备注",
            fieldType: FormTypeEnum.INPUT
        },

    ];

    return {
        filterColumn,
        tableColumn,
        dialogColumn
    };
}
