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
  { label: "Home", href: "#hero" },
  { label: "About", href: "#profile" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const profileStats = [
  { label: "Name", value: "Harry Septoni Armando Nadapdap" },
  { label: "Degree", value: "Information Systems Graduate" },
  { label: "University", value: "Universitas Tangerang Raya" },
  { label: "GPA", value: "3.99 / 4.00" },
  { label: "Focus", value: "Web & Mobile Development" },
  { label: "Location", value: "Tangerang, Indonesia" },
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
    skills: ["MySQL", "PostgreSQL", "Database Design"],
  },
  {
    title: "Analytical Skills",
    icon: BrainCircuit,
    skills: ["System Analysis", "Software Testing", "Workflow Optimization", "Documentation"],
  },
  {
    title: "UI/UX & Tools",
    icon: Figma,
    skills: ["Figma", "Visual Studio Code", "UI/UX Design", "Microsoft Office"],
  },
  {
    title: "Deployment & Version Control",
    icon: Rocket,
    skills: ["Git", "GitHub", "Version Control", "Application Deployment"],
  },
];

export const projects = [
  {
    title: "Meeting Scheduling Information System",
    label: "BAPENDA Kab. Tangerang",
    description:
      "Web-based meeting scheduling system for managing meeting agendas and schedules, with role-based authentication, PostgreSQL integration, and Telegram notification support.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Telegram Bot"],
    accent: "matrix",
    github: "https://github.com/Hadevs27/Sistem-Informasi-Penjadwalan-Agenda-Rapat-berbasis-Web-pada-BAPENDA-",
  },
  {
    title: "E-Commerce Prefab Building Materials",
    label: "E-Commerce",
    description:
      "E-commerce platform for prefab building materials featuring product management, shopping cart, checkout, responsive admin dashboard, and relational database workflow.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
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
    icon: GraduationCap,
    type: "Education",
    title: "Bachelor of Information Systems",
    org: "Universitas Tangerang Raya",
    date: "2022 - 2026",
    details:
      "Graduated with a GPA of 3.99 / 4.00. Focus on software development, system analysis, and database management.",
  },
  {
    icon: Code2,
    type: "Work Experience",
    title: "Freelance Web & Mobile Developer",
    org: "Self-Employed, Tangerang",
    date: "March 2025 - Present",
    details:
      "Developed web-based and mobile applications. Handled requirement analysis, database design, authentication, API integrations, and deployment using Laravel, Next.js, and PostgreSQL.",
  },
  {
    icon: BriefcaseBusiness,
    type: "Internship",
    title: "Information System Intern",
    org: "Dinas Tenaga Kerja Kab. Tangerang",
    date: "May 2025 - August 2025",
    details:
      "Developed a web-based archive management and employee attendance system using Laravel and MySQL. Digitized the archive workflow to make document retrieval faster and more organized.",
  },
  {
    icon: Terminal,
    type: "Work Experience",
    title: "Computer Lab Assistant",
    org: "Universitas Tangerang Raya",
    date: "May 2024 - November 2024",
    details:
      "Supported students and faculty with hardware and software issues. Improved system reliability through proactive equipment checks and provided mini-training sessions.",
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
      "Organized workshops and bootcamps, significantly increasing participation. Developed an event evaluation system and improved engagement through digital promotions.",
  },
  {
    icon: Layers3,
    type: "Organization",
    title: "Event Coordinator - Diskusi Kasus Dunia IT",
    org: "Universitas Tangerang Raya",
    date: "November 2024",
    details:
      "Led a 25-member committee to organize a university-level IT discussion event with 105 participants. Coordinated speakers, sponsorships, and logistics.",
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
    icon: Trophy,
    type: "Achievement",
    title: "CTF Participant",
    org: "Capture The Flag Competition | Telkom University",
    date: "August 2025",
    details:
      "Gained hands-on experience in cybersecurity challenges, including cryptography, web exploitation, and reverse engineering.",
  },
  {
    icon: ShieldCheck,
    type: "Certification",
    title: "Junior Web Programmer (JWP)",
    org: "LSP Media Informatika – TUK HAS",
    date: "June 2026",
    details:
      "Competency Assessment Certificate for Junior Web Programmer.",
    link: "/files/ukom.pdf",
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
    "Core stack: Next.js, React.js, Tailwind CSS, PHP, Laravel, Flutter, PostgreSQL, Python, Git, and REST API Development.",
  Experience:
    "Harry works as a Freelance Web Developer, previously an IT Intern at Disnaker Kab. Tangerang, and a Computer Lab Assistant. He also has a strong record in national science olympiads.",
  Contact:
    "Reach Harry through email, LinkedIn, GitHub, or download the CV from the contact section.",
  GPA: "Harry's GPA is 3.99 / 4.00 at Universitas Tangerang Raya.",
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
