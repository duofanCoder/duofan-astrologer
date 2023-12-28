<script lang="ts" setup>
import {pageAstPhase, removeAstPhase} from "@/api/astro/astPhase";
import AstPhaseDialog from "./components/AstPhaseDialog.vue";
import {useColumn} from "./column";
import {useMessage} from "@/hooks";
import useClipboard from 'vue-clipboard3';

const router = useRouter();
const { toClipboard } = useClipboard();
const copyPreviewPath = async (text?: string) => {
  try {
    await toClipboard(text);
  } catch (e) {
    console.error(e);
  }
};

const {tableColumn, filterColumn} = useColumn({
  edit: handleEdit,
  delete: handleDelete,
  copy:handleCopy,
  switchStatus: handleChangeStatus
});



const {success} = useMessage();

const filterConfig = reactive({
  columns: filterColumn,
  onSearch: handleSearch,
  showOpen: false,
  searchInfo: {}
});

const tableConfig = reactive({
  indexShow: false,
  columns: tableColumn,
  data: [],
  pagination: {
    pageIndex: 1,
    pageSize: 10,
    pageCount: 0
  },
  onRefresh: handleSearch
});

const dialogRef = ref();

onMounted(() => {
  handleSearch();
});

/**
 * 查询
 */
async function handleSearch() {
  const {pageSize, pageIndex} = tableConfig.pagination;
  const data = await pageAstPhase({...filterConfig.searchInfo, pageIndex, pageSize});
  tableConfig.data = data.list || [];

  tableConfig.pagination.pageCount = data.pageCount;
}
// 复制数据到剪切板
function handleCopy(data: any){
  copyPreviewPath(data.row.analysisContent);
  success("复制成功");
}
function handleAddType() {
  unref(dialogRef).showDialog();
}

function handleEdit(scope: any) {
  unref(dialogRef).showDialog(scope.row);
}

async function handleDelete(scope: any) {
  const {id} = scope.row;

  await removeAstPhase({id});
  success("删除成功");
  await handleSearch();
}

async function handleChangeStatus(val: any) {
  // return messageBox(`确认要${val.isVisible === "0" ? "显示" : "隐藏"}该记录吗?`).then(async () => {
  //   await switchStatus({status: val.status === "1" ? "0" : "1", id: val.id});
  //   success(`${val.status === "0" ? "显示" : "隐藏"}成功}`);
  //   await handleSearch();
  // });
}
</script>

<template>
  <div class="">
    <base-page-table :filter-config="filterConfig" :table-config="tableConfig" table-title="列表">
      <template #buttons>
        <base-button type="primary" @click="handleAddType">新增</base-button>
      </template>
    </base-page-table>
    <AstPhaseDialog ref="dialogRef" @success="handleSearch"/>
  </div>
</template>

<style lang="scss" scoped></style>
