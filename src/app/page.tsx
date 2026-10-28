"use client"

import { useEffect, useState } from "react"
import ProjectCard from "@/components/ProjectCard"
import Reveal from "@/components/Reveal"
import { Projects } from "@/data/projectsData"
import { ArrowDown, ArrowRight, Code2, Download, Github, Linkedin, Mail, MessageCircle, Palette, Rocket } from "lucide-react"
import { useApp } from "@/context/AppContext"

const TECHS = [
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
]

const SERVICES = [
  { icon: Palette, title: "services.design", text: "services.design.text" },
  { icon: Code2, title: "services.dev", text: "services.dev.text" },
  { icon: Rocket, title: "services.product", text: "services.product.text" },
]

const EMAIL = "julianabonet2@gmail.com"
const CV = "/Juliana_Bonet_CV.pdf"

export default function Home() {
  const { t } = useApp()
  const roles = t("hero.roles").split("|")
  const [roleIndex, setRoleIndex] = useState(0)

  // Cambia la palabra destacada del hero
  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => i + 1), 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <main>

      {/* HERO */}
      <section className="relative min-h-svh flex items-center overflow-hidden pt-28 pb-16">
        <div aria-hidden className="absolute inset-0 bg-grid" />
        <div aria-hidden className="blob w-96 h-96 bg-[var(--accent)] -top-20 -left-20" />
        <div aria-hidden className="blob w-80 h-80 bg-[var(--accent-2)] top-1/3 right-0" style={{ animationDelay: "-5s" }} />
        <div aria-hidden className="blob w-72 h-72 bg-[var(--accent-3)] bottom-0 left-1/3 opacity-30" style={{ animationDelay: "-9s" }} />

        <div className="relative max-w-6xl w-full mx-auto px-5 grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-12">
          <div className="min-w-0">
            <p className="animate-fade-up inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--card)]/70 backdrop-blur mb-8">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-[var(--accent)] animate-ping" />
                <span className="relative w-2 h-2 rounded-full bg-[var(--accent)]" />
              </span>
              {t("hero.available")}
            </p>

            <p className="animate-fade-up-delay-1 text-lg md:text-xl text-[var(--text-secondary)] mb-3">
              {t("hero.hello")}
            </p>

            <h1 className="animate-fade-up-delay-1 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] mb-8">
              {t("hero.lead")}{" "}
              <span className="block overflow-hidden pb-2">
                <span key={roleIndex} className="word-in">
                  <span className="text-gradient">{roles[roleIndex % roles.length]}</span>
                </span>
              </span>
              <span className="block text-[var(--text-secondary)]">{t("hero.tail")}</span>
            </h1>

            <p className="animate-fade-up-delay-2 text-base md:text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed mb-10">
              {t("hero.description")}
            </p>

            <div className="animate-fade-up-delay-3 flex flex-wrap items-center gap-3">
              <a
                href="#proyectos"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--foreground)] text-[var(--background)] font-semibold transition hover:bg-[var(--accent)] hover:text-white hover:scale-105"
              >
                {t("hero.seeWork")}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[var(--border)] bg-[var(--card)]/70 backdrop-blur font-semibold transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <Mail size={17} />
                {t("hero.contact")}
              </a>
              <a
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[var(--border)] bg-[var(--card)]/70 backdrop-blur font-semibold transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <Download size={17} />
                {t("cv.download")}
              </a>
              <div className="flex items-center gap-1 ml-1">
                <a href="https://github.com/Julianabonet15" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                  className="p-3 rounded-full text-[var(--text-secondary)] hover:text-[var(--foreground)] hover:bg-[var(--border)] hover:-translate-y-1 transition">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/juliana-bonet" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="p-3 rounded-full text-[var(--text-secondary)] hover:text-[var(--foreground)] hover:bg-[var(--border)] hover:-translate-y-1 transition">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Foto con texto giratorio */}
          <div className="animate-fade-up-delay-2 relative mx-auto w-60 h-60 md:w-80 md:h-80 order-first md:order-none">
            <svg viewBox="0 0 200 200" aria-hidden className="spin-slow absolute inset-0 w-full h-full">
              <defs>
                <path id="circle" d="M100,100 m-88,0 a88,88 0 1,1 176,0 a88,88 0 1,1 -176,0" />
              </defs>
              <text className="fill-[var(--foreground)] text-[11px] font-semibold uppercase tracking-[0.3em]">
                <textPath href="#circle">Frontend Developer • UI/UX Designer • </textPath>
              </text>
            </svg>
            <div className="absolute inset-8 md:inset-10 rounded-full p-1 bg-gradient-to-br from-[var(--accent)] via-[var(--accent-2)] to-[var(--accent-3)] shadow-2xl shadow-[var(--glow)] transition-transform duration-500 hover:scale-105 hover:rotate-3">
              <img src="/images/juli.png" alt="Juliana Bonet" className="w-full h-full rounded-full object-cover bg-[var(--card)]" />
            </div>
          </div>
        </div>

        <a href="#tecnologias" className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-xs uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--foreground)] transition">
          {t("hero.scroll")}
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </section>

      {/* TECNOLOGÍAS */}
      <section id="tecnologias" className="relative py-10 border-y border-[var(--border)] bg-[var(--card)]/60 backdrop-blur overflow-hidden">
        <h2 className="sr-only">{t("section.techs")}</h2>
        <div className="marquee">
          {[...TECHS, ...TECHS].map((tech, i) => (
            <div key={i} className="flex items-center gap-3 mx-8 shrink-0 text-2xl md:text-3xl font-semibold font-[family-name:var(--font-playfair)] text-[var(--text-secondary)] hover:text-[var(--foreground)] transition">
              <img src={tech.icon} alt="" className={`w-8 h-8 ${tech.name === "Next.js" || tech.name === "GitHub" || tech.name === "Prisma" ? "invert-on-dark" : ""}`} />
              {tech.name}
              <span className="ml-8 text-[var(--accent)]">✦</span>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5">

        {/* STATS */}
        <Reveal className="grid grid-cols-3 gap-4 py-20">
          {[
            { value: `${Projects.length}+`, label: t("stats.projects") },
            { value: "Next.js", label: t("stats.stack") },
            { value: "UI/UX", label: t("stats.focus") },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="text-3xl sm:text-5xl md:text-6xl font-semibold font-[family-name:var(--font-playfair)] tracking-tight">{stat.value}</p>
              <p className="text-xs md:text-sm uppercase tracking-widest text-[var(--text-secondary)] mt-2">{stat.label}</p>
            </div>
          ))}
        </Reveal>

        {/* PROYECTOS */}
        <section id="proyectos" className="scroll-mt-28 pb-32">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)] mb-3">
                {t("section.projects")}
              </p>
              <h2 className="text-5xl md:text-7xl font-semibold">{t("section.projects.subtitle")}</h2>
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2">
            {Projects.map((project, i) => (
              <Reveal key={project.id} delay={(i % 2) * 120} className={i === 0 ? "md:col-span-2" : ""}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* SOBRE MÍ */}
        <section id="sobre-mi" className="scroll-mt-28 pb-32 grid md:grid-cols-2 gap-6">
          <Reveal className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-8 md:p-10 md:row-span-3 flex flex-col justify-between gap-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)] mb-3">
                {t("section.about")}
              </p>
              <h2 className="text-4xl md:text-5xl font-semibold mb-6">{t("about.subtitle")}</h2>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                {t("about.text")}
              </p>
            </div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--text-secondary)]">
              {t("services.title")} →
            </p>
          </Reveal>

          {SERVICES.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="group h-full flex gap-5 items-start rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-7 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-xl hover:shadow-[var(--glow)]">
                <span className="shrink-0 grid place-items-center w-14 h-14 rounded-2xl bg-[var(--background)] border border-[var(--border)] text-[var(--accent)] transition duration-300 group-hover:bg-[var(--accent)] group-hover:text-white group-hover:rotate-6">
                  <Icon size={24} />
                </span>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{t(title)}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{t(text)}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </section>

        {/* CONTACTO */}
        <Reveal>
          <section id="contacto" className="scroll-mt-28 relative overflow-hidden rounded-[2.5rem] bg-[#2b2622] text-[#f0ece6] border border-[var(--border)] px-8 py-16 md:px-16 md:py-24 mb-8">
            <div aria-hidden className="blob w-96 h-96 bg-[var(--accent)] -top-32 -right-20 opacity-60" />
            <div aria-hidden className="blob w-72 h-72 bg-[var(--accent-2)] -bottom-32 left-10 opacity-50" style={{ animationDelay: "-6s" }} />

            <div className="relative">
              <h2 className="text-5xl md:text-8xl font-semibold leading-[0.95] mb-6">
                {t("contact.title")}
                <br />
                <span className="text-[var(--accent-3)]">{t("contact.subtitle")}</span>
              </h2>
              <p className="text-lg opacity-70 mb-10 max-w-md">{t("contact.text")}</p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[var(--accent-3)] text-[#2b2622] font-semibold text-lg transition hover:scale-105"
                >
                  <Mail size={20} />
                  {EMAIL}
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="https://wa.me/5492477345930"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-current/30 font-semibold text-lg transition hover:bg-white hover:text-black"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
                <a
                  href={CV}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-current/30 font-semibold text-lg transition hover:bg-white hover:text-black"
                >
                  <Download size={20} />
                  {t("cv.download")}
                </a>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </main>
  )
}
