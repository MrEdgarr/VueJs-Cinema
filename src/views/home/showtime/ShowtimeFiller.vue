<template>
    <div class="grid grid-cols-4 gap-2 xs:gap-5">
        <div class="col-span-2 row-start-1 col-start-1 md:col-span-1">
            <div
                class="flex justify-between items-center md:text-lg text-sm font-medium"
            >
                1. Ngày
                <v-icon size="smail"> mdi-calendar-range</v-icon>
            </div>
            <v-select
                v-model="defaultForm.date"
                placeholder="Ngày"
                :items="CurrentDate()"
                item-title="dayNumber"
                hide-details="auto"
            />
        </div>
        <div class="col-span-4 md:col-span-2 md:row-start-1 md:col-start-2">
            <div
                class="flex justify-between items-center md:text-lg text-sm font-medium"
            >
                2. Phim
                <v-icon size="smail"> mdi mdi-map-marker</v-icon>
            </div>
            <v-select
                v-model="defaultForm.movie"
                placeholder="Phim"
                :items="movies"
                item-title="name"
                hide-details="auto"
            />
        </div>
        <div class="col-span-2 row-start-1 col-start-3 md:col-span-1">
            <div
                class="flex justify-between items-center md:text-lg text-sm font-medium"
            >
                3. Rạp
                <v-icon size="smail">mdi-movie-open</v-icon>
            </div>
            <v-select
                v-model="defaultForm.cinema"
                placeholder="Rạp"
                :items="cinemas"
                variant="outlined"
                density="compact"
                hide-details="auto"
            ></v-select>
        </div>
    </div>
</template>
<script setup>
import { CurrentDate } from "@/utils/format-date";

const props = defineProps({
    movies: { type: Object },
    cinemas: { type: Object },
    isLoading: { type: Boolean },
});

const defaultForm = ref({
    date: null,
    movie: null,
    cinema: null,
});

watch(
    () => defaultForm.value,
    () => {
        // fetchData();
        console.log("asd");
    },
    { deep: true }
);
// const movies = computed(() => {
//     return props.movies ? props.movies : [];
// });
// const cinemas = computed(() => {
//     return props.cinemas ? props.cinemas : [];
// });
</script>
<style></style>
