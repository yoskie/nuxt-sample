require('dotenv').config();
const { FIREBASE_ENV } =process.env;
const { FIREBASE_URL } =process.env;
const { FB_API_KEY } =process.env;

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'sample-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Open+Sans&display=swap" }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#00FF00', height: '4px', duration: 5000 },
  loadingIndicator: {
    name: 'circle',
    color: '#FF1493'
  },
  css: [
    '~assets/styles/main.css'
  ],
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js'
  ],
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: process.env.FIREBASE_URL,
    credentials: false
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  env: {
    FIREBASE_ENV,
    FIREBASE_URL,
    FB_API_KEY
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  }
}

