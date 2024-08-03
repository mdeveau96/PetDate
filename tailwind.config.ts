export default {
    theme: {
      extend: {
        colors:{
          rose: {
            400: '#FB7185',
            500: '#f43f5e',
            600: '#e11d48',
            700: '#be123c',
            800: '#9f1239',
            900: '#881337',
            950: '#4c0519'
          }
        }
      }
    },
    plugins: [],
    content: [
      `../components/**/*.{vue,js,ts}`,
      `../layouts/**/*.vue`,
      `../pages/**/*.vue`,
      `../composables/**/*.{js,ts}`,
      `../plugins/**/*.{js,ts}`,
      `../utils/**/*.{js,ts}`,
      `../App.{js,ts,vue}`,
      `../app.{js,ts,vue}`,
      `../Error.{js,ts,vue}`,
      `../error.{js,ts,vue}`,
      `../app.config.{js,ts}`
    ]
  }
  