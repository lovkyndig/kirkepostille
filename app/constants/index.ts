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
  meta: {
    description: 'Church-Postil with',
    author: 'Gudsbarn'
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
    clear: 'Rens filter',
    detail: 'info',
    loading: 'Laster'
  }
}
