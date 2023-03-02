<script setup lang="ts">
defineProps<{ id: string }>()

const flexiMode = useFlexiMode()
</script>

<template>
  <h1 v-if="flexiMode==='note'" :id="id" class="notewidth" name="h1top">
    <a>
      <slot />
    </a>
  </h1>
  <h1 v-else :id="id">
    <a :href="`#${id}`">
      <slot />
    </a>
  </h1>
</template>
<style scoped>
</style>
