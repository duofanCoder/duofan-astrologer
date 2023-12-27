<template>
  <base-dialog ref="baseDialogRef" width="560px" :title="getDialogTitle" @save="handleSave">
    <base-form ref="baseFormRef" :columns="dialogColumn" :rules="userRules" :model="formModel"></base-form>
  </base-dialog>
</template>

<script lang="ts" setup>
import {useColumn} from "../column";
import {useMessage} from "@/hooks";
import {addDictKey, updateDictKey} from "@/api/system/dict";
import {deepClone} from "@/utils";

const emit = defineEmits(["success"]);

const {success} = useMessage();

const formModel = reactive<any>({});

const {dialogColumn} = useColumn();

const baseDialogRef = ref();

const baseFormRef = ref();

const isEdit = ref(false);

const userRules = {
  code: [
    {
      required: true,
      message: "请输入字典值",
      trigger: ["blur", "change"]
    }
  ],
  text: [
    {
      required: true,
      message: "请输入标签",
      trigger: ["blur", "change"]
    }
  ],
  type: [
    {
      required: true,
      message: "请输入类型",
      trigger: ["blur", "change"]
    }
  ],
  name: [
    {
      required: true,
      message: "请输入名称",
      trigger: ["blur", "change"]
    }
  ],
};

const getDialogTitle = computed(() => (unref(isEdit) ? "修改字典" : "新增字典"));

const showDialog = (val: any = {}) => {
  unref(baseDialogRef).showDialog();
  nextTick(() => {
    unref(baseFormRef).instance.resetFields();
    isEdit.value = !!val.type;
    if (unref(isEdit)) {
      Object.assign(formModel, val, {});
    }
  });
};

const hideDialog = () => {
  unref(baseDialogRef).hideDialog();
};

const handleSave = async (loading: (flag: boolean) => void) => {
  await unref(baseFormRef).instance.validate(async (valid: boolean) => {
    if (!valid) return;
    const formData = deepClone(formModel);

    loading(true);
    try {
      unref(isEdit) ? await updateDictKey(formData) : await addDictKey(formData);
      success(unref(isEdit) ? "修改成功" : "新增成功！");
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
