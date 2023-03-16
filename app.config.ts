// @ts-nocheck
export default defineAppConfig({
  site: {
    avatar: '/default-avatar.png',
    author: 'Gudsbarn'
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
  meta: {
    name: 'Kirkepostil',
    url: 'https://kirkepostille.vercel.app/about'
  }
})
