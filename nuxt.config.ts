// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  app: {
    head: {
      title: "Bizly",
      link: [{ rel: "icon", type: "image/png", href: "favicon.png" }],
      script: [
        {
          src: "https://code.jquery.com/jquery-3.5.1.slim.min.js",
          type: "text/javascript",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js",
          type: "text/javascript",
          body: true,
        },
        {
          src: "https://player.vimeo.com/api/player.js",
          type: "text/javascript"
        }
      ],
    },
  },

  components: [
    {
      path: "~/components",
      extensions: [".vue"],
    },
  ],

  css: ["@/src/assets/scss/global.scss"],
  modules: ["@pinia/nuxt", "nuxt-swiper"],
  plugins: [{ src: "~/plugins/vue-plyr", mode: "client" }],
  logLevel: "silent",
});
