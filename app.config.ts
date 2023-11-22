import pkg from './package.json'
// import { capitalize } from './node_modules/@lovkyndig/create-google-app/utils/capitalize-method'

export default defineAppConfig({
  myLayer: {
    meta: {
      name: 'Kirkepostille',
      version: pkg.version,
      description: pkg.description,
      homepage: pkg.homepage,
      logo: 'Kyrie Eleison'
    },
    menu: { btn: 'Postiller' },
    author: pkg.author,
    email: 'jesu.broder@gmail.com',
    avatar: '/img/180.webp',
    favicon: '/favicon.ico',
    assetTypes: [],
    giscus: {
      repo: 'lovkyndig/kirkepostille',
      repoId: 'R_kgDOJCYY3Q',
      category: 'Comments',
      categoryId: 'DIC_kwDOJCYY3c4CbJbr',
      mapping: 'pathname',
      reactionsEnabled: '1',
      emitMetadata: '0',
      inputPosition: 'top',
      theme: 'noborder_dark',
      lang: 'en',
      loading: 'lazy'
    },
    privacy: {
      title: 'Privacy Policy med rss og sitemap for kirkepostille.',
      description: 'Privacy Policy er påkrevd for Google Play Apper, men også pga. kommentar-autentiseringen som benytter seg av cookies.',
      notification: 'Privacy Policy, rss og sitemap for kirkepostille.'
    },
    about: {
      title: 'Om nett-kirkepostillen og dens moderne søkefunksjonalitet.',
      description: 'Les om Luthers kirkepostille, tilrettelagt for mobil og nettbrett, med søkefunksjon som i nettbibler.',
      notification: 'Kyrie Eleison - er en av mange redaktører som arbeider med skriftlig evangelisering.'
    },
    home: {
      title: 'Dr. Martin Luthers kirkepostille - medisin for syke sjeler!',
      description: 'Dr. Martin Luthers kirkepostille med innebygd søkemotor, per dato med det mest avanserte brukergrenesnittet for mobil og nettbrett.',
      notification: 'Guds fred fra Gud Fader, Jesus Kristus og Den Hellige Ånd.'
    },
    slug: {
      description: 'Prediken/tale fra Dr. Martin Luthers kirkepostille med url: ',
      notification: 'Det oppfordres til å bruke kommentarfeltene under predikenen!'
    },
    list: {
      tags: 'Predikener fra Dr. Martin Luthers kirkepostille med tag: ',
      tags_all: 'Alle predikener',
      description: 'Liste med predikener og taler fra Dr. Martin Luthers kirkepostille, med beskrivende stikkord over innholdet.',
      notification: 'Bruk gjerne søkeord/ strofer for å utnytte de fantastiske søkefunksjonene.'
    },
    scrollSmooth: true,
    homePage: {
      showBlogPosts: true,
      postItemLimit: 20
    },
    privacyPage: true,
    articlePage: {
      showTime: true,
      outdated: {
        show: true,
        threshold: 30
      },
      showCatalog: false
    },
    search: {
      exclude: [
        '/',
        '/about/',
        '/privacy/',
        '/list/'
      ]
    }
  }
})
/*
ahrefs LENGTH guide:
Title: 50-60
Descriptionn 110-130
*/
