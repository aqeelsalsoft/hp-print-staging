// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  
  // Compatibility Date Decleration
  compatibilityDate: '2024-11-01',
  
  // Devtools
  devtools: { enabled: true },
 
  // Alias Declaration
  alias: {
    "@": resolve(__dirname, "/"),
  },

  // CSS Files Declarations
  css: ["~/assets/css/main.scss"],
  
  // Modules Import
  modules: ['@nuxtjs/google-fonts', '@nuxt/ui', '@nuxt/image'],

  // PostCSS Configuration
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === 'production'
          ? { preset: ['default', { discardComments: { removeAll: true } }] }
          : false, // disable cssnano when not in production
    },
  },

  // Importing Google Fonts
  googleFonts: {
    families: {
      Montserrat: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    }
  },

})