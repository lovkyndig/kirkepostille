// @ts-nocheck
export default defineAppConfig({
  site: {
    listview: '/img/listview.png',
    frontpage: '/img/frontpage.png'
  },
  nav: {
    home: {
      echo: 'Hjem',
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
    theme: 'Endre tema til',
    toggle: 'Click to Toggle the Content'
  },
  filter: {
    catalog: 'Indhold',
    category: 'Postiller',
    tags: 'Merke',
    series: 'Sesong',
    all: 'Alle',
    less: 'Skjul',
    more: 'Vis',
    search: 'Søk',
    search_guide: 'Søg efter ord eller en frase. Fraser må være omsluttet av anførselstegn.',
    clear: 'Rens filter',
    detail: 'ingress',
    loading: 'Laster'
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
  title: {
    home: 'Dr. Martin Luthers kirkepostille - medisin for syke sjeler!',
    about: 'Om nett-kirkepostillen og dens fantastiske søkefunksjonalitet.',
    list: 'Kirkepostille ord: ',
    list_all: 'ALLE talene vises her'
  },
  description: {
    home: 'Dr. Martin Luthers kirkepostille med innebygd søkemotor, per dato med det mest avanserte brukergrenesnittet for mobil og nettbrett.',
    about: 'Les om Luthers kirkepostille, tilrettelagt for mobil og nettbrett, med søkefunksjon som i nettbibler.',
    list: 'Liste over Dr. Martin Luthers predikener i kirkepostillen innenfor folgende valgt serie, merke og/eller sesong:',
    slug: 'Dr. Martin Luthers kirkepostille med forklaring av evangelium og epistelteksten. Publisert på https//kirkepostille/vercel.app.'
  },
  list: {
    evangelie_list1: '/list?tags=Evangelium&category=Alle&series=Alle',
    epistel_list1: '/list?tags=Epistel&category=Alle&series=Alle'
  }
})
