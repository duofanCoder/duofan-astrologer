import request from "@/utils/request";

export enum Api {
    LOGIN = "/api/v1/passport/login",
    GET_USER_INFO = "/api/v1/user/getUserInfo"
}

export const login = (data?: any) => request.post(Api.LOGIN, data);

export const getUserInfo = (data?: any) => request.post(Api.GET_USER_INFO, data);
