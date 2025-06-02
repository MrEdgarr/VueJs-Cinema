<template>
    <!-- Nội dung ứng dụng -->
    <section>
        <HomeBanner />
    </section>
    <section class="xs:py-10 py-5">
        <v-container>
            <HomeMovie heading="Phim Đang chiếu" />
        </v-container>
    </section>
    <section class="xs:py-10 py-5">
        <v-container>
            <HomeMovie heading="Phim Sắp chiếu" isButton="true" />
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
</script>
<style></style>
