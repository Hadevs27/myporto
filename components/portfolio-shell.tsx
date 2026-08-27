"use client";

import Image from "next/image";
import {
  ArrowDownRight,
  Bot,
  ChevronRight,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  MessageSquareText,
  SendHorizontal,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  commandLines,
  experienceLogs,
  heroBadges,
  navItems,
  profileStats,
  projects,
  quickReplies,
  skillGroups,
} from "@/lib/portfolio-data";
import { BackgroundFx } from "@/components/background-fx";
import { CyberWindow } from "@/components/cyber-window";
import { SectionHeader } from "@/components/section-header";
import { TypingText } from "@/components/typing-text";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

type ChatMessage = {
  role: "assistant" | "user";
  text: string;
};

export function PortfolioShell() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundFx />
      <SystemNav />
      <HeroSection />
      <ProfileSection />
      <SkillTreeSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
      <Chatbot />
    </main>
  );
}

function SystemNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-matrix/15 bg-black/55 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="terminal-title text-sm font-bold text-matrix text-glow">
          HARRY.EXE
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="terminal-title rounded-md px-3 py-2 text-xs text-emerald-100/70 transition hover:bg-matrix/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="/files/CV%20HARRY%20UPDATED%201.pdf"
          className="hud-button hidden rounded-md px-3 py-2 text-xs terminal-title md:inline-flex"
          download
        >
          <Download size={15} /> CV
        </a>
        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="hud-button rounded-md p-2 md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-matrix/15 bg-black/80 md:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-1 px-4 py-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="terminal-title rounded-md px-3 py-3 text-xs text-emerald-100/75 hover:bg-matrix/10"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center px-4 pb-16 pt-28 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10"
        >
          <motion.div
            variants={reveal}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyanex/35 bg-cyanex/10 px-4 py-2 text-xs text-cyanex shadow-cyan terminal-title"
          >
            <span className="h-2 w-2 rounded-full bg-matrix animate-pulse-glow" />
            recruiter interface initialized
          </motion.div>
          <motion.h1
            variants={reveal}
            className="text-5xl font-black leading-none text-white text-glow sm:text-7xl lg:text-8xl"
          >
            HARRY.EXE
          </motion.h1>
          <motion.p
            variants={reveal}
            className="mt-5 max-w-2xl text-lg text-emerald-100/80 sm:text-xl"
          >
            Information Systems Student | AI Enthusiast | Web Developer
          </motion.p>
          <motion.div
            variants={reveal}
            className="mt-5 min-h-8 font-mono text-sm text-matrix sm:text-base"
          >
            <TypingText
              phrases={[
                "Building operational web systems with a futuristic edge.",
                "Connecting AI workflows, clean interfaces, and real-world support.",
                "Recruiter mode: profile, quests, skills, contact channels online.",
              ]}
            />
          </motion.div>
          <motion.div variants={reveal} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="hud-button rounded-md px-5 py-3 text-sm font-semibold">
              View Projects <ArrowDownRight size={18} />
            </a>
            <a
              href="#contact"
              className="hud-button rounded-md border-cyanex/50 px-5 py-3 text-sm font-semibold"
            >
              Contact Me <SendHorizontal size={18} />
            </a>
          </motion.div>
          <motion.div variants={reveal} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {heroBadges.map((badge) => (
              <div
                key={badge.label}
                className="cyber-panel rounded-md px-3 py-3 text-center text-xs text-emerald-100/75"
              >
                <badge.icon className="mx-auto mb-2 h-4 w-4 text-cyanex" />
                {badge.label}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotateX: 8 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-10 rounded-full bg-cyanex/10 blur-3xl" />
          <CyberWindow title="visual_hud.render">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/assets/cyber-hud.png"
                alt="Futuristic cyber operating system dashboard artwork"
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(3,5,7,0.62))]" />
              <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                <span className="terminal-title rounded border border-matrix/40 bg-black/50 px-3 py-2 text-xs text-matrix">
                  HUD_SYNC 99.7%
                </span>
                <span className="terminal-title rounded border border-cyanex/40 bg-black/50 px-3 py-2 text-xs text-cyanex">
                  ONLINE
                </span>
              </div>
              <motion.div
                className="absolute inset-x-8 bottom-8 rounded-md border border-matrix/35 bg-black/60 p-4 font-mono text-xs text-emerald-100/80"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-matrix">&gt; profile.signal.detected</p>
                <p className="mt-2 text-cyanex">&gt; mission-ready web developer interface</p>
              </motion.div>
            </div>
          </CyberWindow>
        </motion.div>
      </div>
    </section>
  );
}

function ProfileSection() {
  return (
    <section id="profile" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="PLAYER_PROFILE.DAT"
          title="Character Stats Panel"
          description="A recruiter-friendly profile rendered like a playable system operator: academic signal, technical support experience, web systems, and AI curiosity in one dashboard."
        />
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <CyberWindow title="identity.core">
            <div className="p-5 sm:p-7">
              <div className="relative mx-auto mb-7 flex aspect-square max-w-[250px] items-center justify-center rounded-full border border-matrix/35 bg-black/40 shadow-neon">
                <div className="absolute inset-5 rounded-full border border-cyanex/25" />
                <div className="absolute inset-10 rounded-full border border-violetx/25" />
                <div className="text-center">
                  <p className="terminal-title text-xs text-cyanex">operator</p>
                  <p className="mt-2 text-4xl font-black text-white text-glow">H</p>
                  <p className="mt-2 font-mono text-xs text-matrix">HARRY.EXE</p>
                </div>
              </div>
              <p className="leading-7 text-emerald-100/75">
                I am an Information Technology student at Universitas Tangerang Raya with
                hands-on experience in IT support, system troubleshooting, data management,
                and web-based internal systems for attendance and archive workflows.
              </p>
            </div>
          </CyberWindow>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {profileStats.map((stat) => (
              <motion.div key={stat.label} variants={reveal} className="cyber-panel rounded-lg p-5">
                <p className="terminal-title text-xs text-cyanex">{stat.label}</p>
                <p className="mt-3 text-lg font-semibold text-white">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SkillTreeSection() {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="SKILL_TREE.SYS"
          title="Interactive Skill Matrix"
          description="A glowing grid of practical engineering tools, support skills, AI-ready interfaces, and deployment workflows."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {skillGroups.map((group) => (
            <motion.article
              key={group.title}
              variants={reveal}
              whileHover={{ y: -6, scale: 1.01 }}
              className="cyber-panel rounded-lg p-5"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-md border border-cyanex/35 bg-cyanex/10 text-cyanex">
                  <group.icon size={21} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{group.title}</h3>
                  <p className="terminal-title text-xs text-emerald-100/50">node level {group.level}</p>
                </div>
              </div>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${group.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-matrix via-cyanex to-violetx"
                />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded border border-matrix/25 bg-black/35 px-2.5 py-1.5 font-mono text-xs text-emerald-100/75 transition hover:border-cyanex/60 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="QUEST_LOG.MISSION"
          title="Project Mission Panels"
          description="Three recruiter-readable quests: internal systems, attendance workflows, and an AI chatbot surface prepared for backend intelligence."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="cyber-panel flex min-h-[520px] flex-col overflow-hidden rounded-lg"
            >
              <div className="relative h-48 overflow-hidden border-b border-matrix/20 bg-black/55">
                <div className="absolute inset-0 bg-terminal-grid bg-[length:24px_24px] opacity-50" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(56,232,255,0.20),transparent_31%),radial-gradient(circle_at_74%_70%,rgba(168,107,255,0.14),transparent_30%)]" />
                <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyanex/35 shadow-cyan" />
                <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-matrix/40" />
                <div className="absolute bottom-5 left-5 right-5 h-14 rounded-md border border-matrix/25 bg-black/45">
                  <div className="m-3 h-2 rounded-full bg-matrix/35" />
                  <div className="mx-3 h-2 w-2/3 rounded-full bg-cyanex/25" />
                </div>
                <div className="absolute left-4 top-4 rounded border border-cyanex/40 bg-black/60 px-3 py-2 terminal-title text-xs text-cyanex">
                  {project.label}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-emerald-100/70">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-cyanex/25 bg-cyanex/10 px-2.5 py-1.5 font-mono text-xs text-cyanex"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-2">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noreferrer" className="hud-button rounded-md px-3 py-2 text-xs flex items-center gap-1.5">
                      <Github size={14} /> GitHub
                    </a>
                  ) : null}
                  <a href="#" className="hud-button rounded-md px-3 py-2 text-xs flex items-center gap-1.5">
                    <ExternalLink size={14} /> Live
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const workLogs = experienceLogs.filter(
    (item) => item.type === "Work Experience" || item.type === "Internship"
  );
  const orgLogs = experienceLogs.filter((item) => item.type === "Organization");
  const awardLogs = experienceLogs.filter(
    (item) => item.type === "Achievement" || item.type === "Certification"
  );

  return (
    <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-32">
        <TimelineBlock
          eyebrow="EXPERIENCE.WORK"
          title="Professional Experience"
          description="Freelance web development, internship, and technical support roles."
          logs={workLogs}
        />
        <TimelineBlock
          eyebrow="EXPERIENCE.ORG"
          title="Organizational Experience"
          description="Leadership, event management, and public relations within university associations."
          logs={orgLogs}
        />
        <TimelineBlock
          eyebrow="EXPERIENCE.AWARDS"
          title="Achievements & Certifications"
          description="Medals from national science competitions and technical skill certifications."
          logs={awardLogs}
        />
      </div>
    </section>
  );
}

function TimelineBlock({
  eyebrow,
  title,
  description,
  logs,
}: {
  eyebrow: string;
  title: string;
  description: string;
  logs: typeof experienceLogs;
}) {
  return (
    <div>
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />
      <div className="relative mt-8">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-matrix via-cyanex to-violetx md:left-1/2" />
        <div className="space-y-6">
          {logs.map((item, index) => (
            <motion.article
              key={`${item.title}-${item.date}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -22 : 22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="relative grid gap-4 pl-12 md:grid-cols-2 md:pl-0"
            >
              <div className="absolute left-[9px] top-6 z-10 grid h-4 w-4 place-items-center rounded-full bg-matrix shadow-neon md:left-[calc(50%-8px)]" />
              <div
                className={`cyber-panel rounded-lg p-5 ${
                  index % 2 === 0 ? "md:col-start-1 md:mr-6" : "md:col-start-2 md:ml-6"
                }`}
              >
                <div
                  className={`flex items-start gap-3 ${
                    index % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""
                  }`}
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-matrix/30 bg-matrix/10 text-matrix">
                    <item.icon size={19} />
                  </div>
                  <div>
                    <p className="terminal-title text-xs text-cyanex">{item.type}</p>
                    <h3 className="mt-1 text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-emerald-100/60">{item.org}</p>
                    <p className="mt-2 font-mono text-xs text-matrix">{item.date}</p>
                  </div>
                </div>
                <p
                  className={`mt-4 text-sm leading-7 text-emerald-100/70 ${
                    index % 2 === 0 ? "md:text-right" : ""
                  }`}
                >
                  {item.details}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="CONTACT_TERMINAL.OPEN"
          title="Open Recruiter Channel"
          description="Fast access to email, professional profile links, and the latest CV artifact."
        />
        <CyberWindow title="contact.sh">
          <div className="grid gap-6 p-5 md:grid-cols-[0.92fr_1.08fr] md:p-8">
            <div className="space-y-3 font-mono text-sm text-emerald-100/80">
              {commandLines.map((line, index) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.14 }}
                  className={index === commandLines.length - 1 ? "text-matrix" : ""}
                >
                  {line}
                </motion.p>
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <a href="mailto:harryseptoni27@gmail.com" className="hud-button rounded-md px-4 py-4">
                <Mail size={18} /> Email
              </a>
              <a
                href="https://linkedin.com/in/harry-septoni-an"
                target="_blank"
                rel="noreferrer"
                className="hud-button rounded-md px-4 py-4"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a
                href="https://github.com/Hadevs27"
                target="_blank"
                rel="noreferrer"
                className="hud-button rounded-md px-4 py-4"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="/files/CV%20HARRY%20UPDATED%201.pdf"
                download
                className="hud-button rounded-md px-4 py-4"
              >
                <Download size={18} /> Download CV
              </a>
            </div>
          </div>
        </CyberWindow>
      </div>
    </section>
  );
}

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text: "Hello, recruiter. I’m HARRY.EXE Assistant. Ask me anything about Harry’s projects, skills, and experience.",
    },
  ]);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const sendReply = (topic: keyof typeof quickReplies) => {
    setMessages((items) => [...items, { role: "user", text: topic }]);
    setTyping(true);
    window.setTimeout(() => {
      setMessages((items) => [...items, { role: "assistant", text: quickReplies[topic] }]);
      setTyping(false);
    }, 580);
  };

  const sendInput = () => {
    const value = input.trim();
    if (!value) {
      return;
    }
    setInput("");
    setMessages((items) => [...items, { role: "user", text: value }]);
    setTyping(true);
    window.setTimeout(() => {
      setMessages((items) => [
        ...items,
        {
          role: "assistant",
          text: "Frontend simulation ready. Gemini API integration can be connected later through a secure server route.",
        },
      ]);
      setTyping(false);
    }, 620);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open AI assistant"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full border border-matrix/50 bg-black/80 text-matrix shadow-neon backdrop-blur-xl transition hover:scale-105 hover:text-white"
      >
        <Bot size={24} />
      </button>
      <AnimatePresence>
        {open ? (
          <motion.aside
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            className="fixed bottom-24 right-4 z-50 w-[calc(100vw-2rem)] max-w-md overflow-hidden rounded-lg border border-cyanex/35 bg-black/90 shadow-cyan backdrop-blur-xl"
          >
            <div className="flex items-center justify-between border-b border-matrix/20 px-4 py-3">
              <div className="flex items-center gap-2">
                <MessageSquareText className="h-4 w-4 text-cyanex" />
                <p className="terminal-title text-xs text-cyanex">assistant.gemini-ready</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close assistant"
                className="rounded-md border border-white/10 p-1 text-emerald-100/70 hover:text-white"
              >
                <X size={16} />
              </button>
            </div>
            <div className="max-h-[360px] space-y-3 overflow-y-auto p-4">
              {messages.map((message, index) => (
                <div
                  key={`${message.text}-${index}`}
                  className={`rounded-md border px-3 py-2 text-sm leading-6 ${
                    message.role === "assistant"
                      ? "border-matrix/25 bg-matrix/10 text-emerald-100/80"
                      : "ml-auto max-w-[82%] border-cyanex/25 bg-cyanex/10 text-white"
                  }`}
                >
                  {message.text}
                </div>
              ))}
              {typing ? (
                <div className="inline-flex items-center gap-1 rounded-md border border-matrix/25 bg-matrix/10 px-3 py-2">
                  {[0, 1, 2].map((item) => (
                    <motion.span
                      key={item}
                      className="h-1.5 w-1.5 rounded-full bg-matrix"
                      animate={{ opacity: [0.25, 1, 0.25] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: item * 0.12 }}
                    />
                  ))}
                </div>
              ) : null}
            </div>
            <div className="border-t border-matrix/20 p-4">
              <div className="mb-3 flex flex-wrap gap-2">
                {Object.keys(quickReplies).map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => sendReply(topic as keyof typeof quickReplies)}
                    className="rounded border border-cyanex/25 bg-cyanex/10 px-2.5 py-1.5 font-mono text-xs text-cyanex hover:border-matrix/55 hover:text-matrix"
                  >
                    {topic}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      sendInput();
                    }
                  }}
                  placeholder="type a recruiter query..."
                  className="min-w-0 flex-1 rounded-md border border-matrix/25 bg-black/55 px-3 py-2 font-mono text-sm text-white outline-none placeholder:text-emerald-100/35 focus:border-cyanex/60"
                />
                <button
                  type="button"
                  onClick={sendInput}
                  aria-label="Send message"
                  className="hud-button rounded-md px-3"
                >
                  <SendHorizontal size={17} />
                </button>
              </div>
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function Footer() {
  return (
    <footer className="border-t border-matrix/15 px-4 py-8 text-center font-mono text-sm text-matrix sm:px-6 lg:px-8">
      &gt; SYSTEM ONLINE // HARRY.EXE
    </footer>
  );
}
