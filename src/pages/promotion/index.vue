<template>
    <section>
        <div>
            <v-img
                src="@/assets/image/tix-banner.ed8b6071.png"
                max-height="100"
                min-height="100"
                cover
            >
                <div class="grid place-items-center h-full">
                    <h4 class="text-grey-100 xs:text-2xl font-bold">
                        Khuyến mãi
                    </h4>
                </div>
            </v-img>
        </div>
        <v-container>
            <div
                class="grid grid-cols-2 gap-x-3 gap-y-5 xs:gap-6 md:grid-cols-4"
            >
                <div
                    class="group h-full cursor-pointer transition-shadow md:overflow-hidden md:rounded-lg md:bg-white md:shadow-md md:hover:shadow-lg"
                    v-for="(value, index) in items"
                    :key="index"
                >
                    <div class="h-full">
                        <div class="flex h-full flex-col">
                            <div class="xs:w-full">
                                <div
                                    class="overflow-hidden rounded-lg bg-gray-200 md:rounded-none"
                                >
                                    <div class="relative block aspect-1">
                                        <span
                                            ><v-img
                                                alt="Mua vé Lotte Cinema săn bắp nước miễn phí trên MoMo!"
                                                :src="value.images"
                                                :lazy-src="value.images"
                                                aspect-ratio="1"
                                                cover
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="relative flex flex-1 flex-col xs:w-full xs:flex-auto xs:pb-7 md:px-4"
                            >
                                <div
                                    class="line-clamp-1 pr-2 pt-2 text-sm md:text-base group-hover:text-pink-600 landing:text-lpText xs:line-clamp-none xs:pb-1 xs:pr-0 xs:pt-2 xs:text-md xs:font-semibold xs:leading-snug md:landing:text-gray-900"
                                >
                                    {{ value.title }}
                                </div>
                                <div
                                    class="hidden items-center xs:absolute xs:bottom-2 xs:flex md:left-4"
                                >
                                    <span
                                        class="inline-block text-sm text-gray-500"
                                    >
                                        {{ value.text }}</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </v-container>
    </section>
</template>
<script setup>
import items from "@/utils/data/ObjectNew";
</script>
<style></style>
