// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// URL disediakan Netlify saat build; SITE_URL dapat mengatur domain secara manual.
export default defineConfig({
  site: process.env.SITE_URL || process.env.URL || 'http://localhost:4321',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.endsWith('/tentang-proyek/') && !page.endsWith('/tentang-proyek'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
