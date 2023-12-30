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
            fieldName: "rawPassword",
            fieldDesc: "原密码",
            fieldType: FormTypeEnum.INPUT,
            config: {
                type: "password"
            }
        },
        {
            fieldName: "newPassword",
            fieldDesc: "新密码",
            fieldType: FormTypeEnum.INPUT,
            config: {
                type: "password"
            }
        },
        {
            fieldName: "enPassword",
            fieldDesc: "确认密码",
            fieldType: FormTypeEnum.INPUT,
            config: {
                type: "password"
            }
        },
    ];

    return {
        filterColumn,
        tableColumn,
        dialogColumn
    };
}
