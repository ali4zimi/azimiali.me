// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    // '@vueuse/nuxt',
  ],

  
  css: [
    '~/assets/css/main.css',
  ],



  content: {
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3,
      },
    },
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
    }
  },
  tailwindcss: {

  },

  devtools: {
    enabled: true
  }
})
