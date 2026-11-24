export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: { baseURL: process.env.NUXT_APP_BASE_URL || '/', head: { title: 'Orbit Studio — A portfolio in motion', meta: [{ name: 'description', content: 'An independent creative developer portfolio told in seven chapters.' }] } },
  devtools: { enabled: false }
})
