import {FormColumnType} from "@/components/base-form";
import {FormTypeEnum} from "@/enums/componentEnum";
import {Column} from "@/components/base-table/src/types";
import {listDictKeyList} from "@/api/system/dict";

export function useColumn(action?: any) {
    const filterColumn: FormColumnType[] = [
        {
            fieldName: "name",
            fieldDesc: "字典名称",
            fieldType: FormTypeEnum.INPUT
        },
        {
            fieldName: "type",
            fieldDesc: "字典类型",
            fieldType: FormTypeEnum.SELECT,
            config: {
                api: () => listDictKeyList("dictTypeDict"),
                labelKey: "text",
                valueKey: "code",
                multiple: true
            }
        }
    ];

    const tableColumn: Column[] = [
        {
            fieldName: "name",
            fieldDesc: "字典名称",
            showOverflowTooltip: true
        },
        {
            fieldName: "type",
            fieldDesc: "字典类型",
            showOverflowTooltip: true
        },
        {
            fieldName: "text",
            fieldDesc: "文本",
            showOverflowTooltip: true
        },
        {
            fieldName: "code",
            fieldDesc: "字典值",
            showOverflowTooltip: true
        },
        {
            fieldName: "isEnabled",
            fieldDesc: "是否启用",
            formType: "switch",
            callFunction: action?.changeSwitch
        },
        {
            fieldName: "description",
            fieldDesc: "备注",
            showOverflowTooltip: true
        },
        {
            fieldName: "createTime",
            fieldDesc: "创建时间",
            width: 160
        },
        {
            fieldName: "#",
            fieldDesc: "操作",
            formType: "operation",
            width: 155,
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
                    confirm: true,
                    callFunction: action?.delete
                }
            ]
        }
    ];
    const dialogColumn: FormColumnType[] = [
        {
            fieldName: "name",
            fieldDesc: "字典名称",
            fieldType: FormTypeEnum.INPUT
        }, {
            fieldName: "type",
            fieldDesc: "字典类型",
            fieldType: FormTypeEnum.INPUT
        },
        {
            fieldName: "text",
            fieldDesc: "字典文本",
            fieldType: FormTypeEnum.INPUT
        },
        {
            fieldName: "code",
            fieldDesc: "字典值",
            fieldType: FormTypeEnum.INPUT
        },
        {
            fieldName: "description",
            fieldDesc: "字典描述",
            fieldType: FormTypeEnum.INPUT
        },
        {
            fieldName: "sort",
            fieldDesc: "字典排序",
            fieldType: FormTypeEnum.NUMBER
        },
    ];

    return {
        filterColumn,
        tableColumn,
        dialogColumn
    };
}
