<template>
    <swiper
        :navigation="{ nextEl: '.nextBanner', prevEl: '.prevBanner' }"
        :pagination="{
            clickable: true,
        }"
        :keyboard="true"
        :grabCursor="true"
        :loop="true"
        :autoplay="{
            delay: 3500,
        }"
        :speed="500"
        :effect="'fade'"
        :modules="modules"
    >
        <swiper-slide v-for="(value, index) in itemBanner" :key="index">
            <!-- <router-link> -->
            <v-img class="!hidden md:!block" :src="value.imageLg" cover />
            <v-img class="md:!hidden" :src="value.iamgexs" />
            <!-- </router-link> -->
        </swiper-slide>

        <div class="hidden xs:block">
            <div
                class="prevBanner bg-background/50 h-8 w-8 !grid place-items-center rounded-lg absolute top-1/2 -translate-y-1/2 z-10 left-4 rotate-45 cursor-pointer"
            >
                <v-icon size="large" class="-rotate-45">
                    mdi-chevron-left
                </v-icon>
            </div>
            <div
                class="nextBanner bg-background/50 h-8 w-8 !grid place-items-center rounded-lg absolute top-1/2 -translate-y-1/2 z-10 right-4 rotate-135 cursor-pointer"
            >
                <v-icon size="large" class="-rotate-135">
                    mdi-chevron-right
                </v-icon>
            </div>
        </div>
    </swiper>
</template>
<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import {
    Pagination,
    Navigation,
    EffectFade,
    Keyboard,
    Autoplay,
} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
const modules = ref([Pagination, Navigation, EffectFade, Keyboard, Autoplay]);

import itemBanner from "@/utils/data/ObjectBanner";
// Props
const props = defineProps({
    isLoading: false,
});
</script>
<style lang="scss">
// .prevBanner,
// .nextBanner {
//     background: rgba(255, 255, 255, 0.5);
// }
.swiper-pagination-bullet {
    width: 5px;
    height: 5px;
    border: 1px solid white;
    opacity: 1;
    background: transparent;
    transition: width 0.5s ease-in-out, background-color 0.5s ease-in-out;
    border-radius: 10px;

    &.swiper-pagination-bullet-active {
        width: 30px;
        background-color: white;
    }
}
</style>
