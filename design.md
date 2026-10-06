# Rencana Desain Template Company Profile General

Status: implementasi awal selesai dan sudah diverifikasi secara lokal; belum dipublikasikan.
Tanggal: 6 Oktober 2026.
Referensi: gambar website bertema running yang dilampirkan dalam percakapan.

## 1. Tujuan dan arah desain

Membuat template company profile lintas industri yang kuat secara visual, profesional, dan mudah digunakan ulang. Pengunjung harus segera memahami identitas perusahaan, bidang usaha, kegiatan, dan cara menghubunginya. Template dapat digunakan untuk perusahaan perdagangan, manufaktur, distribusi, konstruksi, maupun jasa tanpa menyusun ulang seluruh halaman.

Konsep yang diusulkan: **“Bersama, Membangun Kemajuan.”** Tampilan bergaya editorial: judul besar, foto aktivitas nyata, komposisi asimetris, ruang kosong yang lega, serta pergantian latar putih hangat dan arang gelap.

Nusantara Group hanya menjadi identitas contoh dengan bahasa utama Indonesia. Konten dasar membahas kualitas, integritas, kolaborasi, dan komitmen perusahaan tanpa menetapkan industri tertentu. Tema jasa pembuatan website, aplikasi, branding, konsultasi bisnis, dan pelatihan SDM dalam konten lama akan diganti dengan contoh yang netral.

Prinsip penggunaan ulang: **ganti identitas, isi bidang usaha, foto, dan data faktual; pertahankan struktur halaman serta sebagian besar teks pengantar.** Template tetap menyediakan ruang untuk satu kalimat spesifik tentang usaha perusahaan agar versi final jelas bagi pengunjung.

### Contoh teks dasar yang dapat digunakan ulang

| Area         | Teks bawaan                                                                                                            |
| ------------ | ---------------------------------------------------------------------------------------------------------------------- |
| Hero         | Bersama, membangun kemajuan.                                                                                           |
| Pengantar    | Kami tumbuh bersama pelanggan dan mitra melalui komitmen pada kualitas, integritas, dan kerja sama yang berkelanjutan. |
| Profil       | Mengenal perusahaan kami.                                                                                              |
| Bidang usaha | Apa yang kami kerjakan.                                                                                                |
| Kegiatan     | Di balik setiap langkah.                                                                                               |
| Nilai        | Kualitas dalam setiap langkah.                                                                                         |
| Kontak       | Mari terhubung.                                                                                                        |

Contoh kalimat yang perlu diisi saat digunakan: “Kami bergerak di bidang [bidang usaha], melayani [pelanggan/wilayah] melalui [produk atau layanan utama].” Placeholder ini merupakan panduan pengisian, bukan teks yang ditampilkan dalam publikasi final.

## 2. Cara mengadaptasi referensi

| Unsur referensi                              | Adaptasi untuk Nusantara Group                                                                   |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Foto lebar dan judul sangat besar di pembuka | Foto kegiatan kolaborasi atau proyek, disandingkan dengan headline bisnis dalam panel tersendiri |
| Teks ringkas dengan banyak ruang kosong      | Profil singkat yang menjelaskan manfaat dan cara kerja perusahaan                                |
| Deretan foto aktivitas                       | Galeri kegiatan atau karya terpilih dengan judul, kategori, dan tautan detail                    |
| Pergantian bagian terang dan hitam           | Latar terang untuk cerita perusahaan, latar gelap untuk bidang usaha                             |
| Foto dan teks dengan ukuran tidak seimbang   | Cerita komitmen perusahaan dengan foto dominan dan teks singkat                                  |
| Tipografi merek besar di bagian bawah        | Wordmark teks Nusantara yang disesuaikan dengan lebar layar                                      |

Komposisi, urutan konten, proporsi, palet, dan bahasa visual dibuat sendiri. Logo C+F, simbol petir, foto pelari, nama produk, teks, serta ornamen khusus dari referensi tidak digunakan. Galeri tidak memiliki susunan atau interaksi yang disalin persis.

## 3. Sistem visual

### Warna

| Peran                    | Warna usulan           | Penggunaan                                          |
| ------------------------ | ---------------------- | --------------------------------------------------- |
| Latar utama              | `#FAF9F6` putih hangat | Halaman dan bagian editorial                        |
| Teks utama / latar gelap | `#191C1A` arang        | Judul, tombol utama, bagian bidang usaha            |
| Identitas utama          | `#244C40` hijau hutan  | Tautan, penanda aktif, aksen merek                  |
| Aksen pendukung          | `#D8E4C4` hijau pucat  | Label, detail grafis, panel kecil dengan teks gelap |
| Latar alternatif         | `#EEECE5` batu hangat  | Testimoni dan bagian pendukung                      |
| Teks sekunder            | `#62665F` abu-abu      | Deskripsi dan metadata di latar terang              |

Warna putih hangat dan arang mendominasi. Hijau dipakai secukupnya agar foto dan isi tetap menjadi perhatian utama. Seluruh pasangan warna teks akan diperiksa kontrasnya ketika implementasi.

### Tipografi dan tata letak

- Mempertahankan Plus Jakarta Sans untuk judul dan Inter untuk isi, yang sudah tersedia dalam proyek.
- Headline desktop sekitar 80–112 px; mobile sekitar 44–56 px, menyesuaikan panjang kata dengan `clamp()`.
- Judul bagian sekitar 40–64 px pada desktop dan 30–40 px pada mobile.
- Isi minimal 16 px dengan jarak baris sekitar 1,6; paragraf dibatasi sekitar 55–65 karakter per baris.
- Lebar konten maksimum sekitar 1280 px. Foto tertentu dapat melebar hingga tepi bagian.
- Grid 12 kolom pada desktop; jarak antarseksi sekitar 88–120 px. Mobile memakai satu kolom dan jarak 48–64 px.
- Bingkai foto cenderung siku atau radius kecil 4–8 px. Tombol boleh berbentuk pil; bayangan dipakai sangat sedikit.
- Identitas awal berupa wordmark tipografi, bukan proyek pembuatan logo baru.

## 4. Susunan beranda yang akan dibuat

### 01 — Header

Wordmark nama perusahaan di kiri, menu Tentang, Bidang Usaha, dan Kegiatan, serta tombol **Hubungi kami** menuju `/kontak`. Nama merek dan label menu bersumber dari konfigurasi. Header berlatar terang agar mudah dibaca dan tetap terlihat saat scroll. Di mobile, menu dibuka lewat tombol yang dapat digunakan dengan keyboard.

### 02 — Hero: pernyataan utama

Komposisi dua bidang: headline besar di kiri dan foto dominan di kanan, dengan panel hijau kecil untuk pengantar perusahaan. Foto mengikuti kegiatan perusahaan pengguna template, misalnya lingkungan kerja, fasilitas, produk, atau aktivitas tim.

Contoh isi, masih dapat direvisi:

> Bersama, membangun kemajuan.
>
> Kami tumbuh bersama pelanggan dan mitra melalui komitmen pada kualitas, integritas, dan kerja sama yang berkelanjutan.

Tombol utama **Hubungi kami** menuju `/kontak`; tautan pendamping **Kenali perusahaan** menuju `/tentang`. Di mobile, headline dan tombol tampil lebih dahulu, dilanjutkan foto; teks utama tidak ditumpuk di atas foto.

### 03 — Profil singkat dan angka perusahaan

Judul pendek **Mengenal perusahaan kami.** di satu sisi, penjelasan perusahaan di sisi lain. Penjelasan mencakup satu kalimat bidang usaha yang mudah diganti. Tautan **Tentang kami** mengarah ke `/tentang`.

Angka perusahaan bersifat opsional dan nonaktif secara default. Jika diaktifkan, angka ditampilkan sebagai satu baris sederhana dari `site.stats`. Angka demo lama tidak dianggap sebagai fakta perusahaan pengguna. Jika tidak ada data terverifikasi, bagian ini tidak tampil dan tidak menyisakan ruang kosong.

### 04 — Bidang usaha pada latar gelap

Bagian arang gelap dengan judul **Apa yang kami kerjakan.**, pengantar singkat di kiri, dan daftar bidang usaha bernomor di kanan. Setiap baris menampilkan judul, ringkasan satu kalimat, dan tautan detail. Informasi penting selalu terlihat, termasuk pada perangkat sentuh.

Contoh bawaan: **Produk & Layanan**, **Operasional**, dan **Kemitraan**, dengan deskripsi umum tentang penawaran perusahaan, konsistensi proses, dan kerja sama. Ketiganya merupakan contoh isi, bukan kategori wajib. Saat dipakai, pemilik cukup mengganti judul, ringkasan, dan poin utama sesuai bidang perusahaan. Layout mendukung satu atau beberapa item tanpa harus mengisi enam layanan.

Label bagian bisa diganti menjadi Produk, Layanan, atau Bidang Usaha melalui konfigurasi yang sama dengan label navigasi dan judul halaman. Di mobile, pengantar berada di atas daftar.

### 05 — Kegiatan dan karya pilihan (opsional)

Judul **Di balik setiap langkah.** dengan tautan **Semua kegiatan**. Contoh isi berupa aktivitas operasional, kerja sama mitra, dan kegiatan tim. Bagian ini juga dapat dipakai untuk proyek, fasilitas, atau portofolio dengan mengganti label serta data, tanpa mengubah layout.

Tampilkan maksimal tiga item dengan satu gambar utama lebih besar dan dua item pendamping. Pemilihan mengikuti penanda `featured` dan urutan konten. Layout menyesuaikan jika hanya ada satu atau dua item; koleksi kosong membuat bagian dan tautannya disembunyikan. Mobile memakai daftar vertikal tanpa carousel.

### 06 — Komitmen perusahaan

Foto lanskap lebar disandingkan dengan judul **Kualitas dalam setiap langkah.** dan tiga nilai dasar: Integritas, Kualitas, serta Kolaborasi. Teks menjelaskan komitmen perusahaan secara singkat tanpa menjanjikan hasil, sertifikasi, atau proses teknis yang belum dikonfirmasi. Tautan **Kenali nilai kami** menuju `/tentang`. Bagian ini dapat digunakan lintas industri tanpa menulis studi kasus khusus.

### 07 — Cerita mitra (opsional)

Nonaktif secara default. Jika ada materi terverifikasi, gunakan latar batu hangat dengan satu kutipan utama dan hingga dua kutipan pendamping. Nama, peran, serta perusahaan diambil dari koleksi testimoni. Kutipan tampil langsung tanpa slider otomatis, dengan layout yang mengikuti jumlah isi.

Untuk versi demo, status konten fiktif harus mudah ditemukan. Untuk publikasi sebagai perusahaan nyata, testimoni diganti dengan materi yang sudah dikonfirmasi. Foto orang tidak dipasang sebagai identitas pemberi testimoni tanpa aset yang sesuai.

### 08 — Ajakan kerja sama dan footer

Headline **Mari terhubung.** dipasangkan dengan tombol **Hubungi kami** menuju `/kontak`. Footer memuat navigasi dan kanal kontak yang diisi dalam konfigurasi. WhatsApp, alamat, dan email yang kosong tidak menghasilkan tautan atau baris kosong. Tautan Tentang Template hanya tampil saat mode demo aktif.

Wordmark nama singkat perusahaan tampil besar sebagai penutup visual dan mengikuti konfigurasi merek. Pada layar kecil ukurannya menyesuaikan ruang, tanpa terpotong atau membuat halaman bergeser horizontal. Tidak menambahkan tautan media sosial, kebijakan, atau alamat yang belum tersedia.

Alur beranda: **kenali perusahaan → pahami bidang usaha → lihat kegiatan → kenali komitmen → hubungi perusahaan**. Bagian opsional dapat disembunyikan tanpa mengganggu alur utama.

## 5. Halaman lain dalam cakupan

| Halaman              | Rencana tampilan                                                                                               |
| -------------------- | -------------------------------------------------------------------------------------------------------------- |
| `/tentang`           | Judul besar, foto perusahaan, cerita singkat, visi-misi, nilai, dan tim opsional                               |
| `/layanan`           | Label publik default Bidang Usaha; daftar produk, layanan, atau bidang usaha sesuai data                       |
| `/layanan/[slug]`    | Judul item, ringkasan, isi detail, poin utama opsional, dan tombol Hubungi kami                                |
| `/portofolio`        | Label publik default Kegiatan; galeri aktivitas atau karya dengan judul dan kategori                           |
| `/portofolio/[slug]` | Sampul dan cerita kegiatan; metadata mitra, tahun, dan kategori tampil hanya jika diisi                        |
| `/kontak`            | Pengantar ramah, email/WhatsApp, dan form yang rapi dengan label serta status pengiriman jelas                 |
| `/tentang-proyek`    | Label Tentang Template; menjelaskan template lintas industri dan konten contoh, tersedia hanya dalam mode demo |
| Halaman 404          | Pesan singkat dengan tautan kembali ke beranda, menggunakan sistem visual yang sama                            |

Header, footer, tombol, warna, dan tipografi konsisten di seluruh halaman. Path dasar `/layanan` dan `/portofolio` dipertahankan agar perubahan label tidak memerlukan perubahan struktur routing. Slug detail mengikuti nama file konten yang baru; contoh detail khusus industri lama akan diganti saat implementasi. Penggantian path dasar khusus industri berada di luar penyesuaian konten rutin.

## 6. Foto dan materi yang dibutuhkan

| Aset                    | Arahan                                                                                                          |
| ----------------------- | --------------------------------------------------------------------------------------------------------------- |
| 1 foto hero             | Lingkungan kerja atau aktivitas perusahaan, dengan subjek yang tetap jelas saat dipotong di mobile              |
| Hingga 3 foto kegiatan  | Opsional; mengikuti jumlah kegiatan yang ditampilkan                                                            |
| 1 foto komitmen         | Aktivitas atau fasilitas perusahaan; boleh menggunakan ulang aset dengan potongan berbeda                       |
| Foto perusahaan/tim     | Dipakai jika tersedia; profil tim tetap dapat tampil sebagai teks                                               |
| Identitas dan isi final | Nama merek, kontak aktif, ringkasan usaha, dan isi bidang usaha; statistik serta testimoni hanya jika digunakan |

Nuansa foto: natural, warna hangat netral, aktivitas manusia, dan pencahayaan yang konsisten. Prioritas menggunakan aset milik perusahaan. Jika memakai stok berlisensi atau gambar ilustratif, sumber dicatat dan penggunaannya tidak dinyatakan sebagai dokumentasi proyek nyata. Tahap penulisan dokumen ini belum mencakup pengunduhan atau pembuatan gambar.

## 7. Interaksi, responsivitas, dan aksesibilitas

- Hover berupa perubahan warna, garis bawah, atau pergeseran panah kecil. Tidak ada efek kursor khusus, parallax, video otomatis, atau scroll yang mengambil alih kontrol pengguna.
- Animasi masuk opsional cukup berupa perubahan opacity dan pergeseran ringan; isi tetap terlihat tanpa JavaScript dan mengikuti `prefers-reduced-motion`.
- Tombol dan tautan utama memiliki area sentuh minimal 44 × 44 px serta indikator fokus yang jelas.
- Struktur heading berurutan, satu H1 per halaman, teks alternatif gambar, label form, dan skip link dipertahankan.
- Target kontras teks mengikuti WCAG AA: 4,5:1 untuk teks biasa dan 3:1 untuk teks besar.
- Layout diperiksa pada lebar 360, 390, 768, 1024, dan 1440 px serta pembesaran teks. Tidak ada informasi yang hanya tersedia saat hover.
- Foto memakai ukuran responsif, dimensi eksplisit untuk mengurangi pergeseran layout, dan lazy loading untuk gambar di bawah area awal.

## 8. Rencana perubahan teknis setelah review

- Melanjutkan Astro, Tailwind CSS, TypeScript, dan output statis untuk Netlify Free.
- Memperbarui token desain di `src/styles/global.css`, layout, header, footer, tombol, dan komponen judul.
- Menyusun ulang `src/pages/index.astro` dan komponen bagiannya mengikuti alur beranda di atas.
- Menyesuaikan halaman pendukung dan halaman detail dengan sistem visual yang sama.
- Menjadikan `src/data/site.ts` sumber tunggal identitas, teks pengantar, label bagian/menu/halaman, CTA, dan pengaturan bagian opsional. Tidak menulis nama perusahaan atau bidang usaha langsung di komponen dan metadata SEO.
- Mempertahankan Markdown untuk isi detail bidang usaha, kegiatan, tim, dan testimoni. Koleksi internal `services` dan `projects` tetap dapat digunakan; label yang dilihat pengunjung mengikuti konfigurasi.
- Mengganti contoh jasa website, aplikasi, branding, konsultasi, pelatihan, serta proyek yang terlalu khusus dengan contoh perusahaan umum. Kutipan contoh tidak menyebut merek perusahaan langsung agar penggantian nama tidak menyisakan identitas lama.
- Menyesuaikan schema: metadata klien/mitra, tahun, kategori, serta poin fitur dapat dikosongkan. Menambahkan gambar dan alt text; gambar yang diisi wajib memiliki alt yang sesuai. Komponen tidak merender metadata kosong atau pemisah yang menggantung.
- Bagian statistik, tim, dan testimoni nonaktif secara default; kegiatan dapat dinonaktifkan. Navigasi, tautan, halaman daftar/detail, dan sitemap harus mengikuti ketersediaan konten serta pengaturan aktif agar tidak ada tautan menuju halaman yang tidak dibuat.
- Memisahkan mode demo dari konfigurasi produksi: penjelasan contoh dan halaman Tentang Template hanya tersedia saat mode demo aktif. Mengubah mode tidak otomatis memverifikasi isi; data faktual tetap perlu diganti oleh pemilik.
- Mempertahankan integrasi Formspree. Pengiriman aktif membutuhkan `PUBLIC_FORMSPREE_ID`; mode demo menampilkan status yang jujur ketika belum dikonfigurasi.
- Menjaga canonical, sitemap, dan robots.txt yang mengikuti domain hosting.
- Membatasi JavaScript pada interaksi yang dibutuhkan; tidak menambahkan database, CMS, atau library animasi besar.

Sebelum implementasi desain diverifikasi, jalankan ulang pemeriksaan kondisi proyek. Error build `picomatch` yang ditemukan pada pemeriksaan sebelumnya perlu ditangani jika masih terjadi. Pemeriksaan file saat revisi dokumen ini menunjukkan impor pada konfigurasi konten sudah tidak mengandung kesalahan `qimport`.

### Peta pengaturan konten yang akan disiapkan

| Lokasi                                                      | Isi yang diubah saat menggunakan template                                                                                                     |
| ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/data/site.ts`                                          | Identitas, nama singkat/logo, kontak, profil, visi-misi, headline, label menu/bagian, CTA, foto utama, mode demo, dan pengaturan bagian aktif |
| `src/content/services/*.md`                                 | Judul, ringkasan, dan detail produk/layanan/bidang usaha; satu file per item                                                                  |
| `src/content/projects/*.md`                                 | Kegiatan, karya, atau proyek opsional; satu file per item                                                                                     |
| `src/content/team/*.md` dan `src/content/testimonials/*.md` | Data opsional jika bagian diaktifkan                                                                                                          |
| `src/styles/global.css`                                     | Warna merek dan font bila perlu; layout dasar tetap digunakan                                                                                 |

Nama field final ditentukan saat implementasi. README akan menjelaskan field wajib, contoh pengisian, cara menonaktifkan bagian, dan lokasi foto sehingga pengguna tidak perlu menelusuri komponen Astro.

### Contoh adaptasi tanpa menyusun ulang halaman

| Pengguna template      | Label bidang usaha  | Label kegiatan       | Isi khusus yang diganti                            |
| ---------------------- | ------------------- | -------------------- | -------------------------------------------------- |
| Manufaktur             | Produk              | Fasilitas & Kegiatan | Jenis produk, ringkasan produksi, foto fasilitas   |
| Perdagangan/distribusi | Produk & Distribusi | Kegiatan             | Kategori produk, wilayah layanan, foto operasional |
| Konstruksi             | Bidang Usaha        | Proyek               | Lingkup pekerjaan, proyek, foto lapangan           |
| Perusahaan jasa        | Layanan             | Portofolio           | Jenis layanan, contoh pekerjaan, foto aktivitas    |

Teks umum tentang profil, nilai, kerja sama, dan kontak dapat tetap digunakan. Nama, kontak, bidang usaha utama, serta foto harus disesuaikan; template tidak akan mengklaim bahwa semua perusahaan memiliki kegiatan, hasil, atau sertifikasi yang sama.

## 9. Tahapan pengerjaan setelah desain disepakati

1. Finalisasi arah visual template general, teks netral, dan konfigurasi konten wajib/opsional.
2. Susun token visual serta komponen dasar, lalu implementasikan beranda untuk desktop dan mobile.
3. Terapkan gaya ke halaman pendukung, isi konten, serta integrasikan gambar.
4. Verifikasi navigasi, form, aksesibilitas, ukuran layar, `npm run check`, dan `npm run build`. Uji juga kondisi koleksi kosong, bagian dinonaktifkan, nama perusahaan panjang, dan penggantian label.
5. Tinjau hasil visual dan performa, kemudian siapkan hasil untuk deploy Netlify. Skor performa hanya dilaporkan setelah diukur.

Implementasi tampilan telah diotorisasi dan dikerjakan berdasarkan dokumen ini. Website menggunakan foto ilustratif lokal serta konten demo umum. Publikasi belum dilakukan; panduan penggunaan ulang dan deploy ada di `README.md`.

## 10. Daftar review

- [x] Arah template company profile general, bukan promosi jasa pembuatan website, mengikuti permintaan pengguna.
- [ ] Nusantara Group sebagai identitas demo dan teks netral sudah sesuai.
- [ ] Arah editorial dengan foto dominan dan tipografi besar sesuai keinginan.
- [ ] Palet putih hangat, arang, dan hijau hutan disetujui atau diberi alternatif.
- [ ] Komposisi hero dua bidang dan contoh headline sesuai karakter perusahaan.
- [ ] Urutan serta jumlah bagian beranda sudah sesuai.
- [ ] Cakupan halaman pendukung sesuai kebutuhan.
- [ ] Pemusatan identitas, teks pengantar, dan label di satu konfigurasi sesuai kebutuhan penggunaan ulang.
- [ ] Statistik, tim, dan testimoni nonaktif secara default; kegiatan dapat disembunyikan.
- [ ] Foto dan data contoh ditandai sebagai materi demo; data perusahaan final diisi saat template digunakan.

Catatan review dapat merujuk nomor bagian, misalnya: “Bagian 3: tetap gunakan biru sebagai warna merek” atau “Bagian 4: gunakan label Produk & Layanan untuk bidang usaha.”
