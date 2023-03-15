declare module 'nuxt/schema' {
  interface AppConfig {
    // This will entirely replace the existing inferred `theme` property
    theme: {
      meta: {
        name: pkg.name,
        description: pkg.description,
        author: pkg.author,
        url: v.site.copyright
      },
      author: pkg.author,
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
  }
}

// It is always important to ensure you import/export something when augmenting a type
export {}
