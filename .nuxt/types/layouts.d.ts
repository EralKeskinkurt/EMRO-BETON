import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "C:/Users/oral/OneDrive/Masaüstü/EMRO-BETON/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}