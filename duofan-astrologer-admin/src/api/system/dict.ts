import request from "@/utils/request";

export enum Api {
    PAGE_DICT_KEY = "/api/v1/dict/page",
    LIST_DICT_KEY = "/api/v1/dict/list",
    ADD_DICT_KEY = "/api/v1/dict/add",
    REMOVE_DICT_KEY = "/api/v1/dict/delete",
    UPDATE_DICT_KEY = "/api/v1/dict/update",
    SWITCH_DICT_ENABLED = "/api/v1/dict/enabled"
}

export const pageDictKeyList = (data?: any) => request.get(Api.PAGE_DICT_KEY, data);
export const listDictKeyList = (data?: any) => request.get(Api.LIST_DICT_KEY, {type: data});
export const addDictKey = (data: any) => request.post(Api.ADD_DICT_KEY, data);
export const updateDictKey = (data: any) => request.put(Api.UPDATE_DICT_KEY, data);
export const removeDictKey = (data: any) => request.delete(Api.REMOVE_DICT_KEY, data);

export const switchDictEnabled = (data: any) => request.put(Api.SWITCH_DICT_ENABLED, data);
