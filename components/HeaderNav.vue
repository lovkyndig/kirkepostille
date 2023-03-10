<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'
import { variables as v } from '~/app/constants'

const props = defineProps({
  headerFlexiMode: {
    type: Boolean,
    default: false
  }
})

const appConfig = useAppConfig()

// const queryBuilder = queryContent().where({ _path: { $contains: '/article' } })
// const { data } = await useAsyncData('articleFolder', () => fetchContentNavigation(queryBuilder))
const { data: navTree } = await useAsyncData('rootFolder', () => fetchContentNavigation())

// const articleFolder = data.value[0]

let articleFolder
const categoryArr:NavItem[] = []

if (Array.isArray(navTree.value)) {
  articleFolder = navTree.value.find(item => item._path === '/article')

  if (articleFolder?.children && articleFolder.children.length > 0) {
    articleFolder.children.forEach((item) => {
      if ('children' in item) {
        categoryArr.push(item)
      }
    })
  }
}

const getCategory = (path = '') => {
  let category = ''
  const pathArr = path.split('/')

  if (pathArr.length === 3 && pathArr[1] === 'article') {
    category = pathArr[2]
  }

  return category
}

const showSubNav = ref(false)

let timer:(null | ReturnType<typeof setTimeout>) = null

const setSubNav = (show:boolean) => {
  if (show) {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }

    showSubNav.value = true
  }

  if (!show) {
    timer = setTimeout(() => {
      showSubNav.value = false
      timer = null
    }, 500)
  }
}

/**
 * sub transition effect
 */
const onAfterEnter = (el:HTMLElement) => {
  el.classList.add('translate-y-full')
}

/**
 *
 * toggle flexible mode
 *
 */
const flexiMode = useFlexiMode()

const changeFlexiMode = () => {
  if (flexiMode.value === 'blog') {
    flexiMode.value = 'note'
  } else {
    flexiMode.value = 'blog'
  }
}

/**
 *
 * search modal
 *
 */
const showSearchModal = useShowSearchModal()
</script>

<template>
  <div class="relative">
    <div
      class="px-4 py-3 grid grid-cols-3 items-center gap-2 text-sm bg-gray-50 border-b"
      :class="showSubNav ? 'border-gray-200' : 'border-gray-50 shadow-md shadow-gray-200'"
    >
      <NuxtLink to="/">
        <img :src="appConfig.theme.avatar" alt="avatar" class="w-8 h-8 rounded-full">
      </NuxtLink>
      <div class="flex justify-center items-center gap-6">
        <button
          class="btn hidden sm:block"
          :class="flexiMode === 'blog' ? 'text-purple-500 hover:bg-purple-100' : 'text-green-500 hover:bg-green-100'"
          @mouseover="setSubNav(true)"
          @mouseleave="setSubNav(false)"
          @click="showSubNav=!showSubNav"
        >
          {{ v.filter.category }}
        </button>
        <!-- -->
        <NuxtLink
          :to="v.nav.about.link"
          class="btn"
          :class="flexiMode === 'blog' ? 'text-purple-500 hover:bg-purple-100' : 'text-green-500 hover:bg-green-100'"
        >
          {{ v.nav.about.echo }}
        </NuxtLink>
        <!-- -->
        <!--
        <NuxtLink
          v-if="appConfig.theme.subscribePage"
          :to="v.nav.subscribe.link"
          class="btn"
          :class="flexiMode === 'blog' ? 'text-purple-500 hover:bg-purple-100' : 'text-green-500 hover:bg-green-100'"
        >
          {{ v.nav.subscribe.echo }}
        </NuxtLink>
        -->
      </div>
      <div class="flex justify-end items-center gap-4">
        <button
          class="self-stretch px-4 py-1.5 flex justify-center items-center gap-2 text-gray-600 border border-gray-400 rounded-md opacity-50 hover:opacity-100 transition-opacity duration-300"
          @click="showSearchModal=true"
        >
          <IconCustom name="tabler:search" class="w-4 h-4" />
          <span class="hidden lg:block text-sm">{{ v.filter.search }}</span>
          <span class="hidden md:flex justify-center items-center gap-1 text-xs ">
            <code class="px-2 py-0.5 border rounded bg-gray-200">Ctrl</code>
            <code class="px-2 py-0.5 border rounded bg-gray-200">K</code>
          </span>
        </button>
        <button
          v-if="props.headerFlexiMode"
          :title="`${v.menu.theme} ${flexiMode === 'blog' ? 'note' : 'blog' }`"
          class="hidden w-10 h-10 sm:flex justify-center items-center gap-1 transition-colors duration-300 rounded-lg"
          :class="flexiMode === 'blog' ? 'flex-col bg-purple-100 hover:bg-purple-200 ' : 'flex-row bg-green-100 hover:bg-green-200 '"
          @click="changeFlexiMode"
        >
          <div
            class="shrink-0 w-2 h-2 rounded-full "
            :class="flexiMode === 'blog' ? 'bg-purple-500' : 'bg-green-500'"
          />
          <div class="shrink-0 space-y-1">
            <div class="w-1.5 h-1.5 rounded-full " :class="flexiMode === 'blog' ? 'bg-purple-400' : 'bg-green-400'" />
            <div class="w-1.5 h-1.5 rounded-full " :class="flexiMode === 'blog' ? 'bg-purple-400' : 'bg-green-400'" />
          </div>
        </button>
      </div>
    </div>
    <Transition
      enter-from-class="translate-y-0"
      enter-active-class="transition-all duration-300 ease-in"
      enter-to-class="translate-y-full"
      leave-from-class="translate-y-full"
      leave-active-class="transition-all duration-100 ease-out"
      leave-to-class="-translate-y-full"
      @after-enter="onAfterEnter"
    >
      <div
        v-show="showSubNav"
        class="sub-nav-scroll-container w-full max-h-[60vh] overflow-y-auto overscroll-y-none absolute -z-10 bottom-0 inset-x-0 hidden sm:flex justify-center items-start bg-gray-50 shadow-md shadow-gray-200"
        @mouseover="setSubNav(true)"
        @mouseleave="setSubNav(false)"
      >
        <div class="sub-nav-items-container max-w-full px-6 py-8">
          <NuxtLink
            to="/list"
            class="sub-nav-item-card"
            :class="flexiMode === 'blog' ? 'text-purple-500 bg-purple-50 hover:bg-purple-100 border-purple-100' : 'text-green-500 bg-green-50 hover:bg-green-100 border-green-100 '"
            @click="showSubNav=false"
          >
            <IconCustom name="material-symbols:category-rounded" class="w-8 h-8" />
            <p class="py-2 font-bold text-center">
              {{ v.filter.all }}
            </p>
          </NuxtLink>
          <NuxtLink
            v-for="category in categoryArr"
            :key="category._path"
            :to="{ path: '/list', query: { category: getCategory(category._path) } }"
            class="sub-nav-item-card"
            :class="flexiMode === 'blog' ? 'text-purple-500 bg-purple-50 hover:bg-purple-100 border-purple-100' : 'text-green-500 bg-green-50 hover:bg-green-100 border-green-100 '"
            @click="showSubNav=false"
          >
            <IconCustom name="material-symbols:category-rounded" class="w-8 h-8" />
            <p class="py-2 font-bold text-center">
              {{ category.title }}
            </p>
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">

.btn {
  @apply p-2 font-bold transition-colors duration-300 rounded-md
}

.sub-nav-scroll-container::-webkit-scrollbar {
  display: none;
}

.sub-nav-items-container {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  justify-content: center;
}

.sub-nav-item-card {
  @apply p-4 flex flex-col justify-center items-center space-y-2 border transition-colors duration-300 rounded-lg
}
</style>
