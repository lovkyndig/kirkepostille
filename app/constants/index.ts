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
  filter: {
    all: 'Alle'
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
  }
}
