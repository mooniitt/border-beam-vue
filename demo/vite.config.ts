import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  plugins: [vue()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      'border-beam': resolve(__dirname, '../src/index.ts'),
    },
  },
});
