<template>
    <div>
        <div class="text-center mb-10">
            <h2
                class="xs:text-2xl text-base font-bold after:bg-linear-(--gradient-heading) after:block after:w-40 after:h-0.5 after:m-auto after:mt-2.5"
            >
                Blog phim ảnh
            </h2>
        </div>
        <div class="grid grid-cols-1 xs:grid-cols-2 xs:gap-5 md:grid-cols-4">
            <div
                class="h-full cursor-pointer border-grey-300 xs:border-none border-b"
                v-for="(value, index) in itemsLoaded"
                :key="index"
            >
                <div class="flex flex-wrap pb-3 xs:pb-2">
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
        <div
            class="text-center pt-5"
            v-if="itemblog.length != itemsLoaded.length"
        >
            <v-btn
                :size="xs ? 'small' : 'default'"
                variant="outlined"
                @click="loadMore"
            >
                Xem thêm
                <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
        </div>
    </div>
</template>
<script setup>
import { useDisplay } from "vuetify";
const { xs } = useDisplay();
import itemblog from "@/utils/data/ObjectBlog";

const isLoading = ref(false);
const lengthItems = ref(8);
const loadMore = () => {
    if (lengthItems.value > itemblog.length) return;
    lengthItems.value += 4;
};
const itemsLoaded = computed(() => {
    return itemblog.slice(0, lengthItems.value);
});
</script>
<style lang="scss"></style>
