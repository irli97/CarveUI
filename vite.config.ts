import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'CarveUI',
      fileName: (format) => `carve-ui.${format}.ts`,
    },
    rollupOptions: {
      external: ['vue'],
    }
  }
})
