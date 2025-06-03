<template>
    <!-- Nội dung ứng dụng -->
    <section>
        <HomeBanner />
    </section>
    <section class="xs:py-10 py-5">
        <v-container>
            <HomeMovie heading="Phim Đang chiếu" :movies="movieStore.movies" />
        </v-container>
    </section>
    <section class="xs:py-10 py-5">
        <v-container>
            <HomeMovie
                heading="Phim Sắp chiếu"
                :isButton="true"
                :movies="movieReverse"
            />
        </v-container>
    </section>
    <section class="bg-surface xs:py-10">
        <v-container>
            <HomeBlog />
        </v-container>
    </section>
    <section class="xs:py-10">
        <v-container>
            <HomeNew />
        </v-container>
    </section>
</template>

<script setup>
import HomeBanner from "@/views/home/dashboard/HomeBanner.vue";
import HomeMovie from "@/views/home/dashboard/HomeMovie.vue";
import HomeBlog from "@/views/home/dashboard/HomeBlog.vue";
import HomeNew from "@/views/home/dashboard/HomeNew.vue";

// Store
import { movieAppStore } from "@/stores/modules/movieStore";
const movieStore = movieAppStore();

const movieReverse = ref(null);
const isLoading = ref(false);

const fetchData = async () => {
    isLoading.value = true;
    try {
        await movieStore.fetchAll();
        movieReverse.value = [...movieStore.movies].reverse();

        isLoading.value = false;
    } catch (error) {
        isLoading.value = false;
    }
};
onMounted(() => {
    fetchData();
});
</script>
<style></style>
