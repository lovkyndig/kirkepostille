<script setup lang="ts">
import pkg from '~/package.json'
</script>

<template>
  <div class="py-4 flex justify-center items-center">
    <div class="flex flex-col md:flex-row gap-4 text-xs text-green-800 text-center">
      <p v-if="pkg.author">
        Copyright {{ (new Date()).getFullYear() }}

        <a
          v-if="pkg.homepage"
          :href="`${pkg.homepage}`"
          target="_blank"
          class="text-cyan-800"
        >
          {{ pkg.author }}
        </a>
        <span v-else>{{ pkg.author }}</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>
