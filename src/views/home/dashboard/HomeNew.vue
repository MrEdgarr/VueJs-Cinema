<template>
    <div>
        <div class="text-center mb-10">
            <h2
                class="xs:text-2xl text-base font-bold after:bg-linear-(--gradient-heading) after:block after:w-40 after:h-0.5 after:m-auto after:mt-2.5"
            >
                Tin tức - Khuyến mãi
            </h2>
        </div>
        <div class="grid grid-cols-2 gap-x-2 gap-y-5 xs:gap-5 md:grid-cols-4">
            <div
                class="cursor-pointer transition-shadow md:overflow-hidden md:rounded-lg md:shadow-md md:hover:shadow-lg"
                v-for="(value, index) in itemsLoaded"
                :key="index"
            >
                <div>
                    <div class="overflow-hidden rounded-lg md:rounded-none">
                        <span>
                            <v-img
                                alt="Mua vé Lotte Cinema săn bắp nước miễn phí trên MoMo!"
                                :src="value.images"
                                :lazy-src="value.images"
                                cover
                                aspect-ratio="1"
                            />
                        </span>
                    </div>
                    <div class="md:px-4 py-2 pr-0">
                        <div
                            class="line-clamp-2 pt-2 xs:text-sm text-xs xs:line-clamp-none xs:pb-1 font-semibold xs:leading-snug md:landing:text-grey-900"
                        >
                            {{ value.title }}
                        </div>
                        <div class="hidden xs:bottom-2 xs:flex">
                            <span class="text-xs text-grey-500">
                                {{ value.text }}</span
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="text-center pt-10"
            v-if="itemnew.length != itemsLoaded.length"
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
import itemnew from "@/utils/data/ObjectNew";

const isLoading = ref(false);
const lengthItems = ref(8);
const loadMore = () => {
    if (lengthItems.value > itemnew.length) return;
    lengthItems.value += 4;
};
const itemsLoaded = computed(() => {
    return itemnew.slice(0, lengthItems.value);
});
</script>
<style lang=""></style>
