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
  modules: [
    "@nuxt/content"
  ],
  target: 'static',
  ssr: false,
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1.0',
      meta: [
        { name: 'description', content: '福島工業高等専門学校 電気電子システム工学科 佐々木研究室のWebサイトです。' },
        { name: 'keywords', content: '福島工業高等専門学校,福島高専,福島,高専,電気電子システム工学科,電気工学科,電気科,佐々木修平,佐々木研究室,研究,超伝導,超電導,磁石,免震装置,エネルギー貯蔵' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: '佐々木研究室 | 福島高専' },
        { property: 'og:description', content: '福島工業高等専門学校 電気電子システム工学科 佐々木研究室のWebサイトです。' },
        { property: 'og:site_name', content: '佐々木研究室 | 福島高専' },
        { property: 'og:url', content: 'https://sasakilab.github.io/' },
        { property: 'og:image', content: '/images/ogp.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: "icon", type: "image/webp", href: "/images/icon.webp" },
        { rel: "apple-touch-icon", type: "image/webp", href: "/images/icon.webp" },
      ]
    }
  }
})
