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
  { id: "home", label: "Beranda", href: "#hero" },
  { id: "profile", label: "Profil", href: "#profile" },
  { id: "skills", label: "Keahlian", href: "#skills" },
  { id: "projects", label: "Proyek", href: "#projects" },
  { id: "experience", label: "Pengalaman", href: "#experience" },
  { id: "education", label: "Pendidikan", href: "#education" },
  { id: "certifications", label: "Sertifikasi", href: "#certifications" },
  { id: "achievements", label: "Pencapaian", href: "#achievements" },
  { id: "contact", label: "Kontak", href: "#contact" },
];

export const profileStats = [
  { id: "name", label: "Nama", value: "Harry Septoni Armando Nadapdap" },
  { id: "degree", label: "Gelar", value: "Lulusan Sistem Informasi" },
  { id: "university", label: "Universitas", value: "Universitas Tangerang Raya" },
  { id: "gpa", label: "IPK", value: "3.98 / 4.00" },
  { id: "focus", label: "Fokus", value: "Pengembangan Web & Mobile" },
  { id: "location", label: "Lokasi", value: "Tangerang, Indonesia" },
];

export const skillGroups = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Code2,
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Next.js", "React.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    id: "backend-mobile",
    title: "Backend & Mobile",
    icon: ServerCog,
    skills: ["PHP", "Laravel", "Python", "Dart", "Flutter", "REST API"],
  },
  {
    id: "database",
    title: "Database",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "Desain Database"],
  },
  {
    id: "analytical",
    title: "Kemampuan Analitis",
    icon: BrainCircuit,
    skills: ["Analisis Sistem", "Pengujian Software", "Optimasi Workflow", "Dokumentasi"],
  },
  {
    id: "ui-ux",
    title: "UI/UX & Tools",
    icon: Figma,
    skills: ["Figma", "Visual Studio Code", "Desain UI/UX", "Microsoft Office"],
  },
  {
    id: "deployment",
    title: "Deployment & Version Control",
    icon: Rocket,
    skills: ["Git", "GitHub", "Version Control", "Deployment Aplikasi"],
  },
];

export const projects = [
  {
    id: "project-1",
    title: "Aplikasi Arsip Digital dengan Chatbot AI",
    label: "PROJECT_01 // UNGGULAN",
    description:
      "Aplikasi arsip surat berbasis web yang dilengkapi dengan fitur AI Chatbot untuk pencarian informasi. Dibangun dengan Next.js 16, otentikasi aman, dan manajemen lampiran terintegrasi Cloudinary.",
    stack: ["Next.js 16", "TypeScript", "PostgreSQL", "Gemini AI", "Cloudinary"],
    accent: "matrix",
    github: "https://github.com/Hadevs27/AplikasiArsipDigitalBerbasisWebDenganFiturChatbot",
    demo: "https://aplikasi-arsip-digital-berbasis-web-tau.vercel.app/",
    isFeatured: true,
    caseStudy: {
      problem: "Proses pengarsipan sebelumnya dilakukan secara manual, rentan terhadap kehilangan dokumen, dan membuat pencarian informasi menjadi lambat. Pegawai membutuhkan sistem untuk menyimpan, mengelola, dan melakukan kueri data arsip secara instan tanpa harus membaca ratusan file secara manual.",
      role: ["Analisis Sistem & Desain DB", "Full-stack Development Next.js", "Integrasi AI (Gemini)", "Pengaturan Autentikasi & Penyimpanan Cloud"],
      features: ["Autentikasi Berbasis Peran yang Aman", "Manajemen Surat Masuk & Keluar", "Chatbot AI untuk Pencarian Kontekstual Dokumen", "Unggahan Lampiran Cloudinary", "Gateway WhatsApp Otomatis via Fonnte"],
      architecture: [
        { label: "USER", icon: "user" },
        { label: "NEXT.JS UI", icon: "frontend" },
        { label: "BETTER AUTH", icon: "auth" },
        { label: "DRIZZLE ORM", icon: "db" },
        { label: "NEON POSTGRES", icon: "db" },
        { label: "GEMINI AI", icon: "ai" }
      ]
    }
  },
  {
    id: "project-2",
    title: "E-Commerce Material Bangunan Prefab",
    label: "E-Commerce",
    description:
      "Platform e-commerce terintegrasi untuk menyederhanakan pembelian material bangunan prefabrikasi. Mendukung katalog produk dinamis dan transaksi online.",
    stack: ["Laravel", "PHP", "MySQL", "Bootstrap", "Midtrans"],
    accent: "cyanex",
    github: "https://github.com/Hadevs27/Aplikasi-E-Commerce-Material-Bangunan-Prefabrikasi",
  },
  {
    id: "project-3",
    title: "Sistem Informasi Produksi & Penjualan Pertanian",
    label: "Sistem Manajemen",
    description:
      "Ekosistem digital untuk rantai pasok pertanian, memetakan data produksi panen hingga pelacakan penjualan dalam satu dashboard operasional.",
    stack: ["Laravel", "PHP", "MySQL", "Bootstrap", "Chart.js"],
    accent: "violetx",
    github: "https://github.com/Hadevs27/sistem-informasi-produksi-dan-penjualan-pertanian",
  },
];

export const experienceLogs = [
  {
    id: "edu-1",
    icon: GraduationCap,
    type: "Education",
    title: "Sarjana Sistem Informasi",
    org: "Universitas Tangerang Raya",
    date: "2022 - 2026",
  },
  {
    id: "work-1",
    icon: BriefcaseBusiness,
    type: "Work Experience",
    title: "Freelance Web & Mobile Developer",
    org: "Pekerja Lepas, Tangerang",
    date: "Maret 2025 - Sekarang",
    link: "https://github.com/Hadevs27",
  },
  {
    id: "work-2",
    icon: Terminal,
    type: "Internship",
    title: "Magang Sistem Informasi",
    org: "Dinas Tenaga Kerja Kab. Tangerang",
    date: "Mei 2025 - Agustus 2025",
  },
  {
    id: "work-3",
    icon: Terminal,
    type: "Work Experience",
    title: "Asisten Laboratorium Komputer",
    org: "Universitas Tangerang Raya",
    date: "Mei 2024 - November 2024",
  },
  {
    id: "org-1",
    icon: Layers3,
    type: "Organization",
    title: "Ketua Departemen, Lembaga Pemberdayaan Mahasiswa",
    org: "Himpunan Mahasiswa Teknologi Informasi",
    date: "Mei 2024 - April 2025",
  },
  {
    id: "org-2",
    icon: Layers3,
    type: "Organization",
    title: "Staf Hubungan Masyarakat (Humas)",
    org: "Himpunan Mahasiswa Teknologi Informasi",
    date: "Juni 2023 - Mei 2024",
  },
  {
    id: "org-3",
    icon: Layers3,
    type: "Organization",
    title: "Koordinator Acara - Diskusi Kasus Dunia IT",
    org: "Universitas Tangerang Raya",
    date: "November 2024",
  },
  {
    id: "ach-1",
    icon: Trophy,
    type: "Achievement",
    title: "Medali Emas",
    org: "Olimpiade Sains Nasional (OSP) 2026",
    date: "2026",
  },
  {
    id: "ach-2",
    icon: Trophy,
    type: "Achievement",
    title: "Medali Perak",
    org: "OSPENAS 2026",
    date: "2026",
  },
  {
    id: "ach-3",
    icon: Trophy,
    type: "Achievement",
    title: "Medali Perak",
    org: "Indonesia Youth Science Competition (IYSC) 2026",
    date: "Mei 2026",
  },
  {
    id: "ach-4",
    icon: ShieldCheck,
    type: "Achievement",
    title: "Peserta CTF",
    org: "Capture The Flag Competition | Telkom University",
    date: "Agustus 2025",
  },
  {
    id: "cert-1",
    icon: Sparkles,
    type: "Certification",
    title: "Junior Web Programmer (JWP)",
    org: "LSP Media Informatika - TUK HAS",
    date: "Juni 2026",
  },
  {
    id: "cert-2",
    icon: Sparkles,
    type: "Certification",
    title: "The Complete Python Developer",
    org: "Udemy",
    date: "Juni 2024",
  },
];

export const quickReplies = {
  Projects:
    "Harry telah membangun Sistem Penjadwalan Rapat, platform E-Commerce untuk material prefab, dan Sistem Informasi Pertanian.",
  Skills:
    "Tech stack utama: Next.js, React.js, Tailwind CSS, PHP, Laravel, Flutter, PostgreSQL, Python, Git, dan pembuatan REST API.",
  Experience:
    "Harry bekerja sebagai Freelance Web Developer, sebelumnya sebagai IT Intern di Disnaker Kab. Tangerang, dan Asisten Lab Komputer. Harry juga memiliki riwayat kuat di olimpiade sains.",
  Contact:
    "Hubungi Harry melalui email, LinkedIn, GitHub, atau unduh CV di bagian bawah halaman.",
  GPA: "IPK Harry adalah 3.98 / 4.00 di Universitas Tangerang Raya.",
};

export const commandLines = [
  "> init profil_developer",
  "> muat data --format=profesional",
  "> fetch proyek --terbaru",
  "> open contact_channels",
];

export const heroBadges = [
  { icon: Code2, label: "Pengembangan Web" },
  { icon: Layers3, label: "Full-Stack Development" },
  { icon: Database, label: "Database & API" },
  { icon: Github, label: "Git & GitHub" },
];
