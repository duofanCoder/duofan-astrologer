import request from "@/utils/request";

export enum Api {
    USER_PAGE = "/api/v1/user/page",
    ADD_USER = "/api/v1/user/save",
    EDIT_USER = "/api/v1/user/update",
    DELETE_USER = "/api/v1/user/delete",
    CHANGE_USER_LOCKED = "/api/v1/user/status/locked",
    RESET_USER_PASSWORD = "/api/v1/user/password/reset"
}

export const getUserList = (data?: any) => request.get(Api.USER_PAGE, data);

export const addUser = (data?: any) => request.post(Api.ADD_USER, data);

export const deleteUser = (data?: any) => request.delete(Api.DELETE_USER, data);

export const editUser = (data?: any) => request.post(Api.EDIT_USER, data);

export const changeUserStatus = (data?: any) => request.post(Api.CHANGE_USER_LOCKED, data);
export const resetUserPassword = (data?: any) => request.post(Api.RESET_USER_PASSWORD, data);
