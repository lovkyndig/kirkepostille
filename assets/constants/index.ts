export const variables = {
  site: {
    name: 'Kirkepostille',
    description: 'Dr. Martin Luthers Kirkepostille',
    url: '/about',
    favicon: '/img/32.ico',
    avatar: '/img/180.jpg',
    apple: '/img/180.jpg',
    listview: '/img/listview.png',
    frontpage: '/img/frontpage.png',
    author: 'Eleison'
  },
  privacyPage: true,
  homePage: {
    showBlogPosts: true,
    postItemLimit: 55
  },
  articlePage: {
    showTime: true,
    outdated: {
      show: true,
      threshold: 30
    }
  },
  article: {
    parent: 'Content',
    folder: 'article',
    link: '/article'
  },
  search: {
    exclude: [
      '/',
      '/about/',
      '/privacy/',
      '/list/'
    ]
  },
  filter: {
    catalog: 'Indhold',
    category: 'Serie',
    tags: 'Merke',
    series: 'Sesong',
    all: 'Alle',
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
      echo: 'Front',
      link: '/home',
      more: 'Åpne mappe',
      not_found: 'Ingen artikler funnet.'
    },
    about: {
      echo: 'Info',
      link: '/about'
    },
    privacy: {
      echo: 'Privacy',
      link: '/privacy',
      rss: 'Rss',
      sitemap: 'Sidekart'
    }
  },
  menu: {
    more: 'Toggle',
    theme: 'Endre tema til'
  },
  title: {
    list: 'Kirkepostille ord: ',
    list_all: 'ALLE talene vises her',
    slug: 'En prediken/tale fra Dr. Martin Luthers kirkepostille.'
  },
  description: {
    list: 'Liste over Dr. Martin Luthers predikener i kirkepostillen innenfor folgende valgt serie, merke og/eller sesong:',
    slug: 'Dr. Martin Luthers kirkepostille med forklaring av evangelium og epistelteksten. Publisert på https//kirkepostille/vercel.app.'
  },
  list: {
    evangelie_list1: '/list?tags=Evangelium&category=Alle&series=Alle',
    epistel_list1: '/list?tags=Epistel&category=Alle&series=Alle'
  }
}
