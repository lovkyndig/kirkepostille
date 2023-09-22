<script setup lang='ts'>
import { Translator } from 'vue-google-translate'

const countries = [
  {
    code: 'en|zh-CN',
    title: 'Chinese (Simplified)'
  },
  {
    code: 'en|en',
    title: 'English'
  },
  {
    code: 'en|fr',
    title: 'French'
  },
  {
    code: 'en|de',
    title: 'German'
  },
  {
    code: 'en|it',
    title: 'Italian'
  },
  {
    code: 'en|ru',
    title: 'Russian'
  },
  {
    code: 'en|es',
    title: 'Spanish'
  },
  {
    code: 'en|iw',
    title: 'Hebrew',
    flagIconUrl: 'https://flagicons.lipis.dev/flags/4x3/il.svg',
    altText: 'Hebrew language translation'
  }
]

const hideModal = () => {
  // bvModal.hide('translate-modal')
}
</script>
<template>
  <div
    id="translate-modal"
  >
    <Translator :countries="countries" @on-country-click="hideModal" />
  </div>
</template>

<script>
/*
https://terabytetiger.com/lessons/moving-from-vue-2-to-vue-3-composition-api
https://learnvue.co/articles/script-setup
*/
/*
export default {
  name: 'TranslateModal',
  components: {
    Translator,
  },
  data() {
    return {
  methods: {
    hideModal() {
      this.$bvModal.hide('translate-modal');
    },
  },
};
*/
</script>
