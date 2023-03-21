<script setup lang="ts">
defineProps<{ id: string }>()

const flexiMode = useFlexiMode()
</script>

<template>
  <h2 v-if="flexiMode==='note'" :id="id" name="h1top" class="notewidth">
    <slot />
  </h2>
  <h2 v-else :id="id">
    <a :href="`#${id}`">
      <slot />
    </a>
  </h2>
</template>
<style scoped>
</style>
