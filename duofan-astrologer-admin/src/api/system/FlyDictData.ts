import request from "@/utils/request";

export enum Api {
    PAGE_FLY_DICT_DATA = "/api/v1/flyDictData/page",
    GET_FLY_DICT_DATA = "/api/v1/flyDictData/get",
    ADD_FLY_DICT_DATA = "/api/v1/flyDictData/save",
    REMOVE_FLY_DICT_DATA = "/api/v1/flyDictData/remove",
    UPDATE_FLY_DICT_DATA = "/api/v1/flyDictData/update",
    SWITCH_FLY_DICT_DATA_STATUS = "/api/v1/flyDictData/switch/status"
}

export const pageFlyDictData = (data?: any) => request.get(Api.PAGE_FLY_DICT_DATA, data);
export const getFlyDictData = (data?: any) => request.get(Api.GET_FLY_DICT_DATA, data);
export const saveFlyDictData = (data: any) => request.post(Api.ADD_FLY_DICT_DATA, data);
export const updateFlyDictData = (data: any) => request.put(Api.UPDATE_FLY_DICT_DATA, data);
export const removeFlyDictData = (data: any) => request.delete(Api.REMOVE_FLY_DICT_DATA, data);
export const switchFlyDictDataStatus = (data: any) => request.put(Api.SWITCH_FLY_DICT_DATA_STATUS, data);
