
import type { Defu } from 'defu'
import cfg0 from "E:/Github/kirkepostille/app.config"

declare const inlineConfig = {}
type ResolvedAppConfig = Defu<typeof inlineConfig, [typeof cfg0]>

declare module 'nuxt/schema' {
  interface AppConfig extends ResolvedAppConfig { }
}
