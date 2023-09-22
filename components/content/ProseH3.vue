<script setup lang="ts">
defineProps<{ id: string }>()

const flexiMode = useFlexiMode()
</script>

<template>
  <h3 v-if="flexiMode==='note'" :id="id" name="h2to5" class="notewidth">
    <a>
      <slot />
    </a>
  </h3>
  <h3 v-else :id="id">
    <a :href="`#${id}`">
      <slot />
    </a>
  </h3>
</template>
<style scoped>
</style>
