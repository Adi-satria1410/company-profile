// Identitas dan konten contoh. Mulai penyesuaian template dari file ini.
export const site = {
  name: 'Nusantara Group',
  shortName: 'Nusantara',
  descriptor: 'GROUP',
  logo: '', // Opsional: path logo di public, misalnya /images/logo.svg.
  demo: true,
  tagline: 'Bersama, membangun kemajuan.',
  description:
    'Kami tumbuh bersama pelanggan dan mitra melalui komitmen pada kualitas, integritas, dan kerja sama yang berkelanjutan.',
  email: 'halo@nusantara.example',
  whatsapp: '', // Nomor internasional tanpa +, contoh 628123456789.
  address: 'Jakarta, Indonesia',
  sections: {
    services: true,
    projects: true,
    stats: false,
    team: false,
    testimonials: false,
  },
  labels: {
    home: 'Beranda',
    about: 'Tentang',
    services: 'Bidang Usaha',
    projects: 'Kegiatan',
    contact: 'Kontak',
    contactCta: 'Hubungi kami',
    aboutCta: 'Kenali perusahaan',
    allServices: 'Semua bidang usaha',
    allProjects: 'Semua kegiatan',
    detail: 'Jelajahi',
    features: 'Fokus kami',
    team: 'Orang di balik perjalanan kami',
    testimonials: 'Cerita mitra',
  },
  hero: {
    eyebrow: 'TUMBUH BERSAMA. MELANGKAH MAJU.',
    title: 'Bersama,',
    emphasis: 'membangun kemajuan.',
    note: 'Satu komitmen. Berbagai kemungkinan.',
    image: '/images/workspace.webp',
    alt: 'Area pertemuan dengan meja kayu dan cahaya alami dari jendela besar',
  },
  about: {
    eyebrow: 'SEKILAS TENTANG KAMI',
    title: 'Langkah yang berarti.\nDibangun bersama.',
    intro:
      'Kami percaya bahwa kemajuan dimulai dari hubungan yang baik. Dengan semangat untuk terus berkembang, kami mengutamakan kualitas dalam setiap hal yang kami kerjakan.',
    // Ganti dengan satu kalimat yang menjelaskan bidang usaha perusahaan Anda.
    description:
      'Kami mempertemukan orang, gagasan, dan kesempatan untuk menciptakan nilai bagi pelanggan, mitra, serta lingkungan di sekitar kami.',
    vision:
      'Tumbuh menjadi perusahaan yang dipercaya dan memberi manfaat berkelanjutan bagi pelanggan, mitra, dan masyarakat.',
    mission:
      'Menjaga kualitas, membangun hubungan yang saling menghargai, serta terus memperbaiki cara kami bekerja.',
    image: '/images/collaboration.webp',
    alt: 'Sekelompok rekan kerja berkumpul di meja dengan laptop',
  },
  business: {
    eyebrow: 'BIDANG USAHA',
    title: 'Apa yang\nkami kerjakan.',
    description:
      'Beragam peran, satu tujuan: menghadirkan nilai yang berarti dalam setiap kerja sama.',
  },
  activities: {
    eyebrow: 'CERITA & KEGIATAN',
    title: 'Di balik setiap langkah.',
    description:
      'Sekilas tentang keseharian, ruang, dan hubungan yang membentuk perjalanan kami.',
  },
  commitment: {
    eyebrow: 'KOMITMEN KAMI',
    title: 'Kualitas dalam\nsetiap langkah.',
    description:
      'Bagi kami, cara bekerja sama pentingnya dengan hasil yang dicapai. Inilah nilai yang menjadi dasar setiap keputusan dan tindakan kami.',
    image: '/images/meeting.webp',
    alt: 'Koridor kantor dengan ruang pertemuan berdinding kaca',
  },
  contact: {
    eyebrow: 'MULAI PERCAKAPAN',
    title: 'Mari terhubung.',
    description:
      'Setiap hubungan yang baik dimulai dari sebuah percakapan. Kami siap mendengar cerita dan kebutuhan Anda.',
    note: 'Punya pertanyaan atau ingin mengenal kami lebih dekat?',
    formTitle: 'Tinggalkan pesan',
    formIntro: 'Ceritakan sedikit tentang kebutuhan Anda.',
  },
  footer: {
    note: 'Tumbuh dengan tujuan.\nBergerak bersama.',
    navigation: 'Jelajahi',
    contact: 'Temukan kami',
  },
  stats: [] as { value: string; label: string }[],
  values: [
    {
      title: 'Integritas',
      text: 'Menjaga kepercayaan melalui sikap terbuka, jujur, dan bertanggung jawab.',
    },
    {
      title: 'Kualitas',
      text: 'Memberi perhatian pada detail dan terus memperbaiki setiap proses.',
    },
    {
      title: 'Kolaborasi',
      text: 'Mendengarkan, berbagi gagasan, dan melangkah bersama menuju tujuan.',
    },
  ],
};
