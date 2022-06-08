import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  sourcemap: false,
  css: [
    // SCSS file in the project
    "~/assets/styles/main.scss",
  ],
});
