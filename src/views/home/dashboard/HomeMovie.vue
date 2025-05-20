<template>
    <div class="relative">
        <div class="text-center mb-5">
            <div
                class="xs:text-2xl text-base font-bold after:bg-linear-(--my-gradient) after:block after:w-40 after:h-0.5 after:m-auto after:mt-2.5"
            >
                {{ heading }}
            </div>
        </div>
        <swiper
            :slidesPerView="'auto'"
            :spaceBetween="10"
            :grabCursor="true"
            :navigation="{ nextEl: '.nextMovie', prevEl: '.prevMovie' }"
            @init="(swiper) => ($swiper = swiper)"
            :modules="modules"
            class="Swiper"
        >
            <swiper-slide v-for="n in 10" :key="n" class="xs:w-50 w-30">
                <!-- @click="
                    $router.push({
                        name: 'MovieRedirect',
                        params: { id: val.id },
                    })
                " -->
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
            </swiper-slide>
            <div class="hidden sm:block">
                <div
                    class="prevMovie bg-background/70 h-8 w-8 !grid place-items-center rounded-lg absolute top-1/2 -translate-y-1/2 z-10 left-4 rotate-45 cursor-pointer"
                >
                    <v-icon size="large" class="-rotate-45">
                        mdi-chevron-left
                    </v-icon>
                </div>
                <div
                    class="nextMovie bg-background/70 h-8 w-8 !grid place-items-center rounded-lg absolute top-1/2 -translate-y-1/2 z-10 right-4 rotate-135 cursor-pointer"
                >
                    <v-icon size="large" class="-rotate-135">
                        mdi-chevron-right
                    </v-icon>
                </div>
            </div>
        </swiper>
        <!-- <div
            class="absolute w-full top-1/2 -translate-y-1/2 z-10 md:block hidden"
        >
            <div
                class="btn_prev bg-surface-light shadow-xl/20 absolute w-8 h-8 rounded-lg -left-5 z-10 cursor-pointer grid place-items-center rotate-45"
                @click="$swiper.slidePrev()"
            >
                <v-icon size="large" class="-rotate-45">
                    mdi-chevron-left
                </v-icon>
            </div>
            <div
                class="btn_next bg-surface-light shadow-xl/20 absolute w-8 h-8 rounded-lg -right-5 z-10 cursor-pointer grid place-items-center -rotate-45"
                @click="$swiper.slideNext()"
            >
                <v-icon size="large" class="rotate-45">
                    mdi-chevron-right
                </v-icon>
            </div>
        </div> -->
    </div>
</template>
<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// import required modules
import { Navigation } from "swiper/modules";
// Props
const props = defineProps({
    heading: { type: String },
    movies: { type: Object },
    isLoading: { type: Boolean },
});

const modules = ref([Navigation]);
</script>
<style lang="scss"></style>
