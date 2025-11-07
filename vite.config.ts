import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import path from 'path';
import svgLoader from 'vite-svg-loader';

//More info: https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
    dts({
      insertTypesEntry: true,
      outDir: 'dist',
      include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
      exclude: ['src/**/*.stories.ts', 'src/**/*.stories.tsx'],
      rollupTypes: false,
      copyDtsFiles: true,
      entryRoot: 'src',
      staticImport: true,
      tsconfigPath: './tsconfig.app.json',
      logLevel: 'info',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.woff', '**/*.woff2', '**/*.ttf'],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ItxUiKit',
      fileName: (format) => `itx-uikit.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: { vue: 'Vue' },
        assetFileNames: 'style.css',
      },
    },
    cssCodeSplit: false,
    outDir: 'dist',
    emptyOutDir: true,
  },
});
