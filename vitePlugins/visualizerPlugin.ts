import { visualizer } from 'rollup-plugin-visualizer'

export default function configVisualizerPlugin() {
  return visualizer({
    open: true,
    gzipSize: true,
    brotliSize: true
  })
}
