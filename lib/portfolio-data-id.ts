import {
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  Figma,
  Github,
  Globe2,
  GraduationCap,
  Layers3,
  Rocket,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Terminal,
  Trophy,
} from "lucide-react";

export const navItems = [
  { label: "Beranda", href: "#hero" },
  { label: "Profil", href: "#profile" },
  { label: "Keahlian", href: "#skills" },
  { label: "Proyek", href: "#projects" },
  { label: "Pengalaman", href: "#experience" },
  { label: "Pendidikan", href: "#education" },
  { label: "Sertifikasi", href: "#certifications" },
  { label: "Pencapaian", href: "#achievements" },
  { label: "Kontak", href: "#contact" },
];

export const profileStats = [
  { label: "Nama", value: "Harry Septoni Armando Nadapdap" },
  { label: "Gelar", value: "Lulusan Sistem Informasi" },
  { label: "Universitas", value: "Universitas Tangerang Raya" },
  { label: "IPK", value: "3.99 / 4.00" },
  { label: "Fokus", value: "Pengembangan Web & Mobile" },
  { label: "Lokasi", value: "Tangerang, Indonesia" },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Next.js", "React.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend & Mobile",
    icon: ServerCog,
    skills: ["PHP", "Laravel", "Python", "Dart", "Flutter", "REST API"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "Desain Database"],
  },
  {
    title: "Kemampuan Analitis",
    icon: BrainCircuit,
    skills: ["Analisis Sistem", "Pengujian Software", "Optimasi Workflow", "Dokumentasi"],
  },
  {
    title: "UI/UX & Tools",
    icon: Figma,
    skills: ["Figma", "Visual Studio Code", "Desain UI/UX", "Microsoft Office"],
  },
  {
    title: "Deployment & Version Control",
    icon: Rocket,
    skills: ["Git", "GitHub", "Version Control", "Deployment Aplikasi"],
  },
];

export const projects = [
  {
    title: "Sistem Informasi Penjadwalan Rapat",
    label: "BAPENDA Kab. Tangerang",
    description:
      "Sistem manajemen agenda dan penjadwalan rapat berbasis web dengan autentikasi berbasis peran, fitur manajemen rapat, dan integrasi notifikasi pengingat via Telegram.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Bot Telegram"],
    accent: "matrix",
    github: "https://github.com/Hadevs27/Sistem-Informasi-Penjadwalan-Agenda-Rapat-berbasis-Web-pada-BAPENDA-",
  },
  {
    title: "E-Commerce Material Bangunan Prefab",
    label: "E-Commerce",
    description:
      "Platform e-commerce untuk material bangunan prefabrikasi dengan fitur manajemen produk, keranjang belanja, checkout, dasbor admin yang responsif, dan alur database relasional.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    accent: "cyanex",
    github: "https://github.com/Hadevs27/aplikasi-ecommerce-bangunanprefab",
  },
  {
    title: "Sistem Informasi Produksi & Penjualan Pertanian",
    label: "Sistem Manajemen",
    description:
      "Sistem manajemen produksi dan penjualan berbasis web. Mencakup manajemen produk, transaksi penjualan, modul pelaporan, dan dasbor operasional yang responsif.",
    stack: ["Laravel", "PHP", "MySQL"],
    accent: "violetx",
    github: "https://github.com/Hadevs27/Sistem-Informasi-Produksi-dan-Penjualan-Hasil-Pertanian",
  },
];

export const experienceLogs = [
  {
    icon: GraduationCap,
    type: "Education",
    title: "Sarjana Sistem Informasi",
    org: "Universitas Tangerang Raya",
    date: "2022 - 2026",
    details:
      "Lulus dengan IPK 3.99 / 4.00. Fokus pada pengembangan perangkat lunak, analisis sistem, dan manajemen database.",
  },
  {
    icon: Code2,
    type: "Work Experience",
    title: "Freelance Web & Mobile Developer",
    org: "Pekerja Lepas, Tangerang",
    date: "Maret 2025 - Sekarang",
    details:
      "Mengembangkan aplikasi web dan seluler. Menangani analisis kebutuhan, desain database, autentikasi, integrasi API, dan deployment menggunakan Laravel, Next.js, dan PostgreSQL.",
  },
  {
    icon: BriefcaseBusiness,
    type: "Internship",
    title: "Magang Sistem Informasi",
    org: "Dinas Tenaga Kerja Kab. Tangerang",
    date: "Mei 2025 - Agustus 2025",
    details:
      "Mengembangkan sistem manajemen arsip dan absensi karyawan berbasis web menggunakan Laravel dan MySQL. Mendigitalisasi alur kerja arsip untuk membuat pencarian dokumen menjadi lebih cepat dan terorganisir.",
  },
  {
    icon: Terminal,
    type: "Work Experience",
    title: "Asisten Laboratorium Komputer",
    org: "Universitas Tangerang Raya",
    date: "Mei 2024 - November 2024",
    details:
      "Mendukung mahasiswa dan dosen terkait masalah perangkat keras dan lunak. Meningkatkan keandalan sistem melalui pemeriksaan peralatan secara proaktif dan memberikan sesi pelatihan singkat.",
  },
  {
    icon: Layers3,
    type: "Organization",
    title: "Ketua Departemen, Lembaga Pemberdayaan Mahasiswa",
    org: "Himpunan Mahasiswa Teknologi Informasi",
    date: "Mei 2024 - April 2025",
    details:
      "Memimpin perencanaan diskusi IT, koordinasi tim, undangan pembicara, dan eksekusi acara untuk diskusi studi kasus teknologi dunia nyata.",
  },
  {
    icon: Globe2,
    type: "Organization",
    title: "Staf Hubungan Masyarakat (Humas)",
    org: "Himpunan Mahasiswa Teknologi Informasi",
    date: "Juni 2023 - Mei 2024",
    details:
      "Menyelenggarakan workshop dan bootcamp, secara signifikan meningkatkan partisipasi mahasiswa. Mengembangkan sistem evaluasi acara dan meningkatkan keterlibatan melalui promosi digital.",
  },
  {
    icon: Layers3,
    type: "Organization",
    title: "Koordinator Acara - Diskusi Kasus Dunia IT",
    org: "Universitas Tangerang Raya",
    date: "November 2024",
    details:
      "Memimpin panitia yang terdiri dari 25 anggota untuk menyelenggarakan acara diskusi IT tingkat universitas dengan 105 peserta. Mengoordinasikan pembicara, sponsor, dan logistik.",
  },
  {
    icon: Trophy,
    type: "Achievement",
    title: "Medali Emas",
    org: "Olimpiade Sains Nasional (OSP) 2026",
    date: "2026",
    details:
      "Meraih medali emas dalam olimpiade sains nasional, menunjukkan kemampuan pemikiran analitis yang kuat, penalaran logis, dan keahlian pemecahan masalah.",
  },
  {
    icon: Trophy,
    type: "Achievement",
    title: "Medali Perak",
    org: "OSPENAS 2026",
    date: "2026",
    details:
      "Meraih medali perak dalam kompetisi tingkat nasional, mencerminkan kemampuan akademik yang tangguh, konsistensi, dan pencapaian belajar yang kompetitif.",
  },
  {
    icon: Trophy,
    type: "Achievement",
    title: "Medali Perak",
    org: "Indonesia Youth Science Competition (IYSC) 2026",
    date: "Mei 2026",
    details:
      "Mendapatkan medali perak dalam kompetisi sains tingkat internasional, memperlihatkan keahlian analitis dan kemampuan pemecahan masalah yang luar biasa.",
  },
  {
    icon: Trophy,
    type: "Achievement",
    title: "Peserta CTF",
    org: "Capture The Flag Competition | Telkom University",
    date: "Agustus 2025",
    details:
      "Mendapatkan pengalaman praktis dalam tantangan keamanan siber, termasuk kriptografi, eksploitasi web, dan rekayasa balik (reverse engineering).",
  },
  {
    icon: ShieldCheck,
    type: "Certification",
    title: "Junior Web Programmer (JWP)",
    org: "LSP Media Informatika – TUK HAS",
    date: "Juni 2026",
    details:
      "Sertifikat Asesmen Kompetensi (Competency Assessment) untuk Junior Web Programmer.",
    link: "/files/ukom.pdf",
  },
  {
    icon: ShieldCheck,
    type: "Certification",
    title: "The Complete Python Developer",
    org: "Udemy",
    date: "Juni 2024",
    details:
      "Memperkuat dasar-dasar pemrograman Python untuk kebutuhan otomatisasi, pengelolaan data, dan alur penyelesaian masalah.",
  },
];

export const quickReplies = {
  Projects:
    "Harry telah membangun Sistem Penjadwalan Rapat, platform E-Commerce untuk material prefab, dan Sistem Informasi Penjualan Hasil Pertanian.",
  Skills:
    "Teknologi inti: Next.js, React.js, Tailwind CSS, PHP, Laravel, Flutter, PostgreSQL, Python, Git, dan Pengembangan REST API.",
  Experience:
    "Harry bekerja sebagai Freelance Web Developer, sebelumnya sebagai Pekerja Magang IT di Disnaker Kab. Tangerang, dan Asisten Lab Komputer. Ia juga punya rekam jejak juara di olimpiade sains nasional.",
  Contact:
    "Hubungi Harry melalui email, LinkedIn, GitHub, atau unduh CV-nya melalui bagian kontak.",
  GPA: "IPK Harry adalah 3.99 / 4.00 di Universitas Tangerang Raya.",
};

export const commandLines = [
  "> init developer_portfolio",
  "> load profile --format=professional",
  "> fetch projects --latest",
  "> open contact_channels",
];

export const heroBadges = [
  { icon: Code2, label: "Pengembangan Web" },
  { icon: Layers3, label: "Full-Stack Development" },
  { icon: Database, label: "Database & API" },
  { icon: Github, label: "Git & GitHub" },
];
