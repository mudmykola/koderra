// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    ssr: false,
    devtools: {enabled: false},
    modules: [
        '@nuxtjs/google-fonts',
        '@nuxtjs/i18n'
    ],
    i18n: {
        locales: [
            {code: 'uk', name: 'Українська', file: 'uk.json', iso: 'uk-UA'},
            {code: 'en', name: 'English', file: 'en.json', iso: 'en-US'}
        ],
        defaultLocale: 'uk',
        strategy: 'prefix_except_default',
        lazy: true,
        langDir: 'locales',
        vueI18n: './i18n.config.ts',
        bundle: {
            optimizeTranslationDirective: false
        }
    },
    googleFonts: {
        families: {
            Montserrat: '400..900',
            Lato: true
        },
        display: 'swap',
        preload: true
    },
    css: ['~/assets/css/main.css', '~/assets/css/style.scss'],
    vite: {
        plugins: [
            tailwindcss(),
            Components({
                resolvers: [IconsResolver({prefix: '', customCollections: []})]
            }),
            Icons({
                compiler: 'vue3',
                autoInstall: true
            })
        ]
    },

    components: [
        {
            path: '~/components',
            pathPrefix: false
        }
    ],
    runtimeConfig: {
        telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
        telegramChatId: process.env.TELEGRAM_CHAT_ID,
        public: {}
    }
})