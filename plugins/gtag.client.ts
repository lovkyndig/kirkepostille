import VueGtag from 'vue-gtag'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  // if (config.public.production_mode) {
  nuxtApp.vueApp.use(VueGtag, {
    config: {
      id: config.gtag_id
    }
  })
  // }
})
/*
source:
https://www.npmjs.com/package/vue-gtag
https://matteo-gabriele.gitbook.io/vue-gtag/
https://github.com/nuxt-community/google-analytics-module/issues/127
https://github.com/nuxt/nuxt/discussions/17143
*/
