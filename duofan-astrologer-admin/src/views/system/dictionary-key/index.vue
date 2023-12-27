<template>
  <div class="system-dict-container">
    <base-page-table table-title="字典列表" :filter-config="filterConfig" :table-config="tableConfig">
      <template #buttons>
        <base-button type="primary" @click="handleAddDict">添加字典</base-button>
        <base-button type="danger" @click="handleRemoveDict">删除字典</base-button>
      </template>
    </base-page-table>
    <DictDialog ref="dictDialogRef" @success="handleSearch"/>
  </div>
</template>

<script lang="ts" setup name="DictionaryKey">
import {useColumn} from "./column";
import {pageDictKeyList, removeDictKey, switchDictEnabled} from "@/api/system/dict";
import DictDialog from "./components/DictDialog.vue";
import {useMessage} from "@/hooks";
import {messageBox} from "@/utils";

const {tableColumn, filterColumn} = useColumn({
  search: handleToDictValue,
  edit: handleEdit,
  delete: handleDelete,
  changeSwitch: handleChangeStatus
});
const {success} = useMessage();

const router = useRouter();

const dictDialogRef = ref();

const checkRows = ref([]);
const filterConfig = reactive({
  columns: filterColumn,
  onSearch: handleSearch,
  showOpen: false,
  searchInfo: {},
  queryParams: {},
});

const tableConfig = reactive({
  columns: tableColumn,
  data: [],
  selectionShow: true,
  pagination: {
    pageIndex: 1,
    pageSize: 10,
    pageCount: 0
  },
  onSelectionChange: (rows: any) => {
    checkRows.value = rows;
  },
  onRefresh: handleSearch
});

onMounted(() => {
  handleSearch();
});

/**
 * 查询
 */
async function handleSearch() {
  const data = await pageDictKeyList({...filterConfig.queryParams});
  tableConfig.data = data.list || [];
  tableConfig.pagination.pageCount = data.pageCount;
}

function handleToDictValue(scope: any) {
  unref(dictDialogRef).showDialog(scope.row);
}

function handleAddDict() {
  unref(dictDialogRef).showDialog();
}

function handleRemoveDict() {
}

function handleEdit(scope: any) {
  unref(dictDialogRef).showDialog(scope.row);
}

async function handleDelete(scope: any) {
  const {id} = scope.row;
  await removeDictKey({id});
  success("删除成功");
  await handleSearch();
}


async function handleChangeStatus(val: any) {
  return messageBox(`确认要${val.isEnabled === "1" ? "停用" : "启用"}该字典值吗?`).then(async () => {
    await switchDictEnabled({type: val.type, code: val.code, isEnabled: val.isEnabled === "1" ? "0" : "1"});
    success(`${val.isEnabled === "1" ? "停用" : "启用"}成功`);
    await handleSearch();
  });
}
</script>

<style lang="scss" scoped></style>
