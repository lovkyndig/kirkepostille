<script setup lang="ts">
defineProps<{ id: string }>()

const flexiMode = useFlexiMode()
</script>

<template>
  <h1 v-if="flexiMode==='note'" :id="id" name="h1top" class="notewidth">
    <a>
      <slot />
    </a>
  </h1>
  <h1 v-else-if="id==='kirkepostil'">
    <a h:href="`#${id}`">
      <slot />
    </a>
  </h1>
</template>
<style scoped>
/*
.notewidth:not(:first-child) {
  @apply hidden
}*/
/*
h1[name='h1top']:not(:first-of-type) {
  @apply hidden
}
*/
</style>
