<template>
    <section>
        <div>
            <v-img
                src="@/assets/image/tix-banner.ed8b6071.png"
                max-height="100"
                min-height="50"
                cover
            >
                <div class="grid place-items-center h-full">
                    <h4 class="text-grey-100 xs:text-2xl font-bold">Tin tức</h4>
                </div>
            </v-img>
        </div>
        <v-container>
            <div
                class="grid grid-cols-1 xs:grid-cols-2 xs:gap-5 md:grid-cols-4"
            >
                <div
                    class="h-full cursor-pointer"
                    v-for="(value, index) in items"
                    :key="index"
                >
                    <div
                        class="flex flex-wrap pb-3 xs:pb-2 border-grey-300 xs:border-none border-b"
                    >
                        <div
                            class="order-2 w-28 pt-2 xs:order-1 xs:w-full xs:flex-auto xs:pt-0"
                        >
                            <div class="overflow-hidden rounded">
                                <v-img
                                    alt="Danh sách phim hay Netflix tháng 5/2024"
                                    :src="value.images"
                                    :lazy-src="value.images"
                                    class="w-full xs:h-36 h-16"
                                    cover
                                />
                            </div>
                        </div>
                        <div
                            class="flex-1 pr-6 xs:order-2 xs:w-full xs:flex-auto xs:pr-0"
                        >
                            <div class="text-sm pt-3 font-semibold">
                                {{ value.title }}
                            </div>
                            <div class="text-grey-500">
                                <span class="text-xs">
                                    {{ value.text }}k lượt xem
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </v-container>
    </section>
</template>
<script setup>
import items from "@/utils/data/ObjectBlog";
</script>
<style></style>
