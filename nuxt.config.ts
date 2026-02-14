// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  modules: [
    '@nuxtjs/tailwindcss',
    // '@vueuse/nuxt',
  ],

  css: [
    '~/assets/css/main.css',
  ],

  runtimeConfig: {
    notionApiKey: "",
    notionPostsDsId: "",
    notionVisitorsDsId: "",
    notionProjectsDsId: "",
  },

  tailwindcss: {

  },

  devtools: {
    enabled: true
  },

  compatibilityDate: '2024-08-06'
})