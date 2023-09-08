<script setup lang="ts">
import { variables as constants } from '~/app/constants'
const appConfig = useAppConfig()
</script>

<template>
  <div class="py-4 flex justify-center items-center">
    <div class="flex flex-col md:flex-row gap-4 text-xs text-green-800 text-center">
      <p v-if="constants.site.author">
        Copyright {{ (new Date()).getFullYear() }}

        <a
          v-if="appConfig.site.url"
          :href="`${appConfig.site.url}`"
          target="_blank"
          class="text-cyan-800"
        >
          {{ constants.site.author }}
        </a>
        <span v-else>{{ constants.site.author }}</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>
