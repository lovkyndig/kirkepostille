// @ts-nocheck
export default defineAppConfig({
  site: {
    url: 'https://kirkepostille.vercel.app/',
    name: 'Kirkepostil',
    description: 'Dr. Martin Luthers kirkepostille',
    author: 'lovkyndig',
    avatar: '/default-avatar.png'
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
    privacy: {
      echo: 'Rss',
      link: '/privacy',
      rss: 'Rss',
      sitemap: 'Sidekart'
    }
  },
  menu: {
    more: 'Toggle',
    theme: 'Endre tema til'
  }
})
