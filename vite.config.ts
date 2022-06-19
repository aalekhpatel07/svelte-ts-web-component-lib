import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'es6',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ExampleLibrary',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      input: ['./src/index.ts'],
    },
  },
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/lib'),
    },
  },
});
