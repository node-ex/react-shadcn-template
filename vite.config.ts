import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import path from 'path';
import url from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), purgeCss()],
  resolve: {
    alias: {
      '@': path.resolve(
        path.dirname(url.fileURLToPath(import.meta.url)),
        './src',
      ),
    },
  },
});
