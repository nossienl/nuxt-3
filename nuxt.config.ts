// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/google-fonts"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/styles/global.scss" as *;',
                },
            },
        },
    },
    googleFonts: {
        families: {
            Roboto: [100, 300, 500, 800],
            Lato: [100, 300],
        },
    },
})
