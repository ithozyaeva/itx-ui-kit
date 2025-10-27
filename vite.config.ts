import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), dts({
    insertTypesEntry: true,
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      name: 'itx-uikit'
    }
  }
})
