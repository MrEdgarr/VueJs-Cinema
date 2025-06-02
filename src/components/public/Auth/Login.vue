<template>
    <v-dialog v-model="isDialog" persistent max-width="450">
        <v-card rounded="lg">
            <v-card-title class="text-center">
                <div class="text-2xl pt-5 font-bold">Đăng nhập</div>
                <div class="absolute top-0 right-2.5" @click="close()">
                    <v-icon size="x-small">mdi-close</v-icon>
                </div>
            </v-card-title>
            <v-form fast-fail @submit.prevent>
                <v-card-text class="grid gap-5">
                    <v-text-field
                        v-model="form.email"
                        :rules="[rules.required, rules.emailRules]"
                        label="Email or Username"
                        type="email"
                        placeholder="johndoe@email.com"
                    ></v-text-field>

                    <v-text-field
                        v-model="form.password"
                        label="Password"
                        placeholder="············"
                        :rules="[rules.required, rules.min]"
                        :type="isPasswordVisible ? 'text' : 'password'"
                        autocomplete="password"
                        :append-inner-icon="
                            isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'
                        "
                        @click:append-inner="
                            isPasswordVisible = !isPasswordVisible
                        "
                    ></v-text-field>
                    <div
                        class="cursor-pointer text-right text-primary hover:underline"
                    >
                        <a>Quên mật khẩu?</a>
                    </div>
                    <v-btn
                        block
                        color="primary"
                        type="submit"
                        :loading="isLoading"
                        @click="save()"
                    >
                        Đăng nhập
                    </v-btn>
                    <div class="text-center">
                        Bạn đã có tài khoản?
                        <span
                            class="text-primary hover:underline cursor-pointer"
                            @click="openRegister()"
                        >
                            Đăng Ký
                        </span>
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
    email: "admin@gmail.com",
    password: "123456",
});
const isDialog = ref(false);
const isPasswordVisible = ref(false);
const isLoading = ref(false);

EventBus.on("isLogin", (items) => {
    isDialog.value = items;
});
// $emitter.on("isLogin", (items) => {
//     isDialog.value = items;
// });
const openRegister = () => {
    EventBus.emit("isRegister", true);
    isDialog.value = false;
};
const close = () => {
    isDialog.value = false;
};
</script>
<style lang=""></style>
