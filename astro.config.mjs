// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Ganti dengan domain Vercel Anda setelah deploy.
export default defineConfig({
  site: 'https://nusantara-studio.vercel.app',
  integrations: [sitemap()],
  // Cast: tipe Vite di Astro 5 dan @tailwindcss/vite berbeda versi (hanya masalah tipe).
  vite: { plugins: [/** @type {any} */ (tailwindcss())] },
});
