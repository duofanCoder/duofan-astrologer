import request from "@/utils/request";

export enum Api {
    LIST_PERMISSION = "/api/v1/permission/list",
    BIND_PERMISSION = "/api/v1/permission/bind"
}

export function listPermission(roleNo: string) {
    return request.post(`${Api.LIST_PERMISSION}?roleNo=${roleNo}`);
}
export function bindPermission(data: any) {
    return request.post(`${Api.BIND_PERMISSION}`, data);
}
