import request from "@/utils/request";

export enum Api {
    PAGE_FLY_DICT_TYPE = "/api/v1/flyDictType/page",
    GET_FLY_DICT_TYPE = "/api/v1/flyDictType/get",
    ADD_FLY_DICT_TYPE = "/api/v1/flyDictType/save",
    REMOVE_FLY_DICT_TYPE = "/api/v1/flyDictType/remove",
    UPDATE_FLY_DICT_TYPE = "/api/v1/flyDictType/update",
    SWITCH_FLY_DICT_TYPE_STATUS = "/api/v1/flyDictType/switch/status"
}

export const pageFlyDictType = (data?: any) => request.get(Api.PAGE_FLY_DICT_TYPE, data);
export const getFlyDictType = (data?: any) => request.get(Api.GET_FLY_DICT_TYPE, data);
export const saveFlyDictType = (data: any) => request.post(Api.ADD_FLY_DICT_TYPE, data);
export const updateFlyDictType = (data: any) => request.put(Api.UPDATE_FLY_DICT_TYPE, data);
export const removeFlyDictType = (data: any) => request.delete(Api.REMOVE_FLY_DICT_TYPE, data);
export const switchFlyDictTypeStatus = (data: any) => request.put(Api.SWITCH_FLY_DICT_TYPE_STATUS, data);
