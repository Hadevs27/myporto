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
  { label: "GPA", value: "3.96 / 4.00" },
  { label: "University", value: "Universitas Tangerang Raya" },
  { label: "Role", value: "Information Systems Student" },
  { label: "Experience", value: "IT Support, Lab Assistant, Web Systems" },
  { label: "System Status", value: "Level 21 // Online" },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    level: 86,
    skills: ["HTML", "CSS", "JavaScript", "Next.js", "Tailwind"],
  },
  {
    title: "Backend",
    icon: ServerCog,
    level: 78,
    skills: ["PHP", "Laravel", "REST Logic", "System Testing"],
  },
  {
    title: "Database",
    icon: Database,
    level: 80,
    skills: ["MySQL", "Data Entry", "Archive Workflows"],
  },
  {
    title: "AI Tools",
    icon: BrainCircuit,
    level: 74,
    skills: ["Gemini API", "AI Chatbot UI", "Prompting", "Automation"],
  },
  {
    title: "UI/UX",
    icon: Figma,
    level: 76,
    skills: ["Wireframes", "Dashboards", "Usability", "Documentation"],
  },
  {
    title: "Deployment",
    icon: Rocket,
    level: 72,
    skills: ["GitHub", "Vercel", "Version Control", "Release Checks"],
  },
];

export const projects = [
  {
    title: "AI Archive Management System",
    label: "Quest 01",
    description:
      "Internal web system concept for digitizing archive lookup, reducing manual search time, and preparing AI-assisted document discovery.",
    stack: ["Laravel", "MySQL", "Gemini API", "Tailwind"],
    accent: "matrix",
  },
  {
    title: "Attendance System",
    label: "Quest 02",
    description:
      "Operational attendance workflow for internship needs, designed around faster daily reporting, clean data entry, and simple admin monitoring.",
    stack: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    accent: "cyanex",
  },
  {
    title: "AI Portfolio Chatbot",
    label: "Quest 03",
    description:
      "Recruiter-facing assistant interface prepared for Gemini API integration, with quick prompts for projects, skills, GPA, and experience.",
    stack: ["Next.js", "Framer Motion", "Gemini API", "Vercel"],
    accent: "violetx",
  },
];

export const experienceLogs = [
  {
    icon: BriefcaseBusiness,
    type: "Internship",
    title: "Information System Intern",
    org: "Dinas Tenaga Kerja Kab. Tangerang",
    date: "May 2025 - August 2025",
    details:
      "Built and implemented internal attendance and archive web systems while supporting document digitization, workflow optimization, and daily technical troubleshooting.",
  },
  {
    icon: Terminal,
    type: "Work Experience",
    title: "Computer Lab Assistant",
    org: "Universitas Tangerang Raya",
    date: "May 2024 - November 2024",
    details:
      "Supported students and faculty with hardware, software, printer, login, and productivity-tool issues while reducing downtime through proactive checks.",
  },
  {
    icon: Layers3,
    type: "Organization",
    title: "Chair, Student Empowerment Institution Department",
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
      "Organized workshops and bootcamps, improved digital promotions, and produced event evaluation reports for participation and material quality.",
  },
  {
    icon: Trophy,
    type: "Achievement",
    title: "Silver Medalist",
    org: "Indonesia Youth Science Competition 2026",
    date: "May 2026",
    details:
      "Earned a silver medal in an international-level science competition, showing analytical thinking and problem-solving ability.",
  },
  {
    icon: Trophy,
    type: "Achievement",
    title: "Gold Medalist",
    org: "Olimpiade Sains Nasional 2026",
    date: "2026",
    details:
      "Received a gold medal in the National Science Olympiad, demonstrating strong academic discipline, analytical reasoning, and competitive problem-solving.",
  },
  {
    icon: Trophy,
    type: "Achievement",
    title: "Silver Medalist",
    org: "Olimpiade Sains & Kesehatan Hari Pendidikan Nasional (OSPENAS) 2026",
    date: "2026",
    details:
      "Received a silver medal at OSPENAS 2026, strengthening Harry's achievement profile across science, health, and academic competition fields.",
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
    "Harry has built archive and attendance systems, plus this recruiter-ready AI chatbot interface for Gemini integration.",
  Skills:
    "Core stack: HTML, CSS, JavaScript, Next.js, Tailwind, Laravel, MySQL, Python, GitHub, Vercel, and Gemini API concepts.",
  Experience:
    "Harry has experience as an Information System Intern and Computer Lab Assistant, organization leadership in HIMATIF, and medal achievements in national science competitions.",
  Contact:
    "Reach Harry through email, LinkedIn, GitHub, or download the CV from the contact terminal.",
  GPA: "Harry's GPA is 3.96 / 4.00 at Universitas Tangerang Raya.",
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
