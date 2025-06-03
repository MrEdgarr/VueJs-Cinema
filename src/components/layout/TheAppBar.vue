<template>
    <v-app-bar
        scroll-behavior="hide"
        scroll-threshold="50"
        :density="xs ? 'compact' : 'default'"
        color="background"
        :class="!drawer || 'shadow-none'"
    >
        <v-container class="fill-height flex-nowrap justify-between">
            <router-link to="/">
                <v-img
                    v-if="theme.global.current.value.dark"
                    src="@/assets/2.png"
                    class="xs:max-w-30 max-w-20 w-30"
                ></v-img>
                <v-img
                    v-else
                    src="@/assets/1.png"
                    class="xs:max-w-30 max-w-20 w-30"
                ></v-img
            ></router-link>
            <div
                class="md:flex hidden whitespace-nowrap items-center gap-6 px-6"
            >
                <template v-for="(value, index) in links" :key="index">
                    <router-link :to="{ name: value.nameRouter }">
                        <div class="hover:text-primary cursor-pointer">
                            {{ value.name }}
                        </div>
                    </router-link>
                </template>
            </div>
            <div class="flex items-center">
                <v-menu :close-on-content-click="false">
                    <template v-slot:activator="{ props }">
                        <div v-bind="props">
                            <v-btn
                                icon="mdi-magnify"
                                :size="xs ? 'small' : 'default'"
                            ></v-btn>
                        </div>
                    </template>
                    <v-card width="320">
                        <v-text-field
                            placeholder="Search"
                            append-inner-icon="mdi-magnify"
                            variant="solo"
                            hide-details="auto"
                        ></v-text-field>
                    </v-card>
                </v-menu>
                <v-menu :close-on-content-click="false">
                    <template v-slot:activator="{ props }">
                        <v-btn
                            icon="mdi-account-circle-outline"
                            class="md:hidden"
                            :size="xs ? 'small' : 'default'"
                            v-bind="props"
                        ></v-btn>
                    </template>
                    <v-card width="280" class="rounded-lg">
                        <div class="bg-surface-light h-20"></div>
                        <div class="text-center -mt-9 mb-4">
                            <v-avatar
                                color="background"
                                size="72"
                                class="border border-background-light"
                            >
                                <v-icon
                                    icon="$vuetify"
                                    size="x-large"
                                    class="mt-1"
                                ></v-icon
                            ></v-avatar>
                            <div class="text-xl font-medium mt-2">Guest</div>
                        </div>
                        <v-list>
                            <v-divider class="border-opacity-100"></v-divider>
                            <v-list-item
                                class="cursor-pointer"
                                prepend-icon="mdi-information"
                                title="Thông tin cá nhân"
                                link
                            >
                            </v-list-item>
                            <v-list-item
                                class="cursor-pointer"
                                prepend-icon="mdi-logout-variant"
                                title="Đăng xuất"
                                link
                            >
                            </v-list-item>
                            <v-list-item
                                class="cursor-pointer"
                                prepend-icon="mdi-login-variant"
                                title="Đăng nhập"
                                link
                                @click="openLogin"
                            >
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-menu>

                <v-btn class="md:block hidden" @click="openLogin">
                    Đăng nhập
                </v-btn>
                <v-btn
                    icon="mdi-menu"
                    @click="drawer = !drawer"
                    :size="xs ? 'small' : 'default'"
                    class="md:hidden"
                ></v-btn>
            </div>
        </v-container>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" location="right" temporary>
        <v-list>
            <template v-for="(value, index) in links">
                <v-list-item
                    :title="value.name"
                    :prepend-icon="value.icon"
                    link
                ></v-list-item>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>
<script setup>
import EventBus from "@/utils/event-bus";
import { useDisplay } from "vuetify";
const { xs } = useDisplay();
import { useTheme } from "vuetify";
const theme = useTheme();
const drawer = ref(null);
const links = ref([
    {
        name: "Trang chủ",
        nameRouter: "HomeRedirect",
        icon: "mdi-home-outline",
    },
    // {
    //     name: "Phim",
    //     nameRouter: "HomeRedirect",
    //     icon: "mdi-home-outline",
    // },
    {
        name: "Lịch chiếu",
        nameRouter: "showtimeRedirect",
        icon: "mdi-calendar-month-outline",
    },
    {
        name: "Tin tức",
        nameRouter: "blogRedirect",
        icon: "mdi-calendar-month-outline",
    },
    {
        name: "Khuyến mãi",
        nameRouter: "promotionsRedirect",
        icon: "mdi-information-outline",
    },
    {
        name: "Giới thiệu",
        nameRouter: "HomeRedirect",
        icon: "mdi-information-outline",
    },
]);

const openLogin = () => {
    EventBus.emit("isLogin", true);
};
</script>

<style scoped></style>
