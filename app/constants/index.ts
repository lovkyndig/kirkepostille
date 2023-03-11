export const variables = {
  site: {
    name: 'Kirkepostil',
    copyright: 'https://kirkepostille.vercel.app/about'
  },
  article: {
    parent: 'Content',
    folder: 'article',
    link: '/article'
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
  },
  filter: {
    catalog: 'Indhold',
    category: 'Series',
    tags: 'Tags',
    series: 'Season',
    all: 'Alle',
    less: 'Mindre',
    more: 'Mer',
    search: 'Søk',
    search_guide: 'Søg efter ord eller en frase. Fraser må være omsluttet av anførselstegn.',
    list: 'List',
    clear: 'Rens filter',
    detail: 'info',
    loading: 'Laster'
  }
}
