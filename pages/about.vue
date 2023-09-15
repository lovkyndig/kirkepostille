<script setup lang="ts">
import pkg from '~/package.json'
const appConfig = useAppConfig()

useSeoMeta({
  titleTemplate: appConfig.title.about,
  description: appConfig.description.about,
  ogDescription: appConfig.description.about,
  ogUrl: pkg.homepage
}) // https://nuxt.com/docs/getting-started/seo-meta#useseometa

</script>

<template>
  <div id="about_page">
    <h1 style="display: none">
      {{ appConfig.description.about }}
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
                This website is built by website
                <a
                  :href="pkg.homepage"
                  target="_blank"
                  class="text-blue-500 hover:text-blue-600 underline font-bold transition-colors duration-300"
                > {{ pkg.author }}
                </a>.
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
