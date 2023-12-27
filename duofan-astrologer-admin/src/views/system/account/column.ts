import {FormColumnType} from "@/components/base-form";
import {FormTypeEnum} from "@/enums/componentEnum";
import {Column} from "@/components/base-table/src/types";
import {StatusData} from "@/constant/basic";
import {listDictKeyList} from "@/api/system/dict";

export function useColumn(action?: any) {

    const roleDictRef = ref([]);

    listDictKeyList("roleDict").then(data => {
        roleDictRef.value = data;
    });
    const filterColumn: FormColumnType[] = [
        {
            fieldName: "username",
            fieldDesc: "用户名",
            fieldType: FormTypeEnum.INPUT
        },
        {
            fieldName: "roleNo",
            fieldDesc: "角色",
            fieldType: FormTypeEnum.SELECT,
            config: {
                api: () => unref(roleDictRef),
                multiple: true
            }
        },
        {
            fieldName: "isLocked",
            fieldDesc: "冻结状态",
            fieldType: FormTypeEnum.SELECT,
            config: {
                options: StatusData
            }
        }
    ];

    const tableColumn: Column[] = [
        {
            fieldName: "username",
            fieldDesc: "用户名"
        },
        {
            fieldName: "roleNo",
            fieldDesc: "角色",
            formType: "tag"
        },
        {
            fieldName: "isLocked",
            fieldDesc: "冻结",
            formType: "switch",
            callFunction: action?.changeSwitch
        },
        {
            fieldName: "createTime",
            fieldDesc: "创建时间",
            width: 160
        },
        {
            fieldName: "remark",
            fieldDesc: "备注",
            showOverflowTooltip: true,
            active: false
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
            fieldName: "username",
            fieldDesc: "用户名",
            fieldType: FormTypeEnum.INPUT
        },
        {
            fieldName: "roleNo",
            fieldDesc: "角色",
            fieldType: FormTypeEnum.SELECT,
            config: {
                api: () => listDictKeyList("roleDict"),
                labelKey: "text",
                valueKey: "code",
                multiple: true
            }
        },
        // {
        //     fieldName: "deptId",
        //     fieldDesc: "所属部门",
        //     fieldType: FormTypeEnum.SELECT,
        //     config: {
        //         api: getDeptTreeList,
        //         tree: true,
        //         multiple: true,
        //         init: true,
        //         nodeKey: "deptId",
        //         props: {
        //             label: "deptName",
        //             children: "children"
        //         }
        //     }
        // },
        {
            fieldName: "remark",
            fieldDesc: "备注",
            fieldType: FormTypeEnum.INPUT,
            config: {
                type: "textarea"
            }
        }
    ];

    return {
        filterColumn,
        tableColumn,
        dialogColumn
    };
}
