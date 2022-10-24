import Components from 'unplugin-vue-components/vite'

export default function configArcoResolverPlugin() {
  const arcoResolverPlugin = Components({
    deep: false,
    // resolvers: [ElementPlusResolver()],
    resolvers: [],
    dirs: ['src/components'],
    extensions: ['vue'],
    dts: 'src/components.d.ts'
  })
  return arcoResolverPlugin
}
