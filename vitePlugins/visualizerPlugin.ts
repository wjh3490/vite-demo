import { visualizer } from 'rollup-plugin-visualizer'

const isInspect = (): boolean => process.env.REPORT === 'true'
export default function configVisualizerPlugin() {
  return isInspect()
    ? visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true
      })
    : []
}
