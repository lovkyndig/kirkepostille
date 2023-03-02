/*
export const state = () => ({
  selected_col: null
})
*/
/*
export const mutations = {
  setSelectedCol (state, selectedCol) {
    state.selected_col = selectedCol
  }
}
*/
/*
sources:
https://stackoverflow.com/questions/57199709/how-to-share-variable-with-nuxt-js-from-layout-to-pages
https://nuxt.com/docs/api/composables/use-state
https://nuxt.com/docs/examples/composables/use-state
https://codesandbox.io/s/github/nuxt/nuxt/tree/main/examples/composables/use-state?from-embed=&file=/app.vue:15-91
*/
export const colstate = useState('colstate', () => 5)
