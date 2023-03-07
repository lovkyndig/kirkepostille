export default defineNuxtPlugin((/* nuxtApp */) => {
  return {
    provide: {
      myPlugin1: () => 'Use plugins in templates'
    }
  }
})

/*
Example of use in templates:
<div>{{ $myPlugin1() }}</div>
*/
