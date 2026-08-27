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
  { label: "Profile", href: "#profile" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const profileStats = [
  { label: "Name", value: "Harry Septoni A. Nadapdap" },
  { label: "GPA", value: "3.99 / 4.00" },
  { label: "University", value: "Universitas Tangerang Raya" },
  { label: "Role", value: "Information Systems Student" },
  { label: "Experience", value: "IT Support, Web Developer, Intern" },
  { label: "System Status", value: "Level 21 // Online" },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    level: 86,
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Next.js", "Tailwind", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: ServerCog,
    level: 78,
    skills: ["PHP", "Laravel", "Python", "REST API Development"],
  },
  {
    title: "Database",
    icon: Database,
    level: 80,
    skills: ["MySQL", "PostgreSQL", "Database Design"],
  },
  {
    title: "Analytical Skills",
    icon: BrainCircuit,
    level: 74,
    skills: ["System Analysis", "Software Testing", "Workflow Optimization", "Documentation"],
  },
  {
    title: "UI/UX & Tools",
    icon: Figma,
    level: 76,
    skills: ["Figma", "Visual Studio Code", "UI/UX Design", "Microsoft Office"],
  },
  {
    title: "Deployment",
    icon: Rocket,
    level: 72,
    skills: ["Git", "GitHub", "Version Control", "Application Deployment"],
  },
];

export const projects = [
  {
    title: "Meeting Scheduling Information System",
    label: "BAPENDA Kab. Tangerang",
    description:
      "Web-based meeting scheduling and agenda management system with role-based authentication, meeting management features, and integrated Telegram notifications for reminders.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind", "Telegram Bot"],
    accent: "matrix",
    github: "https://github.com/Hadevs27/Sistem-Informasi-Penjadwalan-Agenda-Rapat-berbasis-Web-pada-BAPENDA-",
  },
  {
    title: "E-Commerce Prefab Building Materials",
    label: "E-Commerce",
    description:
      "E-commerce platform for prefab building materials featuring product management, shopping cart, checkout, responsive admin dashboard, and relational database workflow.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    accent: "cyanex",
    github: "https://github.com/Hadevs27/aplikasi-ecommerce-bangunanprefab",
  },
  {
    title: "Agricultural Production & Sales System",
    label: "Management System",
    description:
      "Web-based production and sales management system. Includes product management, sales transactions, reporting modules, and a responsive operational dashboard.",
    stack: ["Laravel", "PHP", "MySQL"],
    accent: "violetx",
    github: "https://github.com/Hadevs27/Sistem-Informasi-Produksi-dan-Penjualan-Hasil-Pertanian",
  },
];

export const experienceLogs = [
  {
    icon: Code2,
    type: "Work Experience",
    title: "Freelance Web & Mobile Developer",
    org: "Self-Employed, Tangerang",
    date: "March 2025 - Present",
    details:
      "Developed web-based and mobile applications for university students. Handled requirement analysis, database design, authentication, API integrations, and deployment using Laravel, Next.js, and PostgreSQL.",
  },
  {
    icon: BriefcaseBusiness,
    type: "Internship",
    title: "Information System Intern",
    org: "Dinas Tenaga Kerja Kab. Tangerang",
    date: "May 2025 - August 2025",
    details:
      "Developed a web-based archive management and employee attendance system using Laravel and MySQL. Reduced manual archive searching by 50% through digitization.",
  },
  {
    icon: Terminal,
    type: "Work Experience",
    title: "Computer Lab Assistant",
    org: "Universitas Tangerang Raya",
    date: "May 2024 - November 2024",
    details:
      "Supported students and faculty with hardware/software issues. Reduced system downtime by 35% through proactive equipment checks and provided mini-training sessions.",
  },
  {
    icon: Layers3,
    type: "Organization",
    title: "Chair, Student Empowerment Institution Dept.",
    org: "Himpunan Mahasiswa Teknologi Informasi",
    date: "May 2024 - April 2025",
    details:
      "Led IT discussion planning, team coordination, speaker invitations, and event execution for practical real-world technology case discussions.",
  },
  {
    icon: Globe2,
    type: "Organization",
    title: "Public Relations Staff",
    org: "Himpunan Mahasiswa Teknologi Informasi",
    date: "June 2023 - May 2024",
    details:
      "Organized workshops and bootcamps, boosting participation by 65%. Developed an event evaluation system and boosted engagement by 120% through digital promotions.",
  },
  {
    icon: Trophy,
    type: "Achievement",
    title: "Gold Medalist",
    org: "Olimpiade Sains Nasional (OSP) 2026",
    date: "2026",
    details:
      "Achieved a gold medal in a national science olympiad, demonstrating strong analytical thinking, logical reasoning, and problem-solving skills.",
  },
  {
    icon: Trophy,
    type: "Achievement",
    title: "Silver Medalist",
    org: "OSPENAS 2026",
    date: "2026",
    details:
      "Achieved a silver medal in a national-level competition, reflecting strong academic capability, consistency, and competitive learning achievement.",
  },
  {
    icon: Trophy,
    type: "Achievement",
    title: "Silver Medalist",
    org: "Indonesia Youth Science Competition (IYSC) 2026",
    date: "May 2026",
    details:
      "Earned a silver medal in an international-level science competition, demonstrating strong analytical thinking and problem-solving skills.",
  },
  {
    icon: ShieldCheck,
    type: "Certification",
    title: "The Complete Python Developer",
    org: "Udemy",
    date: "June 2024",
    details:
      "Strengthened Python programming fundamentals for automation, data handling, and problem-solving workflows.",
  },
];

export const quickReplies = {
  Projects:
    "Harry has built a Meeting Scheduling System, an E-Commerce platform for prefab building materials, and an Agricultural Production System.",
  Skills:
    "Core stack: Next.js, React, Tailwind, PHP, Laravel, MySQL, PostgreSQL, Python, Git, and REST API Development.",
  Experience:
    "Harry works as a Freelance Web Developer, previously an IT Intern at Disnaker Kab. Tangerang, and a Computer Lab Assistant. He also has a strong record in national science olympiads.",
  Contact:
    "Reach Harry through email, LinkedIn, GitHub, or download the CV from the contact terminal.",
  GPA: "Harry's GPA is 3.99 / 4.00 at Universitas Tangerang Raya.",
};

export const commandLines = [
  "> boot HARRY.EXE",
  "> scan profile --recruiter-mode",
  "> load projects --mission-log",
  "> contact --open-channel",
];

export const heroBadges = [
  { icon: GraduationCap, label: "Information Systems" },
  { icon: BrainCircuit, label: "AI Enthusiast" },
  { icon: Sparkles, label: "Web Developer" },
  { icon: Github, label: "Git Ready" },
];
