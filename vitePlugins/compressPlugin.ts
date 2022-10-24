import viteCompression from 'vite-plugin-compression'

export default function configCompressPlugin(
  compress: 'gz' | 'br', // gzip || brotil
  deleteOriginFile = false
) {
  return viteCompression({
    ext: `.${compress}`,
    deleteOriginFile
    // ...
  })
}
