import VueGtag from 'vue-gtag'

export default defineNuxtPlugin((nuxtApp) => {
  // const config = useRuntimeConfig()
  nuxtApp.vueApp.use(VueGtag, {
    config: {
      id: 'G-J0PRB7L04Q'
    }
  })
})
/*
source:
https://www.npmjs.com/package/vue-gtag
https://matteo-gabriele.gitbook.io/vue-gtag/
https://github.com/nuxt-community/google-analytics-module/issues/127
https://github.com/nuxt/nuxt/discussions/17143
*/
