<template>
  <div class="system-account-container flex">
    <div class="account-user">
      <base-page-table table-title="用户列表" :filter-config="filterConfig" :table-config="tableConfig">
        <template #buttons>
          <base-button type="primary" @click="handleAddUser">新增用户</base-button>
        </template>
      </base-page-table>
    </div>
    <UserDialog ref="userDialogRef" @success="handleSearch"/>
  </div>
</template>

<script lang="ts" setup name="Account">
import {getUserList, deleteUser, changeUserStatus} from "@/api/system/user";
import {useColumn} from "./column";
import UserDialog from "./components/UserDialog.vue";
import {useMessage} from "@/hooks";
import {messageBox} from "@/utils";

const {tableColumn, filterColumn} = useColumn({
  edit: handleEdit,
  delete: handleDelete,
  changeSwitch: handleChangeStatus
});

const {success} = useMessage();

const filterConfig = reactive({
  columns: filterColumn,
  showOpen: false,
  onSearch: handleSearch,
  searchInfo: {},
  queryParams: {}
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

const userDialogRef = ref();

onMounted(() => {
  handleSearch();
});

/**
 * 查询
 */
async function handleSearch() {
  const {pageCount, pageSize, pageIndex} = tableConfig.pagination;
  const data = await getUserList({...filterConfig.queryParams, pageIndex, pageSize});
  tableConfig.data = data.list || [];
  tableConfig.pagination.pageCount = data.pageCount;
}

function handleTreeFilter(val: string) {
  // filterConfig.searchInfo.deptId = val;
  handleSearch();
}

function handleAddUser() {
  unref(userDialogRef).showDialog();
}

function handleEdit(scope: any) {
  unref(userDialogRef).showDialog(scope.row);
}

async function handleDelete(scope: any) {
  const {id} = scope.row;
  await deleteUser({id});
  success("删除成功");
  await handleSearch();
}

async function handleChangeStatus(val: any) {
  return messageBox(`确认要${val.isLocked === "1" ? "启用" : "停用"}该用户吗?`).then(async () => {
    await changeUserStatus({username: val.username, isLocked: val.isLocked === "1" ? "0" : "1"});
    success(`${val.isLocked === "1" ? "启用" : "停用"}成功`);
    handleSearch();
  });
}
</script>

<style lang="scss" scoped>
.system-account-container {
  height: 100%;

  .account-dept {
    width: 300px;
  }

  .account-user {
    margin-left: 16px;
    width: 100%;
  }
}
</style>
