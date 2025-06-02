export const routes = [
    {
        path: "/",
        component: () => import("@/layouts/default.vue"),
        children: [
            {
                path: "/",
                name: "HomeRedirect",
                component: () => import("@/pages/index.vue"),
            },
            {
                path: "movie/:id",
                name: "MovieRedirect",
                component: () => import("@/pages/movieDetail"),
                redirect: { name: "MovieDetailRedirect" },
                children: [
                    {
                        path: "",
                        name: "MovieDetailRedirect",
                        component: () =>
                            import("@/views/home/movie/MovieContent.vue"),
                    },
                    {
                        path: "",
                        name: "SeatRedirect",
                        component: () =>
                            import("@/views/home/movie/MovieSeat.vue"),
                    },
                ],
            },
            {
                path: "payment",
                name: "paymentRedirect",
                component: () => import("@/pages/payment"),
            },
            {
                path: "blog",
                name: "blogRedirect",
                component: () => import("@/pages/blog"),
            },
            {
                path: "promotions",
                name: "promotionsRedirect",
                component: () => import("@/pages/promotion"),
            },
        ],
    },
    {
        path: "/:pathMatch(.*)*",
        component: () => import("@/pages/[...error].vue"),
    },
];
