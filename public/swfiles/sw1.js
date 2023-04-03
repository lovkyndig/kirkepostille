import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching'

// cleanupOutdatedCaches()
precacheAndRoute(self.__WB_MANIFEST)

console.log('Service worker file loaded.')

/**
 * * FETCH event
 * ? It is triggered when the browser is requesting a resource
 * TODO: Add the logic to handle the request (investigate best practices and options)
 */
 self.addEventListener("fetch", (event) => {
/*     event
      .respondWith(
        console.log('fetching!'),
      ); */
  });

/**
 * * INSTALL event
 * * It is triggered when the service worker has been installed
 * ? It is the best place to cache the app
 * TODO: Add the resources to cache
 */
self.addEventListener("install", (event) => {

    console.log('Installing service worker...')
    /*
    event.waitUntil(
    // ...
    ); 
    */
});

/*
sorce:
https://vite-pwa-org.netlify.app/guide/inject-manifest.html#cleanup-outdated-caches
*/