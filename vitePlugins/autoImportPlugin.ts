import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default function configAutoImportResolverPlugin() {
  return AutoImport({
    resolvers: [ElementPlusResolver()]
  })
}
