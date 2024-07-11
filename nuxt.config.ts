// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  nitro: {
    awsAmplify: {
      // catchAllStaticFallback: true,
      // imageOptimization: { "/_image", cacheControl: "public, max-age=3600, immutable" },
      // imageSettings: { ... },
    }
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
