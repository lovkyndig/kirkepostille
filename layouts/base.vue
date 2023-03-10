<script setup lang="ts">
const props = defineProps({
  headerFlexiMode: {
    type: Boolean,
    default: false
  },
  footerCatalog: {
    type: Boolean,
    default: false
  },
  footerFlexiMode: {
    type: Boolean,
    default: false
  }
})

const route = useRoute()

const appConfig = useAppConfig()

/**
 *
 * set head meta for almost all page
 *
 */
useHead({
  style: [
    {
      children: 'html, body { scroll-behavior: smooth }'
    },
    {
      children: 'body { overflow: overlay }'
    }
  ],
  link: [
    {
      rel: 'icon',
      href: appConfig?.theme?.favicon
    }
  ],
  script: []
})
// https://github.com/nuxt-community/google-analytics-module/issues/127

/**
 *
 * listen page resize
 *
 */
let resizeTimer:(null | ReturnType<typeof setTimeout>) = null
const windowSize = useWindowSize()

onMounted(() => {
  if (document) {
    windowSize.value.width = document.documentElement.clientWidth
    windowSize.value.height = document.documentElement.clientHeight
  }

  window.addEventListener('resize', () => {
    if (resizeTimer) {
      clearTimeout(resizeTimer)
    }

    resizeTimer = setTimeout(() => {
      windowSize.value.width = document.documentElement.clientWidth
      windowSize.value.height = document.documentElement.clientHeight

      resizeTimer = null
    }, 300)
  })
})

/**
 * listen page scroll
 */
const isShowBackBtn = ref(false)
let scrollTimer:(null | ReturnType<typeof setTimeout>)
onMounted(() => {
  if (document) {
    const scrollDistanceInit = document.body.scrollTop || document.documentElement.scrollTop
    if (scrollDistanceInit > 600) { isShowBackBtn.value = true }
    document.addEventListener('scroll', () => {
      if (scrollTimer) {
        clearTimeout(scrollTimer)
        scrollTimer = null
      }
      scrollTimer = setTimeout(() => {
        const scrollDistance = document.body.scrollTop || document.documentElement.scrollTop
        if (scrollDistance > 600) {
          isShowBackBtn.value = true
        } else {
          isShowBackBtn.value = false
        }
        scrollTimer = null
      }, 100)
    })
  }
})

/**
 *
 * search modal
 *
 */
const showSearchModal = useShowSearchModal()

// stop body scroll when search modal show up
watch(showSearchModal, () => {
  if (!document?.body) { return }

  if (showSearchModal.value) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
})

// keyboard shortcuts for search modal
const ModalKeyListener = function (event: KeyboardEvent) {
  if (event.ctrlKey && event.key === 'k') {
    event.preventDefault()
    showSearchModal.value = !showSearchModal.value
  } else if (showSearchModal.value && event.key === 'Escape') {
    showSearchModal.value = false
  }
}

onMounted(() => {
  if (document) {
    document.addEventListener('keydown', ModalKeyListener)
  }
})

onUnmounted(() => {
  document.removeEventListener('keydown', ModalKeyListener)
})
</script>

<template>
  <div class="pb-20 sm:pb-0 bg-gray-50 flex flex-col min-h-screen">
    <header class="hidden sm:block shrink-0" :class="route.path === '/' ? 'sm:sticky top-0 inset-x-0 z-30' : 'relative z-40'">
      <HeaderNav :header-flexi-mode="props.headerFlexiMode" />
    </header>
    <div class="grow flex flex-col">
      <slot />
      <NuxtLoadingIndicator />
      <!-- https://nuxt.com/docs/api/components/nuxt-loading-indicator -->
    </div>
    <hr class="p-4 w-1/5 mx-auto">
    <FooterContent />

    <Transition
      enter-from-class="translate-y-36 md:translate-y-10 opacity-0"
      enter-active-class="transition-all duration-300 ease"
      enter-to-class="translate-y-0 opacity-100"
      leave-from-class="translate-y-0 opacity-100"
      leave-active-class="transition-all duration-75 ease"
      leave-to-class="translate-y-36 md:translate-y-10 opacity-0"
    >
      <BackToTop v-show="isShowBackBtn" />
    </Transition>

    <nav class="sm:hidden fixed bottom-0 left-0 right-0 z-50">
      <FooterNav :footer-catalog="props.footerCatalog" :footer-flexi-mode="props.footerFlexiMode" />
    </nav>

    <ClientOnly>
      <SearchModal v-show="showSearchModal" />
    </ClientOnly>
  </div>
</template>

<style lang="scss">
::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgba(156, 163, 175, 1);
  border: 3px solid transparent;
  background-clip: padding-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(107, 114, 128, 1);
}
</style>
