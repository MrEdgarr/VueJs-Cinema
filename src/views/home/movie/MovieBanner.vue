<template>
    <div class="text-white">
        <v-img
            gradient="to right,
                        rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px),
                        rgba(31.5, 31.5, 31.5, 0.84) 50%,
                        rgba(31.5, 31.5, 31.5, 0.84) 100%"
            class="bg-center"
            :style="`background: url(${movie?.backdrop})`"
        >
            <v-container>
                <div class="grid grid-cols-1 md:grid-cols-5 md:gap-5">
                    <div class="flex justify-center">
                        <v-img
                            :src="movie?.poster"
                            :max-width="xs ? 100 : 150"
                            max-height="225"
                            class="rounded-lg"
                        ></v-img>
                    </div>
                    <div class="md:col-span-4 md:pt-0 pt-2.5 text-grey-100">
                        <div class="mb-2.5 md:text-left text-center">
                            <p class="xs:text-2xl text-xl">
                                {{ movie?.name }}
                            </p>
                            <p class="text-grey-400 xs:text-sm text-xs">
                                {{ movie?.genres }}
                            </p>
                        </div>
                        <div>
                            <div class="md:text-left text-center">
                                <v-btn
                                    :size="xs ? 'x-small' : 'small'"
                                    class="mr-1"
                                    variant="outlined"
                                    prepend-icon="mdi-star"
                                >
                                    Đánh giá
                                </v-btn>
                                <v-btn
                                    :size="xs ? 'x-small' : 'small'"
                                    class=""
                                    variant="outlined"
                                    prepend-icon="mdi-play-circle-outline"
                                >
                                    Trailer
                                </v-btn>
                            </div>
                            <div class="py-2.5 xs:text-sm text-xs">
                                <span :class="{ 'line-clamp-2': !expanded }">
                                    {{ movie?.describe }}
                                </span>
                                <span
                                    class="text-primary cursor-pointer"
                                    @click="expanded = !expanded"
                                >
                                    {{ expanded ? "Thu gọn" : "Xem thêm" }}
                                </span>
                            </div>
                            <div class="grid grid-cols-1 grid-cols-3">
                                <div
                                    class="md:text-left text-center xs:text-sm text-xs"
                                >
                                    <strong>
                                        <v-icon> mdi-calendar-blank </v-icon>
                                    </strong>
                                    <span class="d-none d-sm-inline-block">
                                        Khởi chiếu
                                    </span>
                                    <br />
                                    <span>
                                        {{
                                            formatDateTime(movie?.releases)
                                                ?.formatDate
                                        }}
                                    </span>
                                </div>
                                <div
                                    class="md:text-left text-center xs:text-sm text-xs"
                                >
                                    <strong>
                                        <v-icon>
                                            mdi-clock-time-three-outline
                                        </v-icon>
                                    </strong>
                                    <span class="d-none d-sm-inline-block">
                                        Thời lượng
                                    </span>
                                    <br />
                                    <span> {{ movie?.duration }}phút </span>
                                </div>
                                <div
                                    class="md:text-left text-center xs:text-sm text-xs"
                                >
                                    <strong>
                                        <v-icon>
                                            mdi-account-check-outline
                                        </v-icon>
                                    </strong>
                                    <span class="d-none d-sm-inline-block">
                                        Giới hạn tuổi
                                    </span>
                                    <br />
                                    <span> {{ movie?.cens }} </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </v-container>
        </v-img>
    </div>
</template>
<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
import { movieAppStore } from "@/stores/modules/movieStore";
const movieStore = movieAppStore();
import { useDisplay } from "vuetify";
const { xs } = useDisplay();
import { formatDateTime } from "@/utils/format-date";
const isLoading = ref(false);
const movie = ref(null);
const expanded = ref(false);

const fetchData = async () => {
    isLoading.value = true;
    try {
        const _id = route.params.id;
        console.log(_id);
        await movieStore.fetchAll();
        movie.value = movieStore.movies.filter((item) => item.id == _id)[0];
        console.log(movie.value);
        isLoading.value = false;
    } catch (error) {
        console.log(error);
        isLoading.value = false;
    }
};
onMounted(() => {
    fetchData();
});
</script>
<style lang="scss" scoped></style>
