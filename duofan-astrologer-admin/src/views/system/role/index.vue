<template>
  <div class="system-role-container">
    <base-page-table table-title="角色列表" :filter-config="filterConfig" :table-config="tableConfig">
      <template #buttons>
        <base-button type="primary" @click="handleAddRole">新增角色</base-button>
      </template>
    </base-page-table>
    <RoleDialog ref="roleDialogRef" @success="handleSearch"/>
  </div>
</template>

<script lang="ts" setup name="Role">
import {getRoleList, deleteRole, changeRoleStatus} from "@/api/system/role";
import RoleDialog from "./components/RoleDialog.vue";
import {useColumn} from "./column";
import {useMessage} from "@/hooks";
import {messageBox} from "@/utils";
import {changeUserStatus} from "@/api/system/user";

const {tableColumn, filterColumn} = useColumn({
  edit: handleEdit,
  delete: handleDelete,
  changeSwitch: handleChangeStatus
});

const {success} = useMessage();

const filterConfig = reactive({
  columns: filterColumn,
  onSearch: handleSearch,
  showOpen: false,
  searchInfo: {}
});

const tableConfig = reactive({
  columns: tableColumn,
  data: [],
  pagination: {
    pageIndex: 1,
    pageSize: 10,
    pageCount: 0
  },
  onRefresh: handleSearch
});

const roleDialogRef = ref();

onMounted(() => {
  handleSearch();
});

/**
 * 查询
 */
async function handleSearch() {
  const {pageCount, pageSize, pageIndex} = tableConfig.pagination;
  const data = await getRoleList({...filterConfig.searchInfo, pageIndex, pageSize});
  tableConfig.data = data.list || [];

  tableConfig.pagination.pageCount = data.pageCount;
}

function handleAddRole() {
  unref(roleDialogRef).showDialog();
}

function handleEdit(scope: any) {
  unref(roleDialogRef).showDialog(scope.row);
}

async function handleDelete(scope: any) {
  const {id} = scope.row;
  await deleteRole({id});
  success("删除成功");
  handleSearch();
}

async function handleChangeStatus(val: any) {
  return messageBox(`确认要${val.status === "0" ? "启用" : "停用"}该角色吗?`).then(async () => {
    await changeRoleStatus({isEnabled: val.isEnabled === "1" ? "0" : "1", roleNo: val.roleNo});
    success(`${val.status === "0" ? "启用" : "停用"}成功}`);
    await handleSearch();
  });
}
</script>

<style lang="scss" scoped></style>
