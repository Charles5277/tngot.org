// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4
  },
  modules: [
    '@nuxt/ui',
    '@nuxt/fonts',
    'motion-v/nuxt',
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    'nuxt-mcp'
  ],

  css: ['~/assets/css/main.css'],
  fonts: {
    families: [{ name: 'Noto Sans TC', provider: 'google' }]
  },
  colorMode: {
    preference: 'light'
  },
  icon: {
    customCollections: [
      {
        prefix: 'my-icon',
        dir: './app/assets/my-icons'
      }
    ]
  },
  typescript: {
    typeCheck: true
  },
  runtimeConfig: {
    public: {
      discordInviteCode: 'vykUZ9wA3Y'
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-Hant-TW'
      },
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/logo/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.png'
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/logo/favicon-16x16.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/logo/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '192x192',
          href: '/logo/android-chrome-192x192.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '512x512',
          href: '/logo/android-chrome-512x512.png'
        },

        { rel: 'manifest', href: '/logo/site.webmanifest' }
      ]
    }
  }
});
