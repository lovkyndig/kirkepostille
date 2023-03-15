<script setup lang="ts">
// const props = defineProps<{ data: any }>()
/**
 * Maybe dreate popup-modal for the FindNext-button?
 */
const searchString = useState('searchString')

// console.log('value in searchString is: ' + searchString.value)

const findNext = () => {
  const divElement = document.querySelector('#findNext')
  const text = searchString.value
  if (window.find) { // Firefox, Google Chrome, Safari
    const found = window.find(text)
    if (!found) {
      divElement.classList.add('hidden') // no more to search on this page.
    }
  } else {
    console.log('Your browser does not support this example!')
  }
}

onMounted(() => {
  if (window.find) { // Firefox, Google Chrome, Safari
    findNext()
  }
  if (document) {
    findNext()
    // const input = document.querySelector('#findIndput')
    // input.addEventListener('keyup', InputListener)
  }
})
onUnmounted(() => {
  // document.removeEventListener('keyup', InputListener)
})
/**
 * source:
 * http://help.dottoro.com/ljkjvqqo.php
 */
const tooltip = 'Click to find next search-string!'

const inputText = ref<string>('')

const inputHandler = (event: Event) => {
  const target = event.target as HTMLInputElement
  // Not using this. The inputvalue is saved in searchInput, defined above
}
const InputListener = function (event: KeyboardEvent) {
  if (event.keyCode === 13) {
    /*
    Have to make code to remove the queryparam from the old url
    and insert the new queryparam in the new url
    before the page will search for the new queryparam
    After this is doing have to reload with
    window.location.reload()
    */
  }
}

</script>

<template>
  <div id="findNext" class="text-purple-600">
    <input
      id="findIndput"
      ref="searchInput"
      v-model="inputText"
      type="text"
      size="12"
      @input="inputHandler"
    >
    <button :title="tooltip" @click="findNext()">
      FIND
    </button>
    <img
      src="/svg/arrow-down.svg"
      alt="find next"
      width="50"
      height="50"
      :title="tooltip"
      @click="findNext()"
    >
  </div>
</template>

<style>
</style>
