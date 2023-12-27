import type {AppRouteType} from "@/router/types";

const system: AppRouteType[] = [
    {
        path: "/astro",
        name: "Astro",
        component: () => import("@/layouts/index.vue"),
        redirect: "/astro/phase",
        meta: {
            title: "星象师应用",
            icon: "svg-setting",
            sort: 10,
            permission: "ROLE_ADMIN"
        },
        children: [
            {
                path: "/astro/phase",
                name: "AstroPhase",
                component: () => import("@/views/astro/AstPhase/index.vue"),
                meta: {
                    title: "相位管理",
                    icon: "",
                    sort: 1,
                    permission: "ROLE_ADMIN"
                }
            },
        ]
    }
];

export default system;
