import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n"],
  i18n: {
    locales: [
      { code: "en", iso: "en-US", name: "🇬🇧 English", file: "en.json" },
      { code: "ru", iso: "ru-RU", name: "🇷🇺 Russian", file: "ru.json" },
      { code: "es", iso: "es-ES", name: "🇪🇸 Spanish", file: "es.json" }
    ],
    detectBrowserLanguage: false,
    langDir: "locales/",
    defaultLocale: "en",
    vueI18n: {
      legacy: false,
      locale: "en"
    }
  },
  head: {
    title: "Nuxt.js starter for CSB",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Official Nuxt.js starter for CodeSandBox"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  css: [],
  plugins: []
});
