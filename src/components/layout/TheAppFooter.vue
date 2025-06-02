<template>
    <v-footer class="d-flex flex-column bg-surface">
        <v-container>
            <div class="grid grid-cols-12">
                <div class="md:col-span-3 col-span-12 xs:col-span-6 pb-5">
                    <div class="!text-base !font-semibold">
                        <h3>GIỚI THIỆU</h3>
                    </div>
                    <div class="cursor-pointer text-sm pt-2.5">
                        <span class="hover:!text-primary text-grey-500">
                            Về Chúng Tôi
                        </span>
                    </div>
                    <div class="cursor-pointer text-sm pt-2.5">
                        <span class="hover:!text-primary text-grey-500">
                            Thoả Thuận Sử Dụng
                        </span>
                    </div>
                    <div class="cursor-pointer text-sm pt-2.5">
                        <span class="hover:!text-primary text-grey-500">
                            Quy Chế Hoạt Động
                        </span>
                    </div>
                    <div class="cursor-pointer text-sm pt-2.5">
                        <span class="hover:!text-primary text-grey-500">
                            Chính Sách Bảo Mật
                        </span>
                    </div>
                </div>
                <div class="md:col-span-3 col-span-12 xs:col-span-6 pb-5">
                    <div class="!text-base !font-semibold">
                        <h3>GÓC ĐIỆN ẢNH</h3>
                    </div>
                    <div class="cursor-pointer text-sm pt-2.5">
                        <span class="hover:!text-primary text-grey-500">
                            Thể Loại Phim
                        </span>
                    </div>
                    <div class="cursor-pointer text-sm pt-2.5">
                        <span class="hover:!text-primary text-grey-500">
                            Bình Luận Phim
                        </span>
                    </div>
                    <div class="cursor-pointer text-sm pt-2.5">
                        <span class="hover:!text-primary text-grey-500">
                            Blog Điện Ảnh
                        </span>
                    </div>
                    <div class="cursor-pointer text-sm pt-2.5">
                        <span class="hover:!text-primary text-grey-500">
                            Phim Hay Tháng
                        </span>
                    </div>
                </div>
                <div class="md:col-span-3 col-span-12 xs:col-span-6 pb-5">
                    <div class="!text-base !font-semibold">
                        <h3>HỖ TRỢ</h3>
                    </div>
                    <div class="cursor-pointer text-sm pt-2.5">
                        <span class="hover:!text-primary text-grey-500">
                            Góp Ý
                        </span>
                    </div>
                    <div class="cursor-pointer text-sm pt-2.5">
                        <span class="hover:!text-primary text-grey-500">
                            Rạp / Giá Vé
                        </span>
                    </div>
                    <div class="cursor-pointer text-sm pt-2.5">
                        <span class="hover:!text-primary text-grey-500">
                            Tuyển Dụng
                        </span>
                    </div>
                    <div class="cursor-pointer text-sm pt-2.5">
                        <span class="hover:!text-primary text-grey-500">
                            FAQ
                        </span>
                    </div>
                </div>
                <div class="md:col-span-3 col-span-12 xs:col-span-6 pb-5">
                    <div>
                        <v-img src="@/assets/1.png" class="w-30"></v-img>
                        <div class="my-5">
                            <v-icon
                                size="default"
                                class="mr-2 hover:scale-115 hover:text-primary"
                                >mdi-facebook</v-icon
                            >
                            <v-icon
                                size="default"
                                class="mr-2 hover:scale-115 hover:text-primary"
                                >mdi-youtube</v-icon
                            >
                            <v-icon
                                size="default"
                                class="mr-2 hover:scale-115 hover:text-primary"
                                >mdi-instagram</v-icon
                            >
                            <v-icon
                                size="default"
                                class="mr-2 hover:scale-115 hover:text-primary"
                                >mdi-gitlab</v-icon
                            >
                            <v-icon
                                size="default"
                                class="mr-2 hover:scale-115 hover:text-primary"
                                >mdi-github</v-icon
                            >
                        </div>
                        <v-img
                            src="http://online.gov.vn/PublicImages/2015/08/27/11/20150827110756-dathongbao.png"
                            :width="xs ? '100' : '150'"
                        ></v-img>
                    </div>
                </div>
            </div>
            <v-divider class="mt-10 opacity-10"></v-divider>
            <div class="pt-10">
                <h1 class="font-black text-3xl font-sans text-center">
                    <v-img src="@/assets/1.png" class="w-30 m-auto"></v-img>
                </h1>
                <div class="px-4 py-2 text-center text-xs">
                    <p>
                        © 2025 The Movie. Template design ( May
                        {{ new Date().getFullYear() }} )
                    </p>
                    <v-spacer></v-spacer>
                </div>
            </div>
        </v-container>
    </v-footer>
</template>

<script setup>
import { useDisplay } from "vuetify";
const { xs } = useDisplay();
</script>

<style lang="scss"></style>
