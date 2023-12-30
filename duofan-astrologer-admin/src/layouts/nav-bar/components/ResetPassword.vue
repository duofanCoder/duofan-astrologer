<template>
  <base-dialog ref="baseDialogRef" :fullscreen="fullscreen" :width="getWidth" title="修改密码" @save="handleSave">
    <base-form ref="baseFormRef" :columns="getColumn" :model="state.formModel" :rules="userRules"
               :label-position="labelPosition"
    >
    </base-form>
  </base-dialog>
</template>

<script lang="ts" setup>
import {useColumn} from "./column";
import {useMessage} from "@/hooks";
import {breakpointsTailwind, useBreakpoints} from '@vueuse/core';
import {computed} from "vue";
import {resetUserPassword} from "@/api/system/user";
import {useUserStore} from "@/stores/modules/user";
import {useNavBarSetting} from "@/layouts/hooks/useNavBarSetting";

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
  formModel: {
    rawPassword: "",
    newPassword: "",
    enPassword: ""
  }
});
const getColumn = computed(() => {
  return useColumn(undefined, state).dialogColumn;
});

const userRules = {
  rawPassword: [
    {
      required: true,
      message: "请输入",
      trigger: ["blur", "change"]
    }
  ], newPassword: [
    {
      required: true,
      message: "请输入",
      trigger: ["blur", "change"]
    }
  ],
  enPassword: [
    {
      required: true,
      message: "请输入",
      trigger: ["blur", "change"]
    }
  ]
};


const showDialog = (val: any = {}) => {
  unref(baseDialogRef).showDialog();
};

const hideDialog = () => {
  unref(baseDialogRef).hideDialog();
};
const router = useRouter();
const message = useMessage();
const handleSave = async (loading: (flag: boolean) => void) => {
  await unref(baseFormRef).instance.validate(async (valid: boolean) => {
    if (!valid) return;
    loading(true);
    try {
      if (state.formModel!.newPassword !== state.formModel!.enPassword) {
        message.error("两次密码不一致");
        return;
      }
      await resetUserPassword(state.formModel);
      useUserStore().logout(router);
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
