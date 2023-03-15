<script setup lang="ts">
defineProps<{ id: string }>()

const flexiMode = useFlexiMode()
</script>

<template>
  <h4 v-if="flexiMode==='note'" :id="id" class="notewidth" name="hnames">
    <a>
      <slot />
    </a>
  </h4>
  <h4 v-else :id="id">
    <a :href="`#${id}`">
      <slot />
    </a>
  </h4>
</template>
