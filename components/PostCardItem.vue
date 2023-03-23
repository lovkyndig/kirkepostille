<script setup lang="ts">
const props = defineProps<{
  article: any;
  listLen: number
}>()

const getCoverUrl = (relativeURL:(string)) => {
  if (relativeURL.startsWith('./')) {
    const articleFolderPathArr = props.article._path.split('/').slice(0, -1)
    const imagePathArr = relativeURL.split('/').slice(1)
    return [...articleFolderPathArr, ...imagePathArr].join('/')
  } else {
    return relativeURL
  }
}
</script>

<template>
  <div
    class="shrink-0 relative z-10 border border-purple-100 rounded-lg overflow-hidden"
    :class="props.listLen >= 2 ? 'w-5/6' : 'w-full'"
  >
    <div
      v-if="props.article.cover"
      :style="`background-image: url('${getCoverUrl(props.article.cover)}')`"
      class="w-2/3 h-2/3 absolute bottom-0 right-0 -z-10 bg-contain bg-right-bottom bg-no-repeat"
    >
      <div
        class="absolute inset-0"
        style="background: linear-gradient(135deg, rgba(249,250,251,1) 60%, rgba(249,250,251,0.8) 80%, rgba(249,250,251,0.6) 100%);"
      />
    </div>

    <NuxtLink
      :to="props.article._path"
      aria-label="props.article.path"
      class="grow text-xl p-6 text-gray-600 hover:text-blue-400 transition-colors duration-300 space-y-4"
    >
      <h2 class="font-bold">
        {{ props.article.title || "Tittel mangler" }}
      </h2>
      <p v-if="props.article.description" class="text-gray-600 text-sm">
        {{ props.article.description }}
      </p>
    </NuxtLink>
    <div class="shrink-0 px-6 pb-6 flex justify-between items-start gap-2">
      <div v-if="props.article.tags" class="scroll-container grow flex sm:flex-wrap gap-1 overflow-x-auto">
        <!-- changed query: { tags: [tag, 'HTML']} -->
        <NuxtLink
          v-for="tag in props.article.tags"
          :key="tag"
          :to="{ path: '/list', query: { tags: [tag] } }"
          aria-label="tag in props.article.tags"
          class="shrink-0 px-2 py-1 text-xs text-blue-600 hover:text-blue-900 bg-blue-50 transition-colors duration-300 rounded"
        >
          #{{ tag }}
        </NuxtLink>
      </div>
      <NuxtLink
        v-if="props.article.series"
        :to="{ path: '/list', query: { series: props.article.series } }"
        aria-label="props.article.series"
        class="shrink-0 px-2 py-1 flex justify-center items-center text-green-600 hover:text-green-900 bg-green-50 transition-colors duration-300 rounded"
      >
        <IconCustom name="bi:collection" class="w-4 h-4" />
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.scroll-container::-webkit-scrollbar {
  display: none;
}
</style>
