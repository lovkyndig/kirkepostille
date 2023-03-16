<script setup lang="ts">
// const appConfig = useAppConfig()
import constants from '../app/constants/constants.json'
/**
 *
 * set head meta for almost all page
 *
 */
useHead({
  style: [
    {
      children: 'html, body { scroll-behavior: smooth }'
    },
    {
      children: 'body { overflow: overlay }'
    }
  ],
  link: [
    {
      rel: 'icon',
      href: constants.site.favicon
    }
  ],
  script: []
})
// https://github.com/nuxt-community/google-analytics-module/issues/127
</script>

<template>
  <div>
    <slot />
    <NuxtLoadingIndicator />
    <!-- https://nuxt.com/docs/api/components/nuxt-loading-indicator -->
  </div>
</template>

<style lang="scss">
::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgba(156, 163, 175, 1);
  border: 3px solid transparent;
  background-clip: padding-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(107, 114, 128, 1);
}
</style>
