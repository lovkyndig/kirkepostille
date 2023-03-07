<script setup lang="ts">
/**
 * Create popup-modal for the FindNext-button
 */
const searchString = useState('searchString')

const findNext = () => {
  // alert('The value of searchStringState is ' + searchString.value)
  const divElement = document.querySelector('#findNext')
  const text = searchString.value
  if (window.find) { // Firefox, Google Chrome, Safari
    const found = window.find(text)
    if (!found) {
      divElement.classList.add('hidden') // no more to search after in this doc.
    }
  } else {
    console.log('Your browser does not support this example!')
  }
}

onMounted(() => {
  findNext()
})
/**
 * source:
 * http://help.dottoro.com/ljkjvqqo.php
 */
</script>

<template>
  <div id="findNext" class="find-next text-purple-500">
    <input id="findIndput" type="text" size="10" class="hidden">
    <button class="find-button" @click="findNext()">
      FIND
    </button>
    <img src="/svg/arrow-down.svg" alt="find next" width="50" height="50" @click="findNext()">
  </div>
</template>

<style>
</style>
