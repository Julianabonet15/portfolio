"use client"

import ProjectCard from "@/components/ProjectCard"
import { Projects } from "@/data/projectsData"
import { Github, Linkedin, Mail } from "lucide-react"
import { useApp } from "@/context/AppContext"

const TECHS = [
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
]

export default function Home() {
  const { t } = useApp()

  return (
    <main className="max-w-6xl mx-auto px-5 pt-24 pb-24">

      {/* HERO */}
      <section className="mb-28 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">

        {/* Foto con anillo de acento */}
        <div className="animate-fade-up shrink-0 w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-[var(--accent)] shadow-lg">
          <img src="/images/juli.png" alt="Juli Bonet" className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">

          <h1 className="animate-fade-up-delay-1 text-4xl md:text-6xl font-semibold leading-tight">
            {t("hero.title")}
          </h1>

          {/* Línea de acento bajo el título */}
          <div className="animate-fade-up-delay-2 w-16 h-0.5 bg-[var(--accent)] md:self-start self-center" />

          <p className="animate-fade-up-delay-2 text-sm md:text-base text-[var(--text-secondary)] max-w-xl leading-relaxed">
            {t("hero.description")}
          </p>

          <div className="animate-fade-up-delay-3 flex items-center gap-4 pt-1">
            <a
              href="mailto:julianabonet2@gmail.com"
             style={{ backgroundColor: "var(--accent)" }}
              className="flex items-center gap-2 text-sm px-5 py-2.5 rounded-full text-white font-medium shadow-sm hover:opacity-80 transition-opacity"
            >
              <Mail size={15} />
              {t("hero.contact")}
            </a>
            <a href="https://github.com/Julianabonet15" target="_blank" rel="noopener noreferrer"
              className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition">
              <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/juliana-bonet" target="_blank" rel="noopener noreferrer"
              className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition">
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      </section>

      {/* TECNOLOGÍAS */}
      <section className="animate-fade-up-delay-4 mb-20">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)] mb-6">
          {t("section.techs")}
        </h2>
        <ul className="flex flex-wrap gap-3">
          {TECHS.map((tech) => (
            <li
              key={tech.name}
              className="flex items-center gap-2 text-xs px-3 py-2 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--foreground)] transition cursor-default"
            >
              <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
              {tech.name}
            </li>
          ))}
        </ul>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="mb-32">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)] mb-3">
          {t("section.projects")}
        </h2>
        <p className="text-2xl md:text-4xl font-semibold mb-10 text-[var(--foreground)]">
          {t("section.projects.subtitle") || "Lo que construí"}
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {Projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="max-w-3xl mt-32">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)] mb-3">
          {t("section.about")}
        </h2>
        <p className="text-2xl md:text-3xl font-semibold mb-6 text-[var(--foreground)]">
          {t("about.subtitle") || "Diseño con criterio, desarrollo con cuidado."}
        </p>
        <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
          {t("about.text")}
        </p>
      </section>

    </main>
  )
}