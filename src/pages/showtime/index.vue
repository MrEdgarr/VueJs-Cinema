<template>
    <section>
        <v-img
            src="@/assets/image/tix-banner.ed8b6071.png"
            max-height="100"
            min-height="50"
            cover
        >
            <div class="grid place-items-center h-full">
                <div class="text-center text-grey-100">
                    <h4 class="xs:text-2xl text-base font-bold">Lịch chiếu</h4>
                    <span class="xs:text-sm text-xs">
                        Xem lịch chiếu phim, giá vé tiện lợi, đặt vé nhanh chỉ
                        với 1 bước!
                    </span>
                </div>
            </div>
        </v-img>
    </section>
    <section>
        <v-container>
            <ShowtimeFilter :isLoading="isLoading" />
        </v-container>
    </section>
    <section>
        <v-container>
            <ShowtimeContent :isLoading="isLoading" />
        </v-container>
    </section>
</template>
<script setup>
import ShowtimeFilter from "@/views/home/showtime/ShowtimeFiller.vue";
import ShowtimeContent from "@/views/home/showtime/ShowtimeContent.vue";

const isLoading = ref(false);
</script>
<style lang=""></style>
