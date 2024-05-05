import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), purgeCss()],
});
