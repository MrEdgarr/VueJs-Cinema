<template>
    <v-app-bar
        scroll-behavior="hide"
        scroll-threshold="50"
        :density="$vuetify.display.xs ? 'compact' : 'default'"
        color="background"
    >
        <v-container class="fill-height flex-nowrap justify-between">
            <v-img
                v-if="theme.global.current.value.dark"
                src="@/assets/2.png"
                class="xs:max-w-32 max-w-20 w-20"
            ></v-img>
            <v-img
                v-else
                src="@/assets/1.png"
                class="xs:max-w-32 max-w-20 w-20"
            ></v-img>
            <div
                class="md:flex hidden whitespace-nowrap items-center gap-6 px-6"
            >
                <template v-for="(value, index) in links" :key="index">
                    <div class="hover:text-primary cursor-pointer">
                        {{ value.name }}
                    </div>
                </template>
            </div>
            <div class="flex items-center">
                <v-btn
                    icon="mdi-magnify"
                    :size="xs ? 'small' : 'default'"
                ></v-btn>
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
                                color="surface"
                                size="72"
                                class="border border-surface-light"
                            >
                                <v-icon
                                    icon="$vuetify"
                                    size="x-large"
                                    class="mt-1"
                                ></v-icon
                            ></v-avatar>
                            <div class="text-xl font-medium mt-2">Guest</div>
                        </div>
                        <v-list density="compact">
                            <v-divider class="border-opacity-100"></v-divider>
                            <v-list-item
                                class="cursor-pointer"
                                prepend-icon="mdi-information"
                                title="Thông tin cá nhân"
                            >
                            </v-list-item>
                            <v-list-item
                                class="cursor-pointer"
                                prepend-icon="mdi-logout-variant"
                                title="Đăng xuất"
                            >
                            </v-list-item> </v-list
                    ></v-card>
                </v-menu>

                <v-btn class="md:block hidden"> Đăng nhập </v-btn>
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
import { useDisplay } from "vuetify";
import { useTheme } from "vuetify";
const theme = useTheme();

const { xs } = useDisplay();
const drawer = ref(null);
const links = ref([
    {
        name: "Trang chủ",
        nameRouter: "HomeRedirect",
        icon: "mdi-home-outline",
    },

    {
        name: "Lịch chiếu",
        nameRouter: "ShowtimeRedirect",
        icon: "mdi-calendar-month-outline",
    },

    {
        name: "Giới thiệu",
        nameRouter: "ShowtimeRedirect",
        icon: "mdi-information-outline",
    },
    // {
    //     name: "Tin tức & Khuyến mãi",
    //     nameRouter: "newRedirect",
    // },
]);
</script>

<style scoped></style>
