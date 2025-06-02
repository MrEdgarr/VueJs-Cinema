<template>
    <v-dialog v-model="isDialog" max-width="450" width="100%" persistent="">
        <v-card rounded="lg">
            <v-card-title class="text-center">
                <div class="text-2xl pt-5 font-bold">Đăng Ký</div>
                <div class="absolute top-0 right-2.5" @click="isClose()">
                    <v-icon size="x-small">mdi-close</v-icon>
                </div>
            </v-card-title>
            <v-form fast-fail @submit.prevent>
                <v-card-text class="grid gap-5">
                    <v-text-field
                        v-model="form.fullName"
                        :rules="[rules.required, rules.min]"
                        label="Họ và tên"
                        placeholder="Họ và tên"
                    ></v-text-field>
                    <v-text-field
                        v-model="form.email"
                        :rules="[rules.required, rules.emailRules]"
                        label="Email"
                        placeholder="Email"
                    ></v-text-field>
                    <v-text-field
                        v-model="form.phone"
                        :rules="[rules.required, rules.phoneRules]"
                        label="Số điện thoại"
                        placeholder="Số điện thoại"
                    ></v-text-field>
                    <v-text-field
                        v-model="form.password"
                        label="Mật khẩu"
                        placeholder="........."
                        :rules="[rules.required, rules.min]"
                        :append-inner-icon="
                            isVisible.pass ? 'mdi-eye-off' : 'mdi-eye'
                        "
                        :type="isVisible.pass ? 'text' : 'password'"
                        @click:append-inner="isVisible.pass = !isVisible.pass"
                    ></v-text-field>
                    <v-text-field
                        v-model="form.passwordConfirm"
                        label="Mật khẩu"
                        placeholder="..........."
                        :rules="[
                            rules.required,
                            form.password === form.passwordConfirm ||
                                'Mật khẩu phải trùng khớp',
                        ]"
                        :append-inner-icon="
                            isVisible.config ? 'mdi-eye-off' : 'mdi-eye'
                        "
                        :type="isVisible.config ? 'text' : 'password'"
                        @click:append-inner="
                            isVisible.config = !isVisible.config
                        "
                    ></v-text-field>
                    <v-checkbox color="primary">
                        <template v-slot:label>
                            <div class="text-xs pl-2">
                                Bằng việc đăng ký tài khoản, tôi đồng ý với
                                <a
                                    href="#"
                                    target="_blank"
                                    class="text-primary font-bold hover:underline"
                                    @click.stop
                                >
                                    Điều khoản dịch vụ
                                </a>
                                và
                                <a
                                    href="#"
                                    target="_blank"
                                    class="text-primary font-bold hover:underline"
                                    @click.stop
                                >
                                    Chính sách bảo mật
                                </a>
                            </div>
                        </template>
                    </v-checkbox>
                    <v-btn
                        block
                        color="primary"
                        type="submit"
                        :loading="isLoading"
                    >
                        Đăng ký
                    </v-btn>
                    <div>
                        <p class="text-center">
                            Bạn đã có tài khoản?
                            <a
                                class="text-primary hover:underline cursor-pointer"
                                @click="openLogin()"
                            >
                                Đăng nhập
                            </a>
                        </p>
                    </div>
                </v-card-text>
            </v-form>
        </v-card>
    </v-dialog>
</template>
<script setup>
import EventBus from "@/utils/event-bus";
// rules
import { validatioForm } from "@/utils/validationForm";
const rules = validatioForm;

const form = ref({
    fullName: "12345",
    phone: "1234567890",
    email: "nguyenvana@gmail.co",
    password: "12345",
    passwordConfirm: "12345",
});
const isVisible = ref({
    pass: false,
    config: false,
});
const isLoading = ref(false);
const isDialog = ref(false);

EventBus.on("isRegister", (items) => {
    isDialog.value = items;
});
const openLogin = () => {
    EventBus.emit("isLogin", true);
    isDialog.value = false;
};
const isClose = () => {
    isDialog.value = false;
};
</script>
<style></style>
