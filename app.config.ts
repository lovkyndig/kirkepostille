// the alternative to Nuxt theme https://nuxt-themes.netlify.app/
// import pkg from './package.json'
// import { variables as v } from '~/app/constants'

export default defineAppConfig({
  theme: {
    meta: {
      name: 'Kirkepostil',
      description: 'Church-Postil with',
      author: 'Gudsbarn',
      url: 'Gudsbarn'
    },
    author: 'Gudsbarn',
    avatar: '/default-avatar.png',
    favicon: '/default-favicon.ico',
    homePage: {
      showBlogPosts: true,
      postItemLimit: 2
    },
    subscribePage: true,
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
    }
  }
})
