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
  { id: "home", label: "Home", href: "#hero" },
  { id: "profile", label: "About", href: "#profile" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "education", label: "Education", href: "#education" },
  { id: "certifications", label: "Certifications", href: "#certifications" },
  { id: "achievements", label: "Achievements", href: "#achievements" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const profileStats = [
  { id: "name", label: "Name", value: "Harry Septoni Armando Nadapdap" },
  { id: "degree", label: "Degree", value: "Information Systems Graduate" },
  { id: "university", label: "University", value: "Universitas Tangerang Raya" },
  { id: "gpa", label: "GPA", value: "3.98 / 4.00" },
  { id: "focus", label: "Focus", value: "Web & Mobile Development" },
  { id: "location", label: "Location", value: "Tangerang, Indonesia" },
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
    skills: ["MySQL", "PostgreSQL", "Database Design"],
  },
  {
    id: "analytical",
    title: "Analytical Skills",
    icon: BrainCircuit,
    skills: ["System Analysis", "Software Testing", "Workflow Optimization", "Documentation"],
  },
  {
    id: "ui-ux",
    title: "UI/UX & Tools",
    icon: Figma,
    skills: ["Figma", "Visual Studio Code", "UI/UX Design", "Microsoft Office"],
  },
  {
    id: "deployment",
    title: "Deployment & Version Control",
    icon: Rocket,
    skills: ["Git", "GitHub", "Version Control", "Application Deployment"],
  },
];

export const projects = [
  {
    id: "project-1",
    title: "Digital Archive System with Chatbot",
    label: "PROJECT_01 // FEATURED",
    description:
      "Web-based document archive application equipped with an AI chatbot feature. Built with Next.js 16 and Drizzle ORM, featuring secure authentication and cloud-based file attachments via Cloudinary.",
    stack: ["Next.js 16", "TypeScript", "PostgreSQL", "Gemini AI", "Cloudinary"],
    accent: "matrix",
    github: "https://github.com/Hadevs27/AplikasiArsipDigitalBerbasisWebDenganFiturChatbot",
    demo: "https://aplikasi-arsip-digital-berbasis-web-tau.vercel.app/",
    isFeatured: true,
    caseStudy: {
      problem: "The previous archiving process was manual, prone to document loss, and made information retrieval slow. Employees needed a system to securely store, manage, and instantly query archive data without manually reading through hundreds of files.",
      role: ["System Analysis & DB Design", "Full-stack Next.js Development", "AI Integration (Gemini)", "Authentication & Cloud Storage Setup"],
      features: ["Secure Role-based Authentication", "Incoming & Outgoing Mail Management", "AI Chatbot for Document Contextual Queries", "Cloudinary Attachment Uploads", "Automated WhatsApp Gateway via Fonnte"],
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
    title: "E-Commerce Prefab Building Materials",
    label: "E-Commerce",
    description:
      "An integrated web platform to simplify the purchasing of prefabricated building materials. Supports dynamic product catalogs and online transactions.",
    stack: ["Laravel", "PHP", "MySQL", "Bootstrap", "Midtrans"],
    accent: "cyanex",
    github: "https://github.com/Hadevs27/Aplikasi-E-Commerce-Material-Bangunan-Prefabrikasi",
  },
  {
    id: "project-3",
    title: "Agricultural Production & Sales System",
    label: "Management System",
    description:
      "A digital ecosystem for the agricultural supply chain, mapping harvest production data to sales tracking in one dashboard.",
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
    title: "Bachelor of Information Systems",
    org: "Universitas Tangerang Raya",
    date: "2022 - 2026",
  },
  {
    id: "work-1",
    icon: BriefcaseBusiness,
    type: "Work Experience",
    title: "Freelance Web & Mobile Developer",
    org: "Self-Employed, Tangerang",
    date: "March 2025 - Present",
    link: "https://github.com/Hadevs27",
  },
  {
    id: "work-2",
    icon: Terminal,
    type: "Internship",
    title: "Information System Intern",
    org: "Dinas Tenaga Kerja Kab. Tangerang",
    date: "May 2025 - August 2025",
  },
  {
    id: "work-3",
    icon: Terminal,
    type: "Work Experience",
    title: "Computer Lab Assistant",
    org: "Universitas Tangerang Raya",
    date: "May 2024 - November 2024",
  },
  {
    id: "org-1",
    icon: Layers3,
    type: "Organization",
    title: "Chair, Student Empowerment Institution Dept.",
    org: "Himpunan Mahasiswa Teknologi Informasi",
    date: "May 2024 - April 2025",
  },
  {
    id: "org-2",
    icon: Layers3,
    type: "Organization",
    title: "Public Relations Staff",
    org: "Himpunan Mahasiswa Teknologi Informasi",
    date: "June 2023 - May 2024",
  },
  {
    id: "org-3",
    icon: Layers3,
    type: "Organization",
    title: "Event Coordinator - Diskusi Kasus Dunia IT",
    org: "Universitas Tangerang Raya",
    date: "November 2024",
  },
  {
    id: "ach-1",
    icon: Trophy,
    type: "Achievement",
    title: "Gold Medalist",
    org: "Olimpiade Sains Nasional (OSP) 2026",
    date: "2026",
  },
  {
    id: "ach-2",
    icon: Trophy,
    type: "Achievement",
    title: "Silver Medalist",
    org: "OSPENAS 2026",
    date: "2026",
  },
  {
    id: "ach-3",
    icon: Trophy,
    type: "Achievement",
    title: "Silver Medalist",
    org: "Indonesia Youth Science Competition (IYSC) 2026",
    date: "May 2026",
  },
  {
    id: "ach-4",
    icon: ShieldCheck,
    type: "Achievement",
    title: "CTF Participant",
    org: "Capture The Flag Competition | Telkom University",
    date: "August 2025",
  },
  {
    id: "cert-1",
    icon: Sparkles,
    type: "Certification",
    title: "Junior Web Programmer (JWP)",
    org: "LSP Media Informatika - TUK HAS",
    date: "June 2026",
  },
  {
    id: "cert-2",
    icon: Sparkles,
    type: "Certification",
    title: "The Complete Python Developer",
    org: "Udemy",
    date: "June 2024",
  },
];

export const quickReplies = {
  Projects:
    "Harry has built a Meeting Scheduling System, an E-Commerce platform for prefab building materials, and an Agricultural Production System.",
  Skills:
    "Core stack: Next.js, React.js, Tailwind CSS, PHP, Laravel, Flutter, PostgreSQL, Python, Git, and REST API Development.",
  Experience:
    "Harry works as a Freelance Web Developer, previously an IT Intern at Disnaker Kab. Tangerang, and a Computer Lab Assistant. He also has a strong record in national science olympiads.",
  Contact:
    "Reach Harry through email, LinkedIn, GitHub, or download the CV from the contact section.",
  GPA: "Harry's GPA is 3.98 / 4.00 at Universitas Tangerang Raya.",
};

export const commandLines = [
  "> init developer_portfolio",
  "> load profile --format=professional",
  "> fetch projects --latest",
  "> open contact_channels",
];

export const heroBadges = [
  { icon: Code2, label: "Web Development" },
  { icon: Layers3, label: "Full-Stack Development" },
  { icon: Database, label: "Database & API" },
  { icon: Github, label: "Git & GitHub" },
];
