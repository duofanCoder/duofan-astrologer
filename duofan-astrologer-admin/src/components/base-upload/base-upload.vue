<template>
  <!--TODO 自定义form文件上传-->
  <el-upload :on-change="handleChange"
             v-model="value"
             :action="action"
             :accept="accept"
             :headers="headers"
             class="upload-demo"
             :auto-upload="autoUpload"
             :data="data"
             @success="handleSuccess"
             v-bind="$attrs"
             ref="baseUploadRef"
             drag>
    <el-icon class="el-icon--upload">
      <UploadFilled/>
    </el-icon>
    <div class="el-upload__text">
      拖拽文件 <em>点击上传</em>
    </div>
    <template #tip>
      <div class="el-upload__tip">
        只能上传xlsx、xls文件，且不超过50mb
      </div>
    </template>
  </el-upload>
</template>

<script lang="ts" setup>
import uploadProps from "./props";
import {useVModel} from "@vueuse/core";
import {UploadFile, UploadFiles} from "element-plus";
import {useMessage} from "@/hooks";

const baseUploadRef = ref();
const props = defineProps(uploadProps);
const emit = defineEmits(["update:modelValue"]);

const value = useVModel(props, "modelValue", emit, {defaultValue: ""});

const handleChange = () => {
};
const handleSuccess = (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  if (response.code === "500") {
    useMessage().error(response.msg);
    return;
  }
  // 默认使用flyBoot的返回参数 accessUrl
  if (props.responseFn) {
    props.responseFn && props.responseFn(response.data);
  } else {
    emit("update:modelValue", response.data[props.responseField]);
  }

};
defineExpose({
  instance: baseUploadRef
});
</script>

<style scoped></style>
