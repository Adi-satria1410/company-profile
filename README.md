# Company Profile General

Template perusahaan lintas industri dengan Astro, Tailwind CSS, dan TypeScript. Identitas **Nusantara Group**, kegiatan, foto, tim, dan testimoni adalah contoh. Desain menggunakan tipografi besar, foto lokal, putih hangat, arang, dan hijau hutan.

## Menjalankan

Gunakan Node.js 24 (sama dengan Netlify dan CI).

```bash
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

Dev berjalan di http://localhost:4321. Hasil statis berada di `dist/`.

## Menggunakan template untuk perusahaan Anda

Mulai dari **`src/data/site.ts`**. Tidak perlu mengubah komponen Astro untuk penyesuaian isi biasa.

| Pengaturan                                | Isi                                                             |
| ----------------------------------------- | --------------------------------------------------------------- |
| `name`, `shortName`, `descriptor`, `logo` | Nama lengkap, wordmark singkat, keterangan merek, logo opsional |
| `tagline`, `description`                  | Judul SEO beranda dan deskripsi umum                            |
| `hero`                                    | Headline dua bagian, pengantar kecil, foto dan alt text         |
| `about`                                   | Profil, bidang usaha spesifik, visi, misi, dan foto             |
| `business`, `activities`, `commitment`    | Pengantar setiap bagian                                         |
| `labels`                                  | Menu, judul halaman, tautan daftar/detail, dan tombol           |
| `values`                                  | Nilai perusahaan                                                |
| `contact`, `footer`                       | Pengantar kontak dan footer                                     |
| `email`, `whatsapp`, `address`            | Kanal kontak; string kosong menyembunyikan item                 |
| `sections`                                | Aktif/nonaktif bagian; lihat tabel berikut                      |
| `demo`                                    | Mode contoh; ubah menjadi `false` ketika seluruh data siap      |

Tulis satu kalimat spesifik tentang bidang perusahaan dalam `about.description`. Teks pengantar umum dapat dipertahankan. Foto dapat diganti melalui path dalam konfigurasi; simpan file di `public/images/`.

Nama menu dan teks tautan seperti `labels.services` dan `labels.allServices` dapat diubah bersama, misalnya menjadi “Produk” dan “Semua produk”. URL dasar `/layanan` serta `/portofolio` tetap sama. Mengubah nama file Markdown mengubah URL detailnya.

### Bagian opsional

| Field pada `sections` | Default | Perilaku                                                 |
| --------------------- | ------- | -------------------------------------------------------- |
| `services`            | `true`  | Bidang usaha; tidak tampil jika koleksi kosong           |
| `projects`            | `true`  | Kegiatan/karya; tidak tampil jika koleksi kosong         |
| `stats`               | `false` | Isi `stats` dengan data terverifikasi sebelum diaktifkan |
| `team`                | `false` | Tim di halaman Tentang                                   |
| `testimonials`        | `false` | Kutipan mitra di beranda                                 |

Bagian bidang usaha dan kegiatan yang nonaktif/kosong tidak menghasilkan menu, halaman daftar, halaman detail, atau entri sitemap. Daftar opsional lain yang kosong tidak menyisakan blok layout kosong. Foto, nilai perusahaan, profil, dan kontak merupakan struktur inti.

Halaman daftar dikendalikan oleh `src/pages/[section].astro`. Pengambilan konten serta navigasi dipusatkan di `src/data/content.ts`. Jangan menambahkan lagi `layanan/index.astro` atau `portofolio/index.astro` tanpa menyesuaikan route dinamis tersebut.

### Konten detail Markdown

- `src/content/services/*.md`: produk, layanan, atau bidang usaha.
- `src/content/projects/*.md`: kegiatan, karya, fasilitas, atau proyek.
- `src/content/team/*.md`: anggota tim.
- `src/content/testimonials/*.md`: testimoni.

Contoh bidang usaha:

```yaml
---
title: Produk Utama
summary: Ringkasan singkat tentang produk perusahaan.
features:
  - Poin utama pertama
  - Poin utama kedua
order: 1
---
```

Tambahkan uraian Markdown setelah frontmatter. `features` dapat dihapus jika tidak dibutuhkan.

Contoh kegiatan:

```yaml
---
title: Kegiatan Perusahaan
summary: Ringkasan kegiatan yang benar-benar dilakukan.
category: Kegiatan
image: /images/kegiatan.webp
alt: Deskripsi foto kegiatan
featured: true
order: 1
---
```

`client`, `year`, `category`, dan `image` bersifat opsional. Gambar yang diisi wajib memiliki `alt`. Beranda mengambil maksimal tiga item `featured`; jika belum ada yang ditandai, tiga item teratas digunakan. Isi pengantar seluruh halaman tetap berada di `site.ts`.

### Foto dan tema

Foto contoh menggunakan WebP lokal, dengan varian 640 dan 960 px untuk perangkat kecil. Daftar sumber ada di [ASSETS.md](ASSETS.md).

Untuk mengganti foto, gunakan nama file baru lalu ubah path dan alt di konfigurasi/Markdown. Gambar baru tetap berfungsi tanpa varian. Jika menambahkan varian `nama-640.webp` dan `nama-960.webp`, daftarkan lebar gambar asli di `src/data/images.ts` agar `srcset` digunakan. Jika menimpa foto bawaan dengan nama yang sama, ganti juga kedua variannya.

Warna, font, jarak, dan layout berada di `src/styles/global.css`. Palet utama dipusatkan pada token `@theme`, termasuk `primary`, `accent`, `paper`, dan `surface-dark`. Ganti `public/favicon.svg` serta `theme-color` di `BaseLayout.astro` untuk identitas perusahaan final.

## Form kontak dan mode demo

Salin `.env.example` menjadi `.env` untuk pengembangan lokal. Isi `PUBLIC_FORMSPREE_ID` menggunakan ID form milik Anda.

Pengiriman hanya aktif ketika **ID tersedia dan `site.demo = false`**. Selain itu, form dapat diisi untuk preview tetapi tombol pengiriman nonaktif, termasuk jika JavaScript dimatikan. Tidak ada pesan sukses palsu. Form aktif mengirim POST ke Formspree dan mengikuti halaman konfirmasinya.

Mode demo menampilkan penjelasan di footer dan halaman `/tentang-proyek`. Halaman tersebut tidak masuk sitemap. Ketika `demo: false`, halaman tidak dibuat. Mengubah mode demo tidak otomatis mengganti konten fiktif: periksa juga Markdown, nama tim, testimoni, foto, dan kontak.

## Deploy ke Netlify Free

1. Push repository ke GitHub lalu import di Netlify.
2. `netlify.toml` menyediakan build command `npm run build`, publish directory `dist`, dan Node.js 24. Base directory adalah root repository.
3. Isi `PUBLIC_FORMSPREE_ID` di environment Netlify jika form digunakan.
4. Deploy. Canonical, data organisasi, sitemap, dan robots.txt mengikuti `URL` Netlify. Atur `SITE_URL` di environment build untuk override domain.
5. Build/deploy ulang setelah mengganti domain atau environment variable.

Untuk unggah manual folder `dist`, build dengan URL produksi yang benar. Contoh PowerShell:

```powershell
$env:SITE_URL = 'https://nama-situs-anda.netlify.app'
npm run build
```

Build lokal tanpa `SITE_URL` atau `URL` memakai `http://localhost:4321`. `SITE_URL` dibaca dari environment proses build, bukan otomatis dari `.env`. Paket Free memiliki batas pemakaian; lihat dashboard dan [harga Netlify](https://www.netlify.com/pricing/). Formspree memiliki kuota tersendiri.

## Catatan verifikasi

Jalankan `npm run check` dan `npm run build` setelah mengubah konfigurasi atau konten. Periksa juga menu mobile, form, dan gambar sebelum publikasi.

Pada sesi implementasi Windows, pembatasan filesystem sandbox menyebabkan error `picomatch: require is not defined`. Pemeriksaan dan build berhasil ketika dijalankan dengan akses filesystem normal; tidak diperlukan penggantian versi dependensi.
