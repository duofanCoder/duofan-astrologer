import {useEnv} from "@/hooks";
import {useUserStoreWithOut} from "@/stores/modules/user";

const {VITE_BASE_UPLOAD_API} = useEnv();

export default {
    modelValue: {
        type: [String, Number]
    },
    name: {
        type: String,
        default: "files"
    },
    action: {
        type: String,
        default: VITE_BASE_UPLOAD_API
    },
    data: {
        type: Object
    },
    autoUpload: {
        type: Boolean,
        default: false
    },
    limit: {
        type: Number,
    },
    responseFn: {
        type: Function
    },
    responseField: {
        type: String,
        default: "accessUrl"
    },
    headers: {
        type: Object,
        default: () => {
            const {getToken, getHeaderKey} = useUserStoreWithOut();
            if (getToken) {
                const headers: any = {};
                headers![unref(`${getHeaderKey}`)] = unref(`${getToken}`) ?? "";
                console.log(headers);
                return headers;
            }
        }
    },
    accept: {
        type: String
    },
};
