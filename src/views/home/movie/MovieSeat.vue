<template>
    <div>
        <p class="text-error xs:text-base text-xs text-center md:py-5">
            <strong>Lưu ý: </strong>
            Khán giả dưới 13 tuổi chỉ chọn suất chiếu kết thúc trước 22h và Khán
            giả dưới 16 tuổi chỉ chọn suất chiếu kết thúc trước 23h.
        </p>
        <div
            class="flex justify-between items-center py-2.5 xs:text-base text-xs"
        >
            <div>
                <p>Ngày: <strong class="text-primary">25/05</strong></p>
                <p>Giờ chiếu: <strong class="text-primary">20:30</strong></p>
            </div>
            <div>
                <div
                    class="flex cursor-pointer rounded-md border border-primary xs:px-5 md:py-1 p-1 text-center"
                >
                    <span class="xs:flex hidden pr-1">
                        Thời gian chọn ghế:
                    </span>
                    <strong class="text-primary xs:text-base text-xs">
                        {{ formattedTime }}
                    </strong>
                </div>
            </div>
        </div>
        <div class="text-center">
            <v-img src="@/assets/screen-thumb.png" height="100%"></v-img>
            <div class="font-semibold xs:text-base text-sm mt-2.5">
                Phòng chiếu số 3
            </div>
        </div>
        <div class="py-5">
            <v-item-group selected-class="bg-primary" multiple>
                <div
                    v-for="rowChair in rowChairs"
                    :key="rowChair"
                    class="md:flex grid xs:gap-1 gap-px items-center justify-center text-center xs:mt-1 mt-px"
                    style="
                        grid-template-columns: repeat(
                            auto-fit,
                            minmax(9px, 1fr)
                        );
                    "
                >
                    <div
                        class="xs:text-base text-xs aspect-square md:h-10 grid place-items-center"
                    >
                        {{ rowChair }}
                    </div>
                    <v-item
                        v-for="columChair in 14"
                        :key="columChair"
                        v-slot="{ isSelected, toggle }"
                    >
                        <p
                            class="flex items-center justify-center aspect-square md:h-10 bg-grey-200 xs:text-xs text-[8px] rounded"
                            :class="[
                                isSelected && columChair < 5
                                    ? 'bg-primary text-grey-50'
                                    : '',
                                columChair > 4
                                    ? '!cursor-not-allowed bg-(image:--gradient-seat)'
                                    : 'cursor-pointer',
                            ]"
                            @click="toggle"
                        >
                            {{ columChair }}
                        </p>
                    </v-item>
                    <div
                        class="xs:text-base text-xs aspect-square md:h-10 grid place-items-center"
                    >
                        {{ rowChair }}
                    </div>
                </div>
            </v-item-group>
            <div class="flex items-center justify-center flex-wrap mt-5">
                <div class="flex mx-2">
                    <span
                        class="block md:w-5 md:h-5 h-4 w-4 mr-1 cursor-not-allowed"
                        style="
                            background: repeating-linear-gradient(
                                45deg,
                                hsla(0, 0%, 60%, 0.4),
                                hsla(0, 0%, 60%, 0.4) 10px,
                                hsla(0, 0%, 60%, 0.6) 0,
                                hsla(0, 0%, 60%, 0.6) 20px
                            );
                        "
                    ></span>
                    <p class="xs:text-sm text-xs">Đã đặt</p>
                </div>
                <div class="flex mx-2">
                    <span
                        class="block md:w-5 md:h-5 h-4 w-4 mr-1 shadow"
                        style="
                            background-color: rgb(
                                var(--v-theme-primary)
                            ) !important;
                            box-shadow: 0 0 10px rgb(var(--v-theme-primary));
                        "
                    ></span>
                    <p class="xs:text-sm text-xs">Ghế bạn chọn</p>
                </div>
            </div>
        </div>
        <div class="block items-center mt-5 xs:flex xs:justify-between">
            <div class="xs:text-base text-xs">
                <p>
                    Ghế đã chọn:
                    <span class="font-bold text-primary"> A1, A2 </span>
                </p>
                <p>
                    Tổng tiền:
                    <span class="font-bold text-primary"> 370.000đ </span>
                </p>
            </div>
            <div class="text-center xs:mt-0 mt-5 md:text-right md:m-0">
                <v-btn
                    :size="xs ? 'small' : 'default'"
                    variant="outlined"
                    class="mr-1"
                    @click="$router.go(-1)"
                >
                    Quay lại
                </v-btn>

                <v-btn
                    :size="xs ? 'small' : 'default'"
                    color="primary"
                    @click="$router.push({ name: 'paymentRedirect' })"
                >
                    Thanh toán
                </v-btn>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useDisplay } from "vuetify";
const { xs } = useDisplay();

const initialTime = 10 * 60; // 10 phút tính bằng giây
const remainingTime = ref(initialTime);
const isRunning = ref(false);

let timer = null;

const rowChairs = ref([]);
const fromCharCode = () => {
    for (let i = 65; i <= 73; i++) {
        rowChairs.value = [...rowChairs.value, String.fromCharCode(i)];
    }
};

// Đếm ngược thời gian chọn ghế
// Định dạng thời gian MM:SS
const formattedTime = computed(() => {
    const minutes = Math.floor(remainingTime.value / 60);
    const seconds = remainingTime.value % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
});
// Bắt đầu đếm ngược 10 phút
const startCountdown = () => {
    if (isRunning.value) return;

    isRunning.value = true;
    timer = setInterval(() => {
        remainingTime.value--;
        if (remainingTime.value <= 0) {
            clearInterval(timer);
        }
    }, 1000);
};
onMounted(() => {
    fromCharCode();
    startCountdown();
});

// Dọn dẹp khi component unmount
onUnmounted(() => {
    clearInterval(timer);
});
</script>
<style lang="scss"></style>
