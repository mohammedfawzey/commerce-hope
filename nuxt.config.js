import colors from "vuetify/es5/util/colors";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - commerce-hope",
    title: "commerce-hope",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    // link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/main.scss", "~/assets/style.css"],
  target: "server",
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins",
      mode: "client",
    },
  ],
  // router: {
  //   middleware: ["auth"],
  // },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // "@nuxtjs/auth-next",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "vue-toastification/nuxt",
  ],
  //
  // auth: {
  //   strategies: {
  //     local: {
  //       token: {
  //         property: "token",
  //         global: true,
  //         required: true,
  //         type: "Bearer",
  //       },
  //       user: {
  //         property: "user",
  //         // autoFetch: true
  //       },
  //       endpoints: {
  //         login: { url: "/api/v1/auth/login", method: "post" },
  //         logout: { url: "/api/v1/auth/logout", method: "delete" },
  //         user: { url: "/api/v1/auth/user", method: "get" },
  //       },
  //     },
  //   },
  //   redirect: {
  //     login: "/auth/login",
  //     logout: "/",
  //     callback: "/auth/login",
  //     home: "/",
  //   },
  // },
  //
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },
  loading: {
    continuous: true,
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        light: {
          // base: "rgb(0, 125, 252)",
          primary: "#007dfc",
          // base: "#007dfc",
          error: "#FF4842",
          // surface: "#FF4842",
        },
      },
    },
  },
  // serverMiddleware: {
  //   path: "~/backend",
  //   handler: "~/backend/index",
  // },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
