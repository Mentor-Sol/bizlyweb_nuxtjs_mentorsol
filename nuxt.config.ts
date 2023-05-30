// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Mentorsol",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
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
      ],
    },
  },

  components: [
    {
      path: "~/components",
      extensions: [".vue"],
    },
  ],

  css: ["@/assets/scss/global.scss"],
  modules: ["@pinia/nuxt", "nuxt-swiper"],
  plugins: [{ src: "~/plugins/vue-plyr", mode: "client" }],
});
