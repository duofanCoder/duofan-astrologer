<template>
  <div ref="baseFilterRef">
    <base-form
        :model="state.baseFilterForm"
        class="base-filter"
        :label-width="labelWidth"
        inline
        :label-position="labelPosition"
        :columns="filterColumnList"
        :col-props="colProps"
        :class="{ open: state.isOpen }"
    >
      <template #action>
        <div class="base-filter-action">
          <base-button type="primary" @click="handleSearch">查询</base-button>
          <base-button type="primary" plain @click="handleReset">重置</base-button>
          <base-button type="primary" link @click="handleToggle" class="open-action" v-if="showOpen"
          >{{ state.isOpen ? "收起" : "展开" }}
            <base-icon :icon="state.isOpen ? 'arrowUp' : 'arrowDown'" class="ml5"
            />
          </base-button>
        </div>
      </template>
      <template v-for="item in filterColumnList" #[item.fieldName]>
        <slot :name="item.fieldName"></slot>
      </template>
    </base-form>
  </div>
</template>

<script lang="ts" setup>
import baseFilterProps from "./props";
import {FormColumnType} from "../base-form";
import {isArray, isUndefined} from "@/utils";

const props = defineProps(baseFilterProps);

const emit = defineEmits(["search"]);

const state = reactive({
  baseFilterForm: props.searchInfo as any,
  queryParams: props.queryParams as any,
  isOpen: false
});

const baseFilterRef = ref();

const filterColumnList = computed((): FormColumnType[] => {
  return props.columns.filter((item) => isUndefined(item.active) || item.active);
});

const handleSearch = () => {
  if (state.baseFilterForm.time && state.baseFilterForm.time.length > 0) {
    state.baseFilterForm.startTime = state.baseFilterForm.time[0];
    state.baseFilterForm.endTime = state.baseFilterForm.time[1];
  }
  const searchQuery: any = {};
  Object.assign(searchQuery, state.baseFilterForm);
  // 对时间选择器、下拉框选择转查询参数
  for (const filterColumnListKey in props.columns) {
    const fieldName = props.columns[filterColumnListKey].fieldName;
    if (props.columns[filterColumnListKey].fieldType === "select") {
      if (isArray(state.baseFilterForm[fieldName])) {
        searchQuery[fieldName] = state.baseFilterForm[fieldName].join(",");
      }
    }
    if (props.columns[filterColumnListKey].fieldType === "date") {
      if (isArray(state.baseFilterForm[fieldName])) {
        searchQuery[fieldName] = state.baseFilterForm[fieldName].join("~");
      }
    }
  }
  if (state.queryParams && searchQuery) {
    Object.assign(state.queryParams, searchQuery);
  }

  emit("search", searchQuery);
};

const handleReset = () => {
  unref(filterColumnList).forEach((item) => {
    if (item?.config?.clearable === false) return;
    state.baseFilterForm[item.fieldName] = "";
  });
  handleSearch();
};

const handleToggle = () => {
  state.isOpen = !state.isOpen;
};
</script>

<style lang="scss" scoped>
.base-filter {
  :deep(.el-form-item) {
    margin-right: 0 !important;
  }

  &.open {
    height: auto;

    :deep(.el-row) {
      height: auto;
    }
  }

  :deep(.el-row) {
    height: 47px;
    overflow: hidden;
  }

  .base-filter-action {
    margin-bottom: 10px;
    text-align: right;

    .open-action {
      transition: all 0.3s;
    }
  }
}
</style>
