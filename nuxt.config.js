// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','nuxt-icon'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: true,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true
  },
  app:{
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { hid: 'description', name: 'description', content: 'EMRO BETON, Artvin / Borçka ilçesinde faaliyet gösteren bir şantiye şirketidir. Hazır beton, bordür, oluk, parke, kaldırım taşı, micir, kum, çakıl ve bypass dolgu malzemeleri gibi çeşitli beton ürünleri sunmaktadır. Aynı zamanda yol yapımı, altyapı hizmetleri, proje çalışmaları, bahçe düzenlemesi, peyzaj hizmetleri ve inşaat malzemeleri tedariki gibi çeşitli hizmetler de sağlar. Kaliteli çözümler için bize ulaşın.' },
        { hid: 'keywords', name: 'keywords', content: 'EMRO BETON, Artvin, Borçka, şantiye şirketi, hazır beton, bordür, oluk, parke, kaldırım taşı, micir, kum, çakıl, bypass dolgu malzemeleri, yol yapımı, altyapı hizmetleri, proje çalışmaları, bahçe düzenlemesi, peyzaj hizmetleri, inşaat malzemeleri' },
        { hid: 'author', name: 'author', content: 'EMRO BETON' },
      ],
      title: 'EMRO BETON - Beton Ürünleri, Malzemeler ve Hizmetler',
    }
  }
})
