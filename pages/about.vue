<script setup lang="ts">
import { variables as constants } from '../app/constants'
import pkg from '~/package.json'
// const appConfig = useAppConfig()

const description = 'Info om søking og hvordan det er mulig å søke med ord eller fraser gjennom hele kirkepostillen. Se også register over viktig innhold.'
useHead({
  meta: [
    { name: 'description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: pkg.homepage },
    { property: 'og:title', content: constants.site.title },
    { property: 'og:image', content: `${pkg.homepage}${constants.site.preview}` }
  ]
})

</script>

<template>
  <div>
    <Head>
      <Title>About</Title>
    </Head>
    <h1 style="display: none">
      {{ description }}
    </h1>
    <NuxtLayout name="base">
      <ContentDoc class="about-me-content-container container mx-auto lg:max-w-4xl px-6 md:px-12 py-12">
        <template #not-found>
          <div class="about-me-content-container">
            <h1>
              About
            </h1>
            <div class="text-center max-w-prose mx-auto p-4">
              <p>
                This website is built by website <a
                  :href="constants.meta.url"
                  target="_blank"
                  class="text-blue-500 hover:text-blue-600 underline font-bold transition-colors duration-300"
                > {{ constants.site.author }}</a>.
              </p>
              <p>
                Replace this page with an <i>about.md</i>-file in the <i>content</i>-folder.
              </p>
            </div>
          </div>
        </template>
      </ContentDoc>
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
.about-me-content-container {
  h1 {
    @apply py-8 text-3xl sm:text-5xl text-purple-500 font-bold text-center
  }

  h2 {
    @apply py-8 text-2xl font-bold text-center
  }

  p {
    @apply py-4 text-lg text-gray-500
  }
}
</style>
