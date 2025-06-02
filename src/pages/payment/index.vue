<template>
    <section>
        <v-container>
            <div class="md:grid md:grid-cols-12 md:gap-5">
                <div class="col-span-8 md:pb-0 pb-5">
                    <v-card rounded="lg">
                        <v-card-title>
                            <h4 class="text-base font-bold">Thông tin phim</h4>
                        </v-card-title>
                        <v-card-text>
                            <div>
                                <p class="text-sm">Phim</p>
                                <span class="xs:text-base font-semibold">
                                    MÈO BÉO SIÊU QUẬY - K
                                </span>
                            </div>
                        </v-card-text>
                        <v-card-text>
                            <div>
                                <p class="text-sm">Rap</p>
                                <div>
                                    <span class="font-bold">
                                        Galaxy Nguyễn Du
                                    </span>
                                    <span class="line-clamp-1">
                                        116 Nguyễn Du, Quận 1, Tp.HCM
                                    </span>
                                </div>
                            </div>
                        </v-card-text>

                        <v-card-text class="grid grid-cols-2">
                            <div>
                                <p class="text-sm">Ngày giờ chiếu</p>
                                <div class="font-bold">
                                    <span class="text-primary">20:00</span>
                                    <span> - </span>
                                    <span>31/05/2024</span>
                                </div>
                            </div>

                            <div>
                                <p class="text-sm">Ghế</p>
                                <span class="font-bold">A1, A2, A3</span>
                            </div>
                        </v-card-text>

                        <v-card-text class="grid grid-cols-2">
                            <div>
                                <p class="text-sm">Định dạng</p>
                                <span class="font-bold">2D</span>
                            </div>
                            <div>
                                <p class="text-sm">Phòng chiếu</p>
                                <span class="font-bold">13</span>
                            </div>
                        </v-card-text>
                    </v-card>
                    <v-card rounded="lg" class="mt-5">
                        <v-card-title>
                            <h4 class="text-base font-bold">
                                Thông tin thanh toán
                            </h4>
                        </v-card-title>
                        <v-card-text>
                            <v-data-table
                                :items="items"
                                hide-default-footer
                            ></v-data-table>
                        </v-card-text>
                    </v-card>
                </div>
                <div class="col-span-4">
                    <v-card rounded="lg">
                        <v-card-title>
                            <h4 class="text-base font-bold">
                                Phương thức thanh toán
                            </h4>
                        </v-card-title>
                        <v-card-text>
                            <v-radio-group v-model="radios">
                                <v-radio
                                    v-for="value in payment"
                                    :key="value.id"
                                    :value="value.id"
                                    color="primary"
                                    class="py-1"
                                    :density="xs ? 'compact' : 'default'"
                                >
                                    <template v-slot:label>
                                        <v-img
                                            :src="value.image"
                                            :height="xs ? '15' : '20'"
                                            :width="xs ? '15' : '20'"
                                        ></v-img>
                                        <p class="pl-2 xs:text-sm text-xs">
                                            {{ value.name }}
                                        </p>
                                    </template>
                                </v-radio>
                            </v-radio-group>
                        </v-card-text>
                        <v-card-title>
                            <div class="text-base font-bold">Chi phí</div>
                        </v-card-title>
                        <v-card-text>
                            <div class="flex justify-between xs:text-sm">
                                <p>Thanh toán</p>
                                <strong>190.000đ</strong>
                            </div>
                            <div class="flex justify-between xs:text-sm">
                                <p>Phí</p>
                                <strong>0đ</strong>
                            </div>
                            <div class="flex justify-between xs:text-sm">
                                <p>Tổng cộng</p>
                                <strong>190.000đ</strong>
                            </div>
                        </v-card-text>
                        <v-card-text>
                            <v-btn
                                block
                                :loading="isLoading"
                                color="primary"
                                @click="load"
                            >
                                Đặt vé
                            </v-btn>
                            <v-btn
                                block
                                variant="text"
                                @click="$router.go(-2)"
                                class="my-2.5"
                            >
                                Quay lại
                            </v-btn>
                            <p class="text-center text-error text-xs">
                                <strong>Lưu ý:</strong> Không mua vé cho trẻ em
                                dưới 13 tuổi đối với các suất chiếu phim kết
                                thúc sau 22h00 và không mua vé cho trẻ em dưới
                                16 tuổi đối với các suất chiếu phim kết thúc sau
                                23h00.
                            </p>
                        </v-card-text>
                    </v-card>
                </div>
            </div>
        </v-container>
    </section>
</template>
<script setup>
import { useDisplay } from "vuetify";
const { xs } = useDisplay();

const payment = ref([
    {
        id: "1",
        name: "Thanh toán tại quầy",
        image: "https://cdn.moveek.com/bundles/ornweb/img/zalopay-domestic_card-icon.png",
    },
    {
        id: "2",
        name: "Ví MoMo",
        image: "https://cdn.moveek.com/bundles/ornweb/img/momo-icon.png",
    },
    {
        id: "3",
        name: " Thẻ Visa, Master, JCB",
        image: "https://cdn.moveek.com/bundles/ornweb/img/zalopay-international_card-icon.png",
    },
    {
        id: "4",
        name: "Ví ShopeePay",
        image: "https://cdn.moveek.com/bundles/ornweb/img/shopeepay-icon.png",
    },
    {
        id: "5",
        name: "Thẻ ATM (Thẻ nội địa)",
        image: "https://cdn.moveek.com/bundles/ornweb/img/zalopay-domestic_card-icon.png",
    },
    {
        id: "6",
        name: "Quét mã QR",
        image: "https://cdn.moveek.com/bundles/ornweb/img/zalopay-vietqr-icon.png",
    },
]);
const items = ref([
    {
        "Danh mục": "Ghế (D6, D7, D5, D4)",
        "Số lượng": "4",
        "Tổng tiền": "1.000.000",
    },
]);
const radios = ref(1);
const isLoading = ref(false);

const load = () => {
    isLoading.value = true;
    setTimeout(
        () => (
            (isLoading.value = false), isLoading.value //this.$refs.modelDialogCheckout.open()
        ),
        2000
    );
};
</script>
<style lang=""></style>
