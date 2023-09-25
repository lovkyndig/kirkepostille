<script setup lang='ts'>
import GoogleTranslateSelect from '@google-translate-select/vue3'
// const windowSize = useWindowSize()

const handleGoogleTranslateSelect = (language: any) => {
  console.log('Google Translate is set to: ')
  console.log(language)
  const langBtns = document.getElementsByClassName('google-translate-select-dropdown__menu')
  if (document.documentElement.clientWidth >= 640) {
    // langBtns[0].setAttribute('style', 'display:none')
  }
}
/*
Sources:
https://www.npmjs.com/package/@google-translate-select/vue3
https://github.com/i7eo/google-translate-select/tree/master
https://google-translate-select.i7eo.com/
*/
</script>

<template>
  <GoogleTranslateSelect
    default-language-code="da"
    default-page-language-code="da"
    :fetch-browser-language="true"
    trigger="click"
    @select="handleGoogleTranslateSelect"
  />
</template>
