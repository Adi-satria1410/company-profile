# Nusantara Studio: Company Profile Demo

Proyek demo/portofolio (perusahaan dan konten fiktif). Stack: Astro, Tailwind CSS 4, TypeScript.

## Menjalankan
```bash
npm install
cp .env.example .env   # opsional: isi PUBLIC_FORMSPREE_ID
npm run dev            # http://localhost:4321
npm run check          # type check
npm run build          # output ke dist/
```

## Mengubah konten
- Layanan, proyek, tim, testimoni: file Markdown di `src/content/*` (divalidasi `src/content.config.ts`).
- Nama perusahaan, kontak, navigasi, statistik: `src/data/site.ts`.
- Warna dan font: `src/styles/global.css`.
- Ganti `site` di `astro.config.mjs` dan URL di `public/robots.txt` setelah domain final.

## Deploy
Push ke GitHub, import ke Vercel (preset Astro terdeteksi otomatis).
