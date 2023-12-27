import { defineStore } from "pinia";
import { store, storeReset } from "../index";
import { login, getUserInfo } from "@/api/user";
import { addLoginInfo } from "@/api/log";
import { usePermissionStore } from "./permission";
import { resetRouter } from "@/router";
import type { Router } from "vue-router";

interface UserState {
    tokenInfo: any;
    userInfo: any;
}

interface LoginParams {
    username: string;
    password: string;
}

export const useUserStore = defineStore({
    id: "user",
    persist: true,
    state: (): UserState => ({
        tokenInfo: {},
        userInfo: {}
    }),
    getters: {
        getToken(): string {
            return this.tokenInfo.token;
        },
        getHeaderKey(): string {
            return this.tokenInfo.headerKey;
        },
        getRoleIds(): string[] {
            return this.userInfo.authorityList;
        }
    },
    actions: {
        setUserInfo(userInfo: any) {
            this.userInfo = userInfo;
        },
        setTokenInfo(tokenInfo: any) {
            this.tokenInfo = tokenInfo;
        },
        async login(params: LoginParams) {
            const tokenInfo = await login(params);
            this.setTokenInfo(tokenInfo);
            await this.getUserInfo();
            // await this.addLoginLog();
        },

        logout(router: Router) {
            storeReset();
            resetRouter();
            const { currentRoute } = router;
            router.replace({
                path: "/login",
                query: {
                    redirect: currentRoute.value.path
                }
            });
        },

        async getUserInfo() {
            if (!this.tokenInfo.token) return;
            const userInfo = await getUserInfo();
            this.setUserInfo(userInfo);
        },

        async addLoginLog() {
            await addLoginInfo({
                username: this.userInfo.username
            });
        },

        async changeRole(role: string) {
            storeReset();
            resetRouter();
            let params: any = {};
            if (role === "admin") {
                params = { username: "admin", password: 123456 };
            } else {
                params = { username: "test", password: 123456 };
            }
            await this.login(params);
            const usePermission = usePermissionStore();
            usePermission.changeRole();
        }
    }
});

// 便于外部使用
export const useUserStoreWithOut = () => {
    return useUserStore(store);
};
