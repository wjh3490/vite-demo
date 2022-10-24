import { createStyleImportPlugin } from 'vite-plugin-style-import'

export default function configStyleImportPlugin() {
  const styleImportPlugin = createStyleImportPlugin({
    // ...
  })
  return styleImportPlugin
}
