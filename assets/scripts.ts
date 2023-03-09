// BAKCUP OF TEST-CODE

/**
 * THE FOLLWOEING CODE WASE JUSED IN [...slug].vue
 * before I ended with code from this source:
 * https://codybontecou.com/using-url-query-params-in-nuxt-3.html
 */
// get querystring if somone, or clear it
/*
const searchString = useState('searchString')
if (process.client) {
  const querystring = window.location.search
  const urlParams = new URLSearchParams(querystring)
  const querystr = urlParams.get('searchparam')
  if (window.location.search.substring(1)) {
    searchString.value = querystr // set searchString.value
  } else {
    searchString.value = '' // clearing searchString.value
  }
}
*/
/*
the findSearchparam is saving the value from the previous search
need to clear it when the page url is changing
Or do something to know if the page still have the search-param in the url.
Create an component? for search-param-detecting?
Check the url every time this file is loading, if it holds a searchparam

source:
https://www.sitepoint.com/get-url-parameters-with-javascript/
https://stackoverflow.com/questions/979975/get-the-values-from-the-get-parameters-javascript
can also be used:
window.location.href
*/
