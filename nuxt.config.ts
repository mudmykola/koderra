// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    ssr: false,
    devtools: {enabled: false},
    css: ['~/assets/css/main.css'],
    vite: {plugins: [tailwindcss(),],},
    components: [
        {
            path: '~/components',
            pathPrefix: false
        }
    ],
})