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
  MessageCircle,
  SendHorizontal,
  X,
  Languages
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, createContext, useContext } from "react";
import { BackgroundFx } from "@/components/background-fx";
import { CyberWindow } from "@/components/cyber-window";
import { SectionHeader } from "@/components/section-header";
import { TypingText } from "@/components/typing-text";
import { translations, Language } from "@/lib/i18n";

// Language Context
const LanguageContext = createContext<{
  lang: Language;
  setLang: (l: Language) => void;
  t: typeof translations.en;
}>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});
const useLanguage = () => useContext(LanguageContext);

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
  const [lang, setLang] = useState<Language>("en");
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
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
    </LanguageContext.Provider>
  );
}

function SystemNav() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const { data, ui } = t;

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-matrix/15 bg-black/55 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="terminal-title text-sm font-bold text-matrix text-glow">
          HARRY.DEV
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {data.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="terminal-title rounded-md px-3 py-2 text-xs text-emerald-100/70 transition hover:bg-matrix/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        
        <div className="hidden md:flex items-center gap-2">
          <button 
            onClick={() => setLang(lang === "en" ? "id" : "en")}
            className="hud-button rounded-md px-3 py-2 text-xs terminal-title flex items-center gap-1.5"
          >
            <Languages size={15} /> {ui.nav.toggle}
          </button>
          <a
            href="/files/CV_HARRY_UPDATED.pdf"
            className="hud-button rounded-md px-3 py-2 text-xs terminal-title flex items-center gap-1.5"
            download
          >
            <Download size={15} /> {ui.nav.cv}
          </a>
        </div>
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
              {data.navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="terminal-title rounded-md px-3 py-3 text-xs text-emerald-100/75 hover:bg-matrix/10"
                >
                  {item.label}
                </a>
              ))}
              <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-matrix/15">
                <button 
                  onClick={() => { setLang(lang === "en" ? "id" : "en"); setOpen(false); }}
                  className="terminal-title rounded-md px-3 py-3 text-xs text-matrix bg-matrix/10 text-center"
                >
                  {ui.nav.toggle}
                </button>
                <a
                  href="/files/CV_HARRY_UPDATED.pdf"
                  download
                  onClick={() => setOpen(false)}
                  className="terminal-title rounded-md px-3 py-3 text-xs text-cyanex bg-cyanex/10 text-center flex items-center justify-center gap-1.5"
                >
                  <Download size={15} /> {ui.nav.cv}
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  const { t } = useLanguage();
  const { data, ui } = t;

  return (
    <section id="hero" className="relative flex min-h-screen items-center px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="relative z-10">
          <motion.div
            variants={reveal}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyanex/35 bg-cyanex/10 px-4 py-2 text-xs text-cyanex shadow-cyan terminal-title"
          >
            <span className="h-2 w-2 rounded-full bg-matrix animate-pulse-glow" />
            HARRY.EXE // {ui.hero.init}
          </motion.div>
          <motion.h1
            variants={reveal}
            className="text-5xl font-black leading-none text-white text-glow sm:text-6xl lg:text-7xl"
          >
            Harry Septoni Armando Nadapdap
          </motion.h1>
          <motion.p variants={reveal} className="mt-5 max-w-2xl text-lg text-emerald-100/80 sm:text-xl">
            {ui.hero.subtitle}
          </motion.p>
          <motion.div variants={reveal} className="mt-5 min-h-8 font-mono text-sm text-matrix sm:text-base">
            <TypingText phrases={ui.hero.typing} />
          </motion.div>
          <motion.div variants={reveal} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="hud-button rounded-md px-5 py-3 text-sm font-semibold">
              {ui.hero.btnProjects} <ArrowDownRight size={18} />
            </a>
            <a href="#contact" className="hud-button rounded-md border-cyanex/50 px-5 py-3 text-sm font-semibold">
              {ui.hero.btnContact} <SendHorizontal size={18} />
            </a>
          </motion.div>
          <motion.div variants={reveal} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {data.heroBadges.map((badge) => (
              <div key={badge.label} className="cyber-panel rounded-md px-3 py-3 text-center text-xs text-emerald-100/75">
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
          <CyberWindow title="developer.profile">
            <div className="relative aspect-[4/3] overflow-y-auto bg-black/80 p-5 sm:p-8 font-mono text-xs sm:text-sm text-emerald-100/90 border-t border-matrix/20">
              <p className="text-cyanex font-bold text-base mb-6">{ui.hero.hudSync}</p>
              
              <p className="text-matrix font-bold mt-5 mb-2">PROJECTS</p>
              <ul className="list-none space-y-1.5 pl-0 text-emerald-100/80">
                <li>- Meeting Scheduling Information System</li>
                <li>- E-Commerce Prefab Building Materials</li>
                <li>- Agricultural Production & Sales System</li>
              </ul>

              <p className="text-matrix font-bold mt-6 mb-2">TECH STACK</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {['Next.js', 'TypeScript', 'React.js', 'Laravel', 'PostgreSQL', 'MySQL', 'Git'].map(tech => (
                  <span key={tech} className="bg-cyanex/10 text-cyanex px-2 py-0.5 rounded border border-cyanex/30">{tech}</span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-8">
                <div>
                  <p className="text-matrix font-bold mb-1">STATUS</p>
                  <p className="text-emerald-100/80">{ui.hero.online}</p>
                </div>
                <div>
                  <p className="text-matrix font-bold mb-1">SOURCE</p>
                  <p className="text-emerald-100/80">GitHub</p>
                </div>
              </div>
            </div>
          </CyberWindow>
        </motion.div>
      </div>
    </section>
  );
}

function ProfileSection() {
  const { t } = useLanguage();
  const { data, ui } = t;

  return (
    <section id="profile" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={ui.profile.eyebrow} title={ui.profile.title} description={ui.profile.desc} />
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <CyberWindow title="identity.core">
            <div className="p-5 sm:p-7">
              <div className="relative mx-auto mb-7 flex aspect-square max-w-[250px] items-center justify-center rounded-full border border-matrix/35 bg-black/40 shadow-neon">
                <div className="absolute inset-5 rounded-full border border-cyanex/25" />
                <div className="absolute inset-10 rounded-full border border-violetx/25" />
                <div className="text-center">
                  <p className="terminal-title text-xs text-cyanex">{ui.profile.operator}</p>
                  <p className="mt-2 text-4xl font-black text-white text-glow">H</p>
                  <p className="mt-2 font-mono text-xs text-matrix">HARRY.DEV</p>
                </div>
              </div>
              <p className="leading-7 text-emerald-100/75 whitespace-pre-wrap">
                {ui.profile.bio}
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
            {data.profileStats.map((stat) => (
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
  const { t } = useLanguage();
  const { data, ui } = t;

  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={ui.skills.eyebrow} title={ui.skills.title} description={ui.skills.desc} />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {data.skillGroups.map((group) => (
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
                </div>
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
  const { t } = useLanguage();
  const { data, ui } = t;

  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={ui.projects.eyebrow} title={ui.projects.title} description={ui.projects.desc} />
        <div className="grid gap-6 lg:grid-cols-3">
          {data.projects.map((project, index) => (
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
                      <Github size={14} /> {ui.projects.btnGithub}
                    </a>
                  ) : null}
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
  const { t } = useLanguage();
  const { data, ui } = t;

  const workLogs = data.experienceLogs.filter(
    (item) => item.type === "Work Experience" || item.type === "Internship"
  );
  const eduLogs = data.experienceLogs.filter((item) => item.type === "Education");
  const certLogs = data.experienceLogs.filter((item) => item.type === "Certification");
  const awardLogs = data.experienceLogs.filter((item) => item.type === "Achievement");
  const orgLogs = data.experienceLogs.filter((item) => item.type === "Organization");

  return (
    <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-32">
        <TimelineBlock
          id="experience-work"
          eyebrow="EXPERIENCE // 02"
          title={ui.experience.workTitle}
          description={ui.experience.workDesc}
          logs={workLogs}
        />
        <TimelineBlock
          id="education"
          eyebrow="EDUCATION // 03"
          title={ui.experience.eduTitle}
          description={ui.experience.eduDesc}
          logs={eduLogs}
        />
        <TimelineBlock
          id="certifications"
          eyebrow="CERTIFICATIONS // 04"
          title={ui.experience.certTitle}
          description={ui.experience.certDesc}
          logs={certLogs}
        />
        <TimelineBlock
          id="achievements"
          eyebrow="ACHIEVEMENTS // 05"
          title={ui.experience.awardsTitle}
          description={ui.experience.awardsDesc}
          logs={awardLogs}
        />
        <TimelineBlock
          id="organizations"
          eyebrow="ORGANIZATION // 06"
          title={ui.experience.orgTitle}
          description={ui.experience.orgDesc}
          logs={orgLogs}
        />
      </div>
    </section>
  );
}

function TimelineBlock({
  id,
  eyebrow,
  title,
  description,
  logs,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  logs: any[];
}) {
  if (!logs || logs.length === 0) return null;
  return (
    <div id={id}>
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
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noreferrer" className="group mt-1 inline-flex items-center gap-1.5 text-lg font-bold text-white transition hover:text-cyanex">
                        {item.title}
                        <ExternalLink size={16} className="opacity-50 transition group-hover:opacity-100" />
                      </a>
                    ) : (
                      <h3 className="mt-1 text-lg font-bold text-white">{item.title}</h3>
                    )}
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
  const { t } = useLanguage();
  const { data, ui } = t;

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow={ui.contact.eyebrow} title={ui.contact.title} description={ui.contact.desc} />
        <CyberWindow title="contact.sh">
          <div className="grid gap-6 p-5 md:grid-cols-[0.92fr_1.08fr] md:p-8">
            <div className="space-y-3 font-mono text-sm text-emerald-100/80">
              {data.commandLines.map((line, index) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.14 }}
                  className={index === data.commandLines.length - 1 ? "text-matrix" : ""}
                >
                  {line}
                </motion.p>
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <a href="mailto:harryseptoni27@gmail.com" className="hud-button rounded-md px-4 py-4">
                <Mail size={18} /> {ui.contact.btnEmail}
              </a>
              <a
                href="https://linkedin.com/in/harry-septoni-an"
                target="_blank"
                rel="noreferrer"
                className="hud-button rounded-md px-4 py-4"
              >
                <Linkedin size={18} /> {ui.contact.btnLinkedin}
              </a>
              <a
                href="https://github.com/Hadevs27"
                target="_blank"
                rel="noreferrer"
                className="hud-button rounded-md px-4 py-4"
              >
                <Github size={18} /> {ui.contact.btnGithub}
              </a>
              <a
                href="https://wa.me/6281291804882"
                target="_blank"
                rel="noreferrer"
                className="hud-button rounded-md px-4 py-4"
              >
                <MessageCircle size={18} /> {ui.contact.btnWhatsapp}
              </a>
              <a
                href="/files/CV_HARRY_UPDATED.pdf"
                download
                className="hud-button rounded-md px-4 py-4 sm:col-span-2 text-center flex justify-center"
              >
                <Download size={18} className="mr-2" /> {ui.contact.btnCv}
              </a>
            </div>
          </div>
        </CyberWindow>
      </div>
    </section>
  );
}

function Chatbot() {
  const { t } = useLanguage();
  const { data, ui } = t;

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  // Reset messages when language changes by using an effect, or just rely on state
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    setMessages([
      {
        role: "assistant",
        text: ui.chat.greeting,
      },
    ]);
  }, [ui.chat.greeting]);

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

  const sendReply = (topic: keyof typeof data.quickReplies) => {
    setMessages((items) => [...items, { role: "user", text: topic }]);
    setTyping(true);
    window.setTimeout(() => {
      setMessages((items) => [...items, { role: "assistant", text: data.quickReplies[topic] }]);
      setTyping(false);
    }, 580);
  };

  const [typing, setTyping] = useState(false);

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
          text: ui.chat.typing,
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
                <p className="terminal-title text-xs text-cyanex">{ui.chat.title}</p>
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
                {Object.keys(data.quickReplies).map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => sendReply(topic as keyof typeof data.quickReplies)}
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
                  placeholder={ui.chat.placeholder}
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
  const { t } = useLanguage();
  return (
    <footer className="border-t border-matrix/15 px-4 py-8 text-center font-mono text-sm text-matrix sm:px-6 lg:px-8">
      {t.ui.footer}
    </footer>
  );
}
