<script setup lang="ts">
import { variables as constants } from '~/app/constants'
// const appConfig = useAppConfig()
</script>

<template>
  <div class="py-4 flex justify-center items-center">
    <div class="flex flex-col md:flex-row gap-4 text-xs text-gray-400 text-center">
      <p v-if="constants.site.author">
        Copyright {{ (new Date()).getFullYear() }}

        <a
          v-if="constants.meta.url"
          :href="`${constants.meta.url}`"
          target="_blank"
          class="text-blue-400"
        >
          Gudsbarn</a>
        <span v-else>{{ constants.site.author }}</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>
