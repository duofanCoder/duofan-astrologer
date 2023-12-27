<template>
  <base-dialog ref="baseDialogRef" :fullscreen="fullscreen" :title="getDialogTitle" :width="getWidth" @save="handleSave">
    <base-form ref="baseFormRef" :columns="getColumn" :model="state.formModel" :rules="userRules"
               :label-position="labelPosition"
    >
    </base-form>
  </base-dialog>
</template>

<script lang="ts" setup>
import {useColumn} from "../column";
import {useMessage} from "@/hooks";
import {saveAstPhase, updateAstPhase} from "@/api/astro/astPhase";
import {breakpointsTailwind, useBreakpoints} from '@vueuse/core';
import {computed} from "vue";

const breakpoints = useBreakpoints(breakpointsTailwind);
const smallerThanSm = breakpoints.smaller('sm');

const getWidth = computed(() => {
  return smallerThanSm.value ? '100%' : '560px';
});

const labelPosition= computed(() => {
  return smallerThanSm.value ? 'top' : 'right';
});
const fullscreen = computed(() => {
  return smallerThanSm.value;
});
const emit = defineEmits(["success"]);


const {success} = useMessage();

const baseDialogRef = ref();

const baseFormRef = ref();

const state = reactive({
  isEdit: false,
  treeData: [],
  treeCheckData: [],
  formModel: {}
});
const getColumn = computed(() => {
  return useColumn(undefined, state).dialogColumn;
});

const userRules = {
  title: [
    {
      required: true,
      message: "请输入名称",
      trigger: ["blur", "change"]
    }
  ], typeId: [
    {
      required: true,
      message: "请输入分类",
      trigger: ["blur", "change"]
    }
  ],
  description: [
    {
      required: true,
      message: "请输入描述",
      trigger: ["blur", "change"]
    }
  ]
};

const getDialogTitle = computed(() => (state.isEdit ? "修改" : "新增"));

const showDialog = (val: any = {}) => {
  unref(baseDialogRef).showDialog();
  nextTick(async () => {
    unref(baseFormRef).instance.resetFields();
    state.isEdit = !!val.id;
    if (state.isEdit) {
      Object.assign(state.formModel, val);
    }
  });
};

const hideDialog = () => {
  unref(baseDialogRef).hideDialog();
};

const handleSave = async (loading: (flag: boolean) => void) => {
  await unref(baseFormRef).instance.validate(async (valid: boolean) => {
    if (!valid) return;
    loading(true);
    try {
      state.isEdit ? await updateAstPhase(state.formModel) : await saveAstPhase(state.formModel);
      success(state.isEdit ? "修改成功" : "新增成功！");
      emit("success");
      hideDialog();
    } finally {
      loading(false);
    }
  });
};

defineExpose({
  showDialog,
  hideDialog
});
</script>

<style scoped></style>
