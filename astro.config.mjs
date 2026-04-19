import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://transfers.tropicwings.com.au',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
