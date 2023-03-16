// the alternative to Nuxt theme https://nuxt-themes.netlify.app/
// import pkg from './package.json'
// import { variables as v } from '~/app/constants'

export default defineAppConfig({
  theme: {
    avatar: '/default-avatar.png',
    favicon: '/default-favicon.ico'
  },
  author: 'Gudsbarn',
  filter: {
    catalog: 'Indhold',
    category: 'Series',
    tags: 'Tags',
    series: 'Season',
    less: 'Mindre',
    more: 'Mer',
    search: 'Søk',
    search_guide: 'Søg efter ord eller en frase. Fraser må være omsluttet av anførselstegn.',
    list: 'List',
    clear: 'Rens filter',
    detail: 'info',
    loading: 'Laster'
  },
  nav: {
    home: {
      echo: 'Hjem',
      link: '/home',
      more: 'Åpne mappe',
      not_found: 'Ingen artikler funnet.'
    },
    about: {
      echo: 'Info',
      link: '/about'
    },
    subscribe: {
      echo: 'Rss',
      link: '/subscribe',
      rss: 'Rss',
      sitemap: 'Sidekart'
    }
  },
  menu: {
    more: 'Toggle',
    theme: 'Endre tema til'
  }
})
