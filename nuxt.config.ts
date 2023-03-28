// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["vuetify/lib/styles/main.sass"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1.0',
      link: [
        { rel: "icon", type: "image/webp", href: "/images/icon.webp" },
        { rel: "apple-touch-icon", type: "image/webp", href: "/images/icon.webp" },
      ]
    }
  }
})
