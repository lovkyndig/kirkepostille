import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "base" | "default"
declare module "E:/Github/kirkepostille/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}