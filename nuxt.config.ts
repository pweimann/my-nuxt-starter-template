// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    'nuxt-icon'
  ],
  googleFonts: {
    families: {
      Roboto: true,
      Geramond: true,
      Futura: true
    }
  }
})
