// https://nuxt.com/docs/guide/directory-structure/app-config
// https://nuxt.com/docs/guide/directory-structure/plugins#advanced
declare module '#app' {
  interface NuxtApp {
    $hello (msg: string): string
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $hello (msg: string): string
  }
}

export { }
