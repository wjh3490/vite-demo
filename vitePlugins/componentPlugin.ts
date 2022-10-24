import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default function configComponentsResolverPlugin() {
  return Components({
    deep: false,
    resolvers: [ElementPlusResolver()],
    dirs: ['src/components'],
    extensions: ['vue']
  })
}
