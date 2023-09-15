<script setup lang="ts">
import { Icon } from '@iconify/vue'
const appConfig = useAppConfig()
const config = useRuntimeConfig()
const base = config.public.hostname

useSeoMeta({
  titleTemplate: 'Privacy, rss and subscribe to Luthers kirkepostille mv.',
  description: 'Privacy-, rss- and subscribe-sidene gir en god oversikt over Luthers moderne kirkepostille, tilrettelagt for mobil og nettbrett.',
  ogDescription: 'Privacy-, rss- and subscribe-sidene gir en god oversikt over Luthers moderne kirkepostille, tilrettelagt for mobil og nettbrett.',
  ogUrl: '/privacy'
}) // https://nuxt.com/docs/getting-started/seo-meta#useseometa

</script>

<template>
  <div id="subscribe_page">
    <Head>
      <Title>{{ appConfig.nav.privacy.echo }}</Title>
    </Head>
    <NuxtLayout name="base">
      <div class="subscribe-content-container">
        <h1>
          {{ appConfig.nav.privacy.echo }}
        </h1>
        <div class="max-w-prose mx-auto p-4 space-y-4 ">
          <div class="flex items-center gap-2">
            <Icon icon="iconoir:privacy-policy" class="text-purple-900 w-6 h-6" />
            <a
              :href="`${base}/privacy.txt`"
              target="_blank"
              aria-label="privacy.txt"
              class="text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              Privacy Policy
            </a>
          </div>

          <div class="flex items-center gap-2">
            <Icon icon="majesticons:sitemap" class="text-purple-900 w-6 h-6" />
            <a
              :href="`${base}/sitemap.xml`"
              target="_blank"
              aria-label="sitemap.xml"
              class="text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              {{ appConfig.nav.privacy.sitemap }}
            </a>
          </div>

          <div class="flex items-center gap-2">
            <Icon icon="fa-solid:rss-square" class="text-orange-900 w-6 h-6" />
            <a
              :href="`${base}/rss.xml`"
              target="_blank"
              aria-label="rss.xml"
              class="text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              {{ appConfig.nav.privacy.rss }}
            </a>
          </div>
        </div>
      </div>
    </nuxtlayout>
  </div>
</template>

<style lang="scss">
.subscribe-content-container {
  h1 {
    @apply py-8 text-3xl sm:text-5xl text-purple-500 font-bold text-center
  }

  h2 {
    @apply py-8 text-2xl font-bold text-center
  }

  p {
    @apply py-4 text-lg text-gray-500
  }
}
</style>
