import { join } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import componentPlugin from './vitePlugins/componentPlugin'
import autoImportPlugin from './vitePlugins/autoImportPlugin'
import compressPlugin from './vitePlugins/compressPlugin'
import imageminPlugin from './vitePlugins/imageminPlugin'
import visualizerPlugin from './vitePlugins/visualizerPlugin'

const isDev = (mode: string) => mode === 'development'
export default ({ mode }) =>
  defineConfig({
    plugins: [
      vue(),
      eslintPlugin({
        include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
      }),
      componentPlugin(),
      autoImportPlugin(),
      ...(isDev(mode)
        ? []
        : [compressPlugin('br'), imageminPlugin(), visualizerPlugin()])
    ],
    resolve: {
      alias: {
        '@': join(__dirname, 'src')
      }
    },
    server: {
      port: 5000,
      host: true,
      open: true,
      hmr: true
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            lodash: ['lodash'],
            vue: ['vue'],
            element: ['element-plus']
          }
        }
      },
      chunkSizeWarningLimit: 2000
    }
  })
