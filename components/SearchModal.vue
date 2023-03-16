<script setup lang="ts">
import { variables as constants } from '~/app/constants'
// const appConfig = useAppConfig()

const pagefindPath = '/_pagefind/pagefind.js'

const runtimeConfig = useRuntimeConfig()
const baseURL = runtimeConfig.app.baseURL

let pagefind: any
try {
  pagefind = await import(/* @vite-ignore */pagefindPath)
} catch (error) {
  console.log(error)
}

if (baseURL !== '/') {
  await pagefind.options({
    baseURL
  })
}

// search modal
const showSearchModal = useShowSearchModal()

const searchInput = ref<HTMLElement | null>(null) // get the input DOM

// when the search modal show up, auto focus the input box
onMounted(() => {
  watch(showSearchModal, () => {
    if (searchInput.value && showSearchModal.value) {
      nextTick(() => {
        searchInput.value?.focus()
      })
    }
  })
})

const focusInputHandler = () => {
  if (searchInput.value) {
    searchInput.value.focus()
  }
}

const searchResults = ref<any[]>([])
const inputText = ref<string>('')

let timer: (null | ReturnType<typeof setTimeout>) = null
const debouncedSearch = (key: string, delay = 300) => {
  if (timer) {
    clearTimeout(timer)
  }

  if (key) {
    timer = setTimeout(async () => {
      if (pagefind) {
        const metaResults = await pagefind.search(key)

        timer = null
        if (metaResults.results.length > 0) {
          const resultsData = await Promise.all(metaResults.results.map((r: any) => r.data()))

          let filterResults = []

          if (constants?.search?.exclude && constants.search.exclude.length > 0) {
            filterResults = resultsData.filter(item => !constants.search.exclude.includes(item.url))
          }

          searchResults.value = filterResults
        } else {
          searchResults.value = []
        }
      }
    }, delay)
  } else {
    timer = null
    searchResults.value = []
    inputText.value = ''
  }
}

const searchString = useState('searchString') // transfered to findNext.vue as queryparam

const inputHandler = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (pagefind) {
    pagefind.preload(target.value)
    debouncedSearch(target.value) // result of this value is showing
  }
  searchString.value = checkSearchString(target.value)
}
/**
 * Start working with the searchString and removing punctations if somone
 */
const checkSearchString = (str) => {
  /**
   * Using Unicode Character Categories: Other Punctuation (quatationsmark/apostrophe) and Initial Punctuation (Pi)
   */
  /* ref:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
    https://www.compart.com/en/unicode/category

  */
  const fixed = (str) => {
    const punctations = /\u0022|\u0027|\p{Pi}/gu
    str = str.replace(punctations, '') // Other Punctuation:  + Initial Punctuation (Pi)
    return str.replace(/ /g, '_') // replace Space_Separator (Zs) &nbsp; OR %20
  }
  // console.log('The searchString from SearchModal is (at the end): ' + fixed(str))
  // adding this searchString below in NuxtLink, as queryparam to url
  return fixed(str)
}

</script>

<template>
  <div
    class="expand-window p-4 fixed inset-0 z-[80] flex justify-center items-start"
  >
    <div
      class="expand-window absolute inset-0 -z-10 flex justify-center items-center bg-black/5 backdrop-blur"
      @click="showSearchModal =false"
    />
    <div class="modal-container flex flex-col w-full max-w-prose">
      <div class="px-4 py-4 flex items-center gap-4 bg-white border-b rounded-t-lg">
        <button
          class="flex justify-center items-center"
          @click="focusInputHandler"
        >
          <IconCustom name="tabler:search" class="shrink-0 w-6 h-6 text-gray-600" />
        </button>

        <input
          ref="searchInput"
          v-model="inputText"
          type="text"
          placeholder="Search Content"
          class="grow focus:outline-none"
          @input="inputHandler"
        >
        <!-- This button shows on big screens -->
        <button
          class="shrink-0 hidden sm:block px-2 py-1 text-xs text-gray-400 hover:text-gray-600 font-mono font-bold hover:bg-gray-50 border border-gray-400 hover:border-gray-600 rounded transition-colors duration-300"
          title="hide the search modal"
          @click="showSearchModal=false"
        >
          Esc
        </button>
        <!-- This button shows on mobile screens -->
        <button
          class="flex sm:hidden justify-center items-center text-gray-200 hover:text-gray-400 transition-colors"
          @click="showSearchModal=false"
        >
          <IconCustom name="ion:close-circle" class="w-6 h-6" />
        </button>
      </div>

      <div class="modal-content-container px-4 overflow-y-auto bg-white rounded-b-lg">
        <ul v-show="searchResults.length>0" class="search-result p-4 space-y-2">
          <li
            v-for="item in searchResults"
            :key="item.url"
            class="p-4 hover:text-white hover:bg-purple-500 rounded"
          >
            <!-- inserted target=_blank and changed showSearchModal from false to true -->
            <!-- :to="item.url" -->
            <NuxtLink
              :to="`${item.url+'?searchparam='+searchString}`"
              target="_blank"
              @click.exact="showSearchModal=true"
            >
              <p class="font-bold">
                {{ item.meta.title }}
              </p>
              <p class="text-sm" v-html="item.excerpt" />
            </NuxtLink>
          </li>
        </ul>
        <div
          v-show="!(searchResults.length>0)"
          class="p-16 flex flex-col justify-center items-center space-y-8"
          @click="showSearchModal =false"
        >
          <IconCustom name="fluent:mail-inbox-dismiss-28-filled" class="w-12 h-12 text-purple-400" />
          <p>{{ constants.filter.search_guide }} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.search-result {
  mark {
    @apply bg-yellow-300;
  }
}

.modal-container {
  max-height: 90dvh;
}

.modal-content-container::-webkit-scrollbar {
  display: none;
}
</style>
