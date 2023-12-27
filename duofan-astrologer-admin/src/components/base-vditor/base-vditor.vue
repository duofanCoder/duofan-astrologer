<template>
  <div ref="vditorRef"></div>
</template>

<script lang="ts" setup>
import Vditor from "vditor";
import "vditor/dist/index.css";
import {useEnv, useMessage} from "@/hooks";

const props = defineProps({
  filePathType: {type: String, default: "cache"},
  storageTypeDic: {type: String, default: "local"},
  height: {type: Number, default: 300},
  modelValue: {type: String, default: ""}
});

const emit = defineEmits(["update:modelValue", "change"]);

const vditorRef = ref();
const vditorInstance = ref<any>(null);
const firstInit = ref(false);
const {VITE_BASE_UPLOAD_API} = useEnv();
onMounted(() => {
  initVaitor();
});

const initVaitor = () => {
  const vditorEl = unref(vditorRef) as HTMLElement;
  if (!vditorEl) return;
  const instance = new Vditor(vditorEl, {
    lang: "zh_CN",
    mode: "ir",
    fullscreen: {
      index: 520
    },
    preview: {
      actions: []
    },
    resize: {
      enable: true
    },
    input: (v) => {
      emit("update:modelValue", v);
      emit("change", v);
    },
    after: () => {
      nextTick(() => {
        if (props.modelValue) {
          instance.setValue(props.modelValue);
        }
        vditorInstance.value = instance;
        firstInit.value = true;
      });
    },
    upload: {
      token: "",
      accept: 'image/*,.mp3, .wav, .rar',
      url: VITE_BASE_UPLOAD_API,
      headers: {
        "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6Imp3dCJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjoiUk9MRV9BRE1JTiIsImN1cnJlbnRSb2xlTm8iOiJBRE1JTiIsImlhdCI6MTcwMDQ4NTg5Mn0.DtgDJqcbf5LsaM5DpE-K4ThFn9jAwualkMs9kyDvz7c"
      },
      extraData: {
        filePathType: props.filePathType,
        storageTypeDic: props.storageTypeDic
      },
      format: (files, responseText) => {
        const result = JSON.parse(responseText);
        if (result.code === '200') {
          const fileName = result.data.fileOriginalName;
          const succMap = {} as any;
          succMap[fileName] = result.data.isKeepSuffix === "1" ? result.data.resourceMapVisitUrl : result.data.accessUrl;
          return JSON.stringify({
            "code": 0,
            "data": {
              "errFiles": [],
              succMap
            }
          });
        } else {
          useMessage().error(result.msg);
          return JSON.stringify({
            "code": 1,
            "msg": "上传失败！"
          });
        }
      },
      withCredentials: true,
      linkToImgUrl: VITE_BASE_UPLOAD_API + "a",
      linkToImgCallback(responseText: string) {
        const result = JSON.parse(responseText);
        if (result.code === '200') {
          const fileName = result.data.fileOriginalName;
          const succMap = {} as any;
          succMap[fileName] = result.data.isKeepSuffix === "1" ? result.data.resourceMapVisitUrl : result.data.accessUrl;
          return JSON.stringify({
            "code": 0,
            "data": {
              "errFiles": [],
              succMap
            }
          });
        } else {
          useMessage().error(result.msg);
          return JSON.stringify({
            "code": 1,
            "msg": "上传失败！"
          });
        }
      },
      linkToImgFormat(responseText: string) {
        const result = JSON.parse(responseText);
        if (result.code === '200') {
          const fileName = result.data.fileOriginalName;
          const succMap = {} as any;
          succMap[fileName] = result.data.accessUrl;
          return JSON.stringify({
            "code": 0,
            "data": {
              "errFiles": [],
              succMap
            }
          });
        } else {
          useMessage().error(result.msg);
          return JSON.stringify({
            "code": 1,
            "msg": "上传失败！"
          });
        }
      },
      fieldName: "file",
      filename(name) {
        return name.replace(/[^(a-zA-Z0-9\u4e00-\u9fa5\.)]/g, '').replace(/[\?\\/:|<>\*\[\]\(\)\$%\{\}@~]/g, '').replace('/\\s/g', '');
      },
    },
    ...props,
    cache: {
      enable: false
    }
  });
};

const setContent = (value: any) => {
  if (!unref(vditorInstance)) return;
  unref(vditorInstance).setValue(value);
};

const getContent = () => {
  if (!unref(vditorInstance)) return;
  unref(vditorInstance).getValue();
};

const destroyVaitor = () => {
  if (!unref(vditorInstance)) return;
  unref(vditorInstance)?.destroy?.();
  vditorInstance.value = null;
  firstInit.value = false;
};

onActivated(() => {
  initVaitor();
});

onDeactivated(() => {
  destroyVaitor();
});

onUnmounted(() => {
  destroyVaitor();
});

defineExpose({
  setContent,
  getContent
});
</script>

<style lang="scss" scoped></style>
