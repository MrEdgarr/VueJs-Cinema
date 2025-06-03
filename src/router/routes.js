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
                path: "movies",
                name: "MovieRedirect",
                children: [
                    {
                        path: "",
                        name: "showtimeRedirect",
                        component: () => import("@/pages/showtime"),
                    },
                    {
                        path: ":id",
                        name: "MovieDetailRedirect",
                        component: () => import("@/pages/movieDetail"),
                        redirect: { name: "SchudeleRedirect" },
                        children: [
                            {
                                path: "",
                                name: "SchudeleRedirect",
                                component: () =>
                                    import(
                                        "@/views/home/movie/MovieContent.vue"
                                    ),
                            },
                            {
                                path: "",
                                name: "SeatRedirect",
                                component: () =>
                                    import("@/views/home/movie/MovieSeat.vue"),
                            },
                        ],
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
