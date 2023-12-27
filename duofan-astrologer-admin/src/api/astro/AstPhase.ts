import request from "@/utils/request";

export enum Api {
    PAGE_AST_PHASE = "/api/v1/astPhase/page",
    GET_AST_PHASE = "/api/v1/astPhase/get",
    ADD_AST_PHASE = "/api/v1/astPhase/save",
    REMOVE_AST_PHASE = "/api/v1/astPhase/remove",
    UPDATE_AST_PHASE = "/api/v1/astPhase/update",
    SWITCH_AST_PHASE_STATUS = "/api/v1/astPhase/switch/status"
}

export const pageAstPhase = (data?: any) => request.get(Api.PAGE_AST_PHASE, data);
export const getAstPhase = (data?: any) => request.get(Api.GET_AST_PHASE, data);
export const saveAstPhase = (data: any) => request.post(Api.ADD_AST_PHASE, data);
export const updateAstPhase = (data: any) => request.put(Api.UPDATE_AST_PHASE, data);
export const removeAstPhase = (data: any) => request.delete(Api.REMOVE_AST_PHASE, data);
export const switchAstPhaseStatus = (data: any) => request.put(Api.SWITCH_AST_PHASE_STATUS, data);
