// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@samk-dev/nuxt-vcalendar',
    //'@nuxt/test-utils/module'
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ui: {
    icons: ['ion', 'material-symbols', 'mdi', 'twemoji'],
  },
})
