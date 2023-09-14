<script setup lang="ts">
/*
const el = ref<HTMLElement | null>(null)
// https://vueuse.org/core/useDraggable/
// `style` will be a helper computed for `left: ?px; top: ?px;`
const { x, y, style } = useDraggable(el, {
  initialValue: { x: xpos, y: ypos }
})
*/

const searchString = useState('searchString')
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

// draggable scool
// https://www.w3schools.com/howto/howto_js_draggable.asp

onMounted(() => {
  const xpos = innerWidth >= 640 ? 50 : 100
  const ypos = innerWidth >= 640 ? 21 : 2
  dragElement(document.getElementById('findNext'))
  function dragElement (elmnt) {
    let pos1 = xpos
    let pos2 = ypos
    let pos3 = xpos
    let pos4 = ypos
    if (document.getElementById(elmnt.id + 'Header')) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + 'Header').onmousedown = dragMouseDown
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown
    }

    function dragMouseDown (e) {
      e = e || window.event
      e.preventDefault()
      // get the mouse cursor position at startup:
      pos3 = e.clientX
      pos4 = e.clientY
      document.onmouseup = closeDragElement
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag
    }

    function elementDrag (e) {
      e = e || window.event
      e.preventDefault()
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX
      pos2 = pos4 - e.clientY
      pos3 = e.clientX
      pos4 = e.clientY
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + 'px'
      elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px'
    }

    function closeDragElement () {
      // stop moving when mouse button is released:
      document.onmouseup = null
      document.onmousemove = null
    }
  }
})

/*
 top: 1px;
  right: -250px
*/

</script>

<template>
  <div id="findNext" class="text-purple-600">
    <img
      id="findNextHeader"
      src="/img/svg/arrow-down.svg"
      alt="find next"
      width="50"
      height="50"
      :title="tooltip"
      @click="findNext()"
    >
    <input
      id="findIndput"
      ref="searchInput"
      v-model="inputText"
      type="text"
      size="12"
      @input="inputHandler"
    >
  </div>
</template>

<style scoped>
* {
  position: fixed;
  background: transparent;
}
#findNext {
  height: 60px;
  width: 60px;
  z-index: 51;
}

#findNext > img {
  cursor: move
}

@media only screen and (max-width: 640px) {
  #findNext {
    top: 2px;
    right: 1px
  }
}
@media only screen and (min-width: 640px) {
  #findNext {
    top: 45px;
    right: 8px
  }
}

@media only screen and (max-width: 767px) {
  #findIndput {
    visibility: hidden
  }
}
@media only screen and (min-width: 767px) {
  #findIndput {
    visibility: hidden
  }
}
</style>
