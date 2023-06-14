// https://nuxt.com/docs/api/configuration/nuxt-config
import {join} from "path";

export default defineNuxtConfig({
    /// Extend the default Nuxt configuration from Github
    extends: [
        "github:nossienl/nuxt-components",
    ],
    css: ['@/assets/styles/base.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData:
                        '@use "@/assets/styles/global.scss" as *;',
                },
            },
        },
    },
    /// Use modules for the build
    modules: ["@nuxtjs/google-fonts"],
    /// Use the Google Fonts options to load fonts
    googleFonts: {
        families: {
            Roboto: [100, 300, 500, 800],
            Lato: [100, 300],
        },
    },
})