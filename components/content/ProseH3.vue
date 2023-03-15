<script setup lang="ts">
defineProps<{ id: string }>()

const flexiMode = useFlexiMode()
</script>

<template>
  <h3 v-if="flexiMode==='note'" :id="id" class="notewidth" name="hnames">
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
