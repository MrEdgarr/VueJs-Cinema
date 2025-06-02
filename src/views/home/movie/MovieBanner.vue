<template>
    <div class="text-white">
        <v-img
            gradient="to right,
                        rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px),
                        rgba(31.5, 31.5, 31.5, 0.84) 50%,
                        rgba(31.5, 31.5, 31.5, 0.84) 100%"
            class="bg-center"
            :style="`background: url('https://cdn.galaxycine.vn/media/2025/5/13/gravity-750_1747131330170.jpg')`"
        >
            <v-container>
                <div class="grid grid-cols-1 md:grid-cols-5 md:gap-5">
                    <div class="flex justify-center">
                        <v-img
                            src="https://cdn.galaxycine.vn/media/2025/5/13/gravity-500_1747131330898.jpg"
                            :max-width="xs ? 100 : 150"
                            max-height="225"
                            class="rounded-lg"
                        ></v-img>
                    </div>
                    <div class="md:col-span-4 md:pt-0 pt-2.5 text-grey-100">
                        <div class="mb-2.5 md:text-left text-center">
                            <p class="xs:text-2xl text-xl">
                                Cuộc Chiến Không Trọng Lực
                            </p>
                            <p class="text-grey-400 xs:text-sm text-xs">
                                Chính kịch, Gay cấn, Khoa học - Viễn tưởng
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
                            <div class="py-2.5">
                                <p class="xs:text-sm text-xs">
                                    {{ displayedText }}
                                    <span
                                        class="text-primary cursor-pointer"
                                        @click="loadMore"
                                    >
                                        {{
                                            showMoreButton
                                                ? "...Xem thêm"
                                                : "Thu gọn"
                                        }}</span
                                    >
                                </p>
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
                                    <span> 16/05/2025 </span>
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
                                    <span> 91 phút </span>
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
                                    <span> 13+ </span>
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
import { useDisplay } from "vuetify";
const { xs } = useDisplay();
const isLoading = ref(false);

const fullText = ref(
    `Tiến sĩ Ryan Stone, một kỹ sư y tế xuất sắc trong nhiệm vụ Tàu con thoi đầu tiên của cô, cùng với phi hành gia kỳ cựu Matt Kowalsky chỉ huy chuyến bay cuối cùng trước khi nghỉ hưu. Nhưng trên một chuyến đi bộ ngoài không gian dường như thường lệ, thảm họa đã ập đến. Tàu con thoi bị phá hủy, khiến Stone và Kowalsky hoàn toàn bị trói buộc vào nhau và rơi vào bóng tối của không gian. Sự im lặng chói tai cho họ biết họ đã mất bất kỳ liên kết nào với Trái đất và bất kỳ cơ hội giải cứu nào. Khi nỗi sợ hãi chuyển sang hoảng sợ, mỗi luồng không khí sẽ ăn hết lượng oxy ít ỏi còn lại. Nhưng cách duy nhất về nhà có thể là đi xa hơn vào khoảng không gian rộng lớn đáng sợ.`
);
const displayedChars = ref(200);
const displayedText = computed(() => {
    return fullText.value.length > displayedChars.value
        ? fullText.value.substring(0, displayedChars.value)
        : fullText.value;
});
const showMoreButton = computed(() => {
    return fullText.value.length > displayedChars.value;
});
const loadMore = () => {
    fullText.value.length > displayedChars.value
        ? (displayedChars.value = fullText.value.length)
        : (displayedChars.value = 200);
};
</script>
<style lang=""></style>
