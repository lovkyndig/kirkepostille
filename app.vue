<template>
  <NuxtLayout>
    <!-- <VitePwaManifest /> -->
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// import { registerSW } from 'virtual:pwa-register'
import { variables as constants } from '~/app/constants'
import pkg from '~/package.json'
const appConfig = useAppConfig()
/**
 *
 * set head meta for all pages
 *
 */

useServerSeoMeta({
  ogTitle: constants.site.name,
  ogType: 'website',
  ogUrl: pkg.homepage,
  ogImage: `${pkg.homepage}${constants.site.listview}`,
  ogImageAlt: pkg.name,
  twitterImage: `${pkg.homepage}${constants.site.frontpage}`,
  twitterSite: '@nuxt_js',
  twitterCreator: '@nuxt_js',
  twitterCard: 'summary_large_image',
  googleSiteVerification: process.env.GSITE_VERIFICATION,
  themeColor: '#f9fafb'
}) // https://nuxt.com/docs/getting-started/seo-meta#useseometa

useHead({
  htmlAttrs: { lang: 'da' },
  style: [
    { children: 'html, body { scroll-behavior: smooth; overflow: overlay }' }
  ],
  link: [
    { rel: 'icon', href: constants.site.favicon },
    { rel: 'manifest', href: 'manifest.json', crossorigin: 'use-credentials' },
    { rel: 'apple-touch-icon', href: constants.site.apple }
  ],
  noscript: [{ children: 'JavaScript is required' }],
  script: []
})

onMounted(() => {
  if (process.client) {
    if (!('serviceWorker' in navigator)) {
      throw new Error('serviceWorker is not supported in current browser!')
    }
    navigator.serviceWorker.register('/workbox-sw.js', { scope: '/' })
    // registerSW()
  }
})

/*
sources:
https://github.com/larbish/nuxt3-pwa/tree/main/public
https://github.com/alexdeploy/nuxt-pwa-template
https://github.com/alexdeploy/nuxt-pwa-template/tree/main/public
https://github.com/alexdeploy/nuxt-pwa-template/tree/main/public
https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Offline_Service_workers
*/
onUnmounted(() => { })

</script>

<style>
</style>
