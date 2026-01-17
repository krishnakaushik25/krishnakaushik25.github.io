// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://krishnakaushik25.github.io',
  output: 'static',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    react(),
    mdx()
  ],

  // Prefetch for faster navigation
  prefetch: {
    prefetchAll: true
  }
});
