<script setup lang="ts">
</script>

<template>
  <div id="default_layout">
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
