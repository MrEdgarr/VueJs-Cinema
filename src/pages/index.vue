<template>
    <section>
        <HomeBanner />
    </section>
    <section class="xs:py-10">
        <v-container>
            <HomeMovie heading="Phim đang chiếu" />
        </v-container>
    </section>
    <v-divider></v-divider>
    <section class="xs:py-10">
        <v-container>
            <HomeMovie heading="Phim sắp chiếu" />
        </v-container>
    </section>
    <v-divider></v-divider>
    <section class="xs:py-10">
        <v-container>
            <HomeBlog />
        </v-container>
    </section>
    <v-divider></v-divider>
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
//
</script>
