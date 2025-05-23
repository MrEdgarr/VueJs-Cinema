// Plugins
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Layouts from "vite-plugin-vue-layouts-next";
import Vue from "@vitejs/plugin-vue";
import Vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// Utilities
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

// Tailwind
import tailwindcss from "@tailwindcss/vite";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        Layouts(),
        Vue({
            template: { transformAssetUrls },
        }),
        // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
        Vuetify({
            autoImport: true,
            styles: {
                configFile: "src/styles/settings.scss",
            },
        }),
        Components(),
        AutoImport({
            imports: [
                "vue",
                {
                    pinia: ["defineStore", "storeToRefs"],
                },
            ],
            eslintrc: {
                enabled: true,
            },
            vueTemplate: true,
        }),
        tailwindcss(),
    ],
    optimizeDeps: {
        exclude: ["vuetify", "vue-router"],
    },
    define: { "process.env": {} },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
        extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
    },
    server: {
        port: 3000,
    },
    css: {
        preprocessorOptions: {
            sass: {
                api: "modern-compiler",
            },
            scss: {
                api: "modern-compiler",
            },
        },
    },
});
