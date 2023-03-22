export const variables = {
  site: {
    url: 'https://kirkepostille.vercel.app/about',
    avatar: '/default-avatar.png',
    favicon: '/default-favicon.ico',
    preview: '/preview.png',
    author: 'Gudsbarn'
  },
  subscribePage: true,
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
      '/subscribe/',
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
  description: {
    home: 'Dr. Martin Luthers kirkepostille med innebygd søkemotor, per dato med det mest avanserte brukergrenesnittet for mobil og nettbrett.',
    about: 'Info om søking og hvordan det er mulig å søke med ord eller fraser gjennom hele kirkepostillen. Se også register over viktig innhold.',
    list: 'Oversikt over Dr. Martin Luthers predikener i kirkepostillen innenfor folgende valgt serie, merke og/eller sesong:',
    slug: 'Dr. Martin Luthers kirkepostille med forklaring av evangelium og epistelteksten. Publisert på https//kirkepostille/vercel.app.'
  },
  title: {
    home: 'Dr. Martin Luthers kirkepostille for mobil og nettbrett',
    about: 'Info om å finne frem i Dr. Martin Luthers kirkepostille',
    list: 'Liste over kirkepostillens kategorier og stikkord mv.',
    slug: 'En prediken/tale fra Dr. Martin Luthers kirkepostille.'
  }
}
