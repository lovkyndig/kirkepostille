<template>
  <NuxtPage />
</template>

<script setup lang="ts">
import { variables as constants } from '~/app/constants'
import pkg from '~/package.json'
// const appConfig = useAppConfig()
/**
 *
 * set head meta for all pages
 *
 */
useHead({
  htmlAttrs: { lang: 'da' },
  meta: [
    { name: 'google-site-verification', content: process.env.GSITE_VERIFICATION },
    { name: 'theme-color', content: '#f9fafb' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: pkg.homepage },
    { property: 'og:image', content: `${pkg.homepage}${constants.site.preview}` }
  ],
  style: [
    { children: 'html, body { scroll-behavior: smooth; overflow: overlay }' }
  ],
  link: [
    { rel: 'icon', href: constants.site.favicon },
    { rel: 'manifest', href: 'manifest.json', crossorigin: 'use-credentials' },
    { rel: 'apple-touch-icon', href: 'apple-touch-icon.png' }
  ],
  noscript: [{ children: 'JavaScript is required' }],
  script: []
})
// https://github.com/larbish/nuxt3-pwa/blob/main/app.vue:
//
</script>

<style>
</style>
