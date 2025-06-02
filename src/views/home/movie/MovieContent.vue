<template>
    <v-card>
        <div
            class="grid grid-cols-1 xs:grid-cols-2 xs:gap-x-5 gap-y-2 px-5 pt-5"
        >
            <div>
                <div
                    class="flex justify-between items-center md:text-lg text-sm font-medium"
                >
                    1. Ngày
                    <v-icon size="smail"> mdi-calendar-range</v-icon>
                </div>
                <v-select
                    v-model="form.date"
                    placeholder="Ngày"
                    :items="currentDate"
                    item-title="dayNumber"
                />
            </div>
            <div>
                <div
                    class="flex justify-between items-center md:text-lg text-sm font-medium"
                >
                    2. Rạp
                    <v-icon size="smail"> mdi mdi-map-marker</v-icon>
                </div>
                <v-select
                    v-model="form.movie"
                    placeholder="Phim"
                    :items="currentDate"
                    item-title="dayNumber"
                />
            </div>
        </div>
        <div class="pt-5">
            <v-expansion-panels variant="accordion">
                <v-expansion-panel v-for="cinema in 10" :key="cinema">
                    <v-expansion-panel-title expand-icon="mdi-menu-down">
                        <div class="flex items-center">
                            <div>
                                <v-img
                                    src="https://cdn.mservice.com.vn/app/img/booking/logo_beta.png"
                                    width="35"
                                    height="35"
                                    class="m-2 ml-3"
                                ></v-img>
                            </div>
                            <div>
                                <p
                                    class="font-bold xs:text-sm text-xs font-bold"
                                >
                                    Beta Trần Quang Khải
                                </p>
                                <span
                                    class="xs:text-sm text-xs line-clamp-1 text-gray-500"
                                >
                                    Tầng 2 & 3, Toà nhà IMC, 62 Đường Trần Quang
                                    Khải, Phường Tân Định, Quận 1, TP. Hồ Chí
                                    Minh
                                </span>
                            </div>
                        </div>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <div>
                            <label class="font-bold xs:text-sm text-xs">
                                2D Phụ Đề
                            </label>
                            <div class="mt-1.5">
                                <div
                                    class="flex items-center gap-2 mt-2 flex-wrap"
                                >
                                    <v-btn
                                        :size="xs ? 'x-small' : 'small'"
                                        variant="outlined"
                                        v-for="schedule in 10"
                                        :key="schedule"
                                        @click="
                                            $router.push({
                                                name: 'SeatRedirect',
                                            })
                                        "
                                    >
                                        15:00
                                        <strong
                                            class="xs:text-[10px] text-[8px] text-primary"
                                            >~17:00</strong
                                        >
                                    </v-btn>
                                </div>
                            </div>
                        </div>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
            <!-- <v-empty-state text="Chưa có suất chiếu" min-height="25vh"> -->
            <!-- v-if="this.scheduleStore.theater?.length == 0" -->
            <!-- </v-empty-state> -->
        </div>
    </v-card>
</template>
<script setup>
import { useDisplay } from "vuetify";
const { xs } = useDisplay();

import { CurrentDate } from "@/utils/format-date";
const currentDate = CurrentDate();
const form = ref({
    date: null,
    cinema: null,
});
const isLoading = ref(false);
</script>
<style lang="scss"></style>
