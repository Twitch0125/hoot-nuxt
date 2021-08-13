import tailwindTypography from '@tailwindcss/typography'
import tailwindForms from '@tailwindcss/forms'
import tailwindLineClamp from '@tailwindcss/line-clamp'
import tailwindAspectRatio from '@tailwindcss/aspect-ratio'
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'hoot-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }
    ]
  },
  publicRuntimeConfig: {
    lotide: process.env.LOTIDE
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxt/http'
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  tailwindcss: {
    config: {
      plugins: [
        tailwindTypography,
        tailwindForms,
        tailwindLineClamp,
        tailwindAspectRatio
      ],
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter Var', ...defaultTheme.fontFamily.sans]
          }
        }
      }
    }
  }
}
