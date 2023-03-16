<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <div class="py-4 flex justify-center items-center">
    <div class="flex flex-col md:flex-row gap-4 text-xs text-gray-400 text-center">
      <p v-if="appConfig.site.author">
        Copyright {{ (new Date()).getFullYear() }}

        <a
          v-if="appConfig.meta.url"
          :href="`${appConfig.meta.url}`"
          target="_blank"
          class="text-blue-400"
        >
          Gudsbarn</a>
        <span v-else>{{ appConfig.site.author }}</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>
