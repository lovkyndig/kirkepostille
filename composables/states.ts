import * as _nuxt_schema from '@nuxt/schema'
import { Theme as Theme$1 } from 'shiki-es'
/**
 *
 * window width and heigh
 * change when window resize in /layout/base.vue component
 *
 */
interface WindowSize {
  height: number;
  width: number;
}
export const useWindowSize = () => useState<WindowSize>('windowSize', () => {
  return {
    height: 0,
    width: 0
  }
})

/**
 *
 * flexible mode
 *
 */
export const useFlexiMode = () => useState<'blog' | 'note'>('flexiMode', () => 'blog')
// fixing header in node-modus when only 1 column and screensize > 1000px
export const useOneColHeaderOnBigScreen = () => useState<Boolean>('oneColHeaderOnBigScreen', () => {
  return false
})

/**
 *
 * article catalog
 *
 */
// using this share state in MarkdownBlog component
export const useShowBlogCatalog = () => useState<Boolean>('showBlogCatalog', () => {
  return false
})
// using this share state in MarkdownNote component
export const useShowNoteCatalog = () => useState<Boolean>('showNoteCatalog', () => {
  return false
})

export const useBlogSidebarFloat = () => useState<Boolean>('blogSidebarFloat', () => false)
export const useNoteSidebarFloat = () => useState<Boolean>('noteSidebarFloat', () => true)
export const useToggleBlogSidebarFloat = () => useState<Boolean>('toggleBlogSidebarFloat', () => false)
export const useToggleNoteSidebarFloat = () => useState<Boolean>('toggleNoteSidebarFloat', () => true)
export const useFloatBlogCatalogType = () => useState<'list' | 'tree'>('floatBlogCatalogType', () => 'list')
export const useFloatNoteCatalogType = () => useState<'list' | 'tree'>('floatNoteCatalogType', () => 'tree')

// series modal
// using this share state in page/article/[...slug] component
export const useShowSeriesModal = () => useState<Boolean>('showSeriesModal', () => false)

/**
 *
 * image zoom
 *
 */
export interface ZoomImageType {
  src: string;
  alt?: string;
  width: number;
  height: number;
  x: number;
  y: number;
}

export const useShowZoomImage = () => useState<'show' | 'hiding' | 'hidden'>('showZoomImage', () => 'hidden')
export const useZoomImage = () => useState<null | ZoomImageType>('zoomImage', () => null)
export const useCurrentZoomImage = () => useState<null | ZoomImageType>('currentZoomImage', () => null)
export const useZoomImageList = () => useState<ZoomImageType[]>('zoomImageList', () => [])

// file type mapping
export const useFileTypeMap = () => useState('fileTypeMap', () => {
  return {
    default: {
      iconName: 'bi:file-earmark-text'
    },
    markdown: {
      iconName: 'bi:markdown-fill'
    },
    json: {
      iconName: 'bi:filetype-json'
    },
    csv: {
      iconName: 'bi:filetype-csv'
    }
  }
})

/**
 *
 * search modal
 *
 */
export const useShowSearchModal = () => useState<Boolean>('showSearchModal', () => false)

/**
 *
 * Necessary code to use the find-property on window-object
 * source:
 * https://stackoverflow.com/questions/12709074/how-do-you-explicitly-set-a-new-property-on-window-in-typescript/56402425#56402425
 *
 */

declare global {
  interface Window {
    find: any,
    gtag: (...args: any[]) => void;
  }
  interface Navigator {
    Clipboard: Clipboard
  }
}

/**
 *
 * Creating state to transfer search-input to url and handled on loading md-page
 * from SearchMode.vue to [...slug].vue
 * The value isn't saved in searchString but only used in SearchModal
 *
 */
// export const useSearchString = () => useState<String>('searchString', () => { return '' })
export const useSearchString = () => useState<String>('searchString', () => '')
