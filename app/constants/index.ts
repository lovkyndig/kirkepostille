export const variables = {
  site: {
    name: 'Kirkepostil',
    title: 'Dr. Martin Luthers kirkepostille',
    copyright: 'https://kirkepostille.vercel.app/about',
    avatar: '/default-avatar.png',
    favicon: '/default-favicon.ico',
    author: 'Gudsbarn'
  },
  article: {
    parent: 'Content',
    folder: 'article',
    link: '/article'
  },
  meta: {
    name: 'Kirkepostil',
    description: 'Church-Postil with',
    author: 'Gudsbarn',
    url: 'https://kirkepostille.vercel.app/about'
  },
  subscribePage: true,
  homePage: {
    showBlogPosts: true,
    postItemLimit: 2
  },
  articlePage: {
    showTime: true,
    outdated: {
      show: true,
      threshold: 30
    }
  },
  search: {
    exclude: [
      '/',
      '/about/',
      '/subscribe/',
      '/list/'
    ]
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
    title: 'Oversikt taler med stikkord ',
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
}
