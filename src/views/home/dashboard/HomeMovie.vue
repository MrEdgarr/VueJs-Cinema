<template>
    <div class="text-center mb-5">
        <div
            class="xs:text-2xl text-base font-bold after:bg-linear-(--gradient-heading) after:block after:w-40 after:h-0.5 after:m-auto after:mt-2.5"
        >
            {{ heading }}
        </div>
    </div>
    <div class="relative">
        <swiper
            :slidesPerView="2"
            :spaceBetween="10"
            :breakpoints="breakpoint"
            :grabCursor="true"
            :loop="true"
            :navigation="{ nextEl: '.nextMovie', prevEl: '.prevMovie' }"
            @init="(swiper) => ($swiper = swiper)"
            :modules="modules"
            class="Swiper"
        >
            <swiper-slide v-for="n in 10" :key="n">
                <router-link :to="{ name: 'MovieRedirect', params: { id: n } }">
                    <div>
                        <span
                            class="absolute top-1 right-3 bg-primary text-white text-sm font-medium rounded-md p-[4px_6px] leading-none z-20"
                        >
                            123
                        </span>

                        <div>
                            <v-img
                                rounded="lg"
                                src="https://cdn.galaxycine.vn/media/2025/4/16/quai-thu-500_1744775258641.jpg"
                                cover
                            >
                            </v-img>
                        </div>

                        <div class="mt-3.5">
                            <p
                                class="font-semibold text-left sm:text-base text-sm cursor-pointer line-clamp-1"
                            >
                                Quái Thú Đại Náo Sở Thú
                            </p>
                        </div>
                    </div>
                </router-link>
            </swiper-slide>
            <div class="hidden sm:block">
                <div
                    class="prevMovie bg-background/60 h-8 w-8 !grid place-items-center rounded-lg absolute top-1/2 -translate-y-1/2 z-10 left-4 rotate-45 cursor-pointer"
                >
                    <v-icon size="large" class="-rotate-45">
                        mdi-chevron-left
                    </v-icon>
                </div>
                <div
                    class="nextMovie bg-background/70 h-8 w-8 !grid place-items-center rounded-lg absolute top-1/2 -translate-y-1/2 z-10 right-4 -rotate-45 cursor-pointer"
                >
                    <v-icon size="large" class="rotate-45">
                        mdi-chevron-right
                    </v-icon>
                </div>
            </div>
        </swiper>
    </div>
    <div class="text-center pt-10" v-if="isButton">
        <v-btn :size="xs ? 'small' : 'default'" variant="outlined">
            Xem thêm
            <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
    </div>
</template>
<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// import required modules
import { Navigation } from "swiper/modules";
// Props
const props = defineProps({
    heading: { type: String, default: "Phim" },
    movies: { type: Object },
    isButton: { type: Boolean, default: false },
    isLoading: { type: Boolean },
});
const breakpoint = ref({
    600: {
        slidesPerView: 3,
        spaceBetween: 10,
    },
    960: {
        slidesPerView: 4,
        spaceBetween: 20,
    },
    1280: {
        slidesPerView: 5,
        spaceBetween: 20,
    },
});
const modules = ref([Navigation]);
</script>
<style lang="scss"></style>
