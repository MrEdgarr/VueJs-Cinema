<template>
    <v-container
        class="d-flex flex-column align-center justify-center"
        style="height: 100vh"
    >
        <v-card width="400" elevation="10" class="pa-6 text-center">
            <v-card-title class="text-h4 mb-4">
                Đồng hồ đếm ngược
            </v-card-title>

            <v-progress-circular
                :size="200"
                :width="15"
                :model-value="progress"
                color="primary"
                class="mb-6"
            >
                <div class="text-h3">{{ formattedTime }}</div>
            </v-progress-circular>

            <v-card-actions class="justify-center">
                <v-btn
                    color="primary"
                    size="large"
                    @click="startCountdown"
                    :disabled="isRunning"
                    prepend-icon="mdi-play"
                >
                    Bắt đầu
                </v-btn>

                <v-btn
                    color="secondary"
                    size="large"
                    @click="pauseCountdown"
                    :disabled="!isRunning"
                    prepend-icon="mdi-pause"
                >
                    Tạm dừng
                </v-btn>

                <v-btn
                    color="error"
                    size="large"
                    @click="resetCountdown"
                    :disabled="!isRunning && remainingTime === initialTime"
                    prepend-icon="mdi-refresh"
                >
                    Đặt lại
                </v-btn>
            </v-card-actions>
        </v-card>

        <v-snackbar v-model="showTimeoutAlert" color="error" timeout="2000">
            Hết giờ!
        </v-snackbar>
    </v-container>
</template>

<script setup>
import { ref, computed, onUnmounted } from "vue";

const initialTime = 10; // 10 phút tính bằng giây
const remainingTime = ref(initialTime);
const isRunning = ref(false);
const showTimeoutAlert = ref(false);
let timer = null;

// Định dạng thời gian MM:SS
const formattedTime = computed(() => {
    const minutes = Math.floor(remainingTime.value / 60);
    const seconds = remainingTime.value % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
});

// Tính % tiến trình
const progress = computed(() => {
    return (remainingTime.value / initialTime) * 100;
});

const startCountdown = () => {
    if (isRunning.value) return;

    isRunning.value = true;
    timer = setInterval(() => {
        remainingTime.value--;
        if (remainingTime.value <= 0) {
            clearInterval(timer);
            isRunning.value = false;
            showTimeoutAlert.value = true;
        }
    }, 1000);
};

const pauseCountdown = () => {
    clearInterval(timer);
    isRunning.value = false;
};

const resetCountdown = () => {
    pauseCountdown();
    remainingTime.value = initialTime;
};

// Tự động bắt đầu khi component được mount
onMounted(() => {
    startCountdown();
});

// Dọn dẹp khi component unmount
onUnmounted(() => {
    clearInterval(timer);
});
</script>
