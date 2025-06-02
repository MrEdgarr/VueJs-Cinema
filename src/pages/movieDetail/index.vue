<template>
    <section>
        <movie-banner />
    </section>
    <section>
        <v-container>
            <router-view></router-view>
        </v-container>
    </section>
</template>
<script setup>
import MovieBanner from "@/views/home/movie/MovieBanner.vue";
</script>

<style></style>
