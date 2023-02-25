<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <div class="py-4 flex justify-center items-center">
    <div class="flex flex-col md:flex-row gap-4 text-xs text-gray-400 text-center">
      <p v-if="appConfig.theme.author">
        Copyright {{ (new Date()).getFullYear() }}

        <a v-if="appConfig.theme.meta.url" :href="`${appConfig.theme.meta.url}`" target="_blank" class="text-blue-400">{{
          appConfig.theme.author }}</a>
        <span v-else>{{ appConfig.theme.author }}</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>
