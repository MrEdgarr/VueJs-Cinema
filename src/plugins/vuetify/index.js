/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import { VBtn } from "vuetify/components/VBtn";
import { themes } from "./theme";
import defaults from "./defaults";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
    aliases: {
        IconBtn: VBtn,
    },
    defaults,
    theme: {
        defaultTheme: "light",
        themes,
    },
});
