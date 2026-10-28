"use client"

import Image from "next/image"
import Link from "next/link"
import { Projects } from "@/data/projectsData"
import { notFound } from "next/navigation"
import { use, useEffect, useState } from "react"
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronLeft, ChevronRight, Github, X } from "lucide-react"
import { useApp } from "@/context/AppContext"
import Reveal from "@/components/Reveal"

interface PageProps {
  params: Promise<{ id: string }>
}

export default function ProjectPage({ params }: PageProps) {
  const { id } = use(params)
  const { lang, t } = useApp()
  const [zoom, setZoom] = useState<number | null>(null)

  const index = Projects.findIndex((p) => p.id.toString() === id)
  const project = Projects[index]
  const images = project?.images ?? []
  const next = Projects[(index + 1) % Projects.length]

  // Teclado para la galería ampliada
  useEffect(() => {
    if (zoom === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoom(null)
      if (e.key === "ArrowRight") setZoom((z) => (z! + 1) % images.length)
      if (e.key === "ArrowLeft") setZoom((z) => (z! - 1 + images.length) % images.length)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [zoom, images.length])

  if (!project) {
    notFound()
  }

  return (
    <main className="max-w-6xl mx-auto px-5 pt-32 pb-20">

      <Link
        href="/#proyectos"
        className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--foreground)] transition mb-10"
      >
        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
        {t("project.back")}
      </Link>

      <header className="mb-14">
        <h1 className="animate-fade-up text-5xl sm:text-7xl md:text-8xl font-semibold leading-[0.95] mb-6">
          {project.title}
        </h1>
        <p className="animate-fade-up-delay-1 text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl">
          {project.description[lang]}
        </p>
      </header>

      {/* Datos del proyecto */}
      <div className="animate-fade-up-delay-2 grid sm:grid-cols-3 gap-4 mb-14">
        {project.role && (
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-2">{t("project.role")}</p>
            <p className="font-semibold">{project.role[lang]}</p>
          </div>
        )}
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-3">{t("project.stack")}</p>
          <ul className="flex flex-wrap gap-2">
            {project.techs.map((tech) => (
              <li key={tech} className="text-xs font-medium px-3 py-1 rounded-full bg-[var(--background)] border border-[var(--border)]">
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3 justify-center">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-2 rounded-full bg-[var(--foreground)] text-[var(--background)] px-6 py-4 font-semibold transition hover:bg-[var(--accent)] hover:text-white"
            >
              {t("project.visit")}
              <ArrowUpRight size={20} className="transition-transform group-hover:rotate-45" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-2 rounded-full border border-[var(--border)] px-6 py-4 font-semibold transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              GitHub
              <Github size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Qué hace */}
      {project.features && (
        <Reveal className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">{t("project.features")}</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {project.features[lang].map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] px-5 py-4 transition hover:border-[var(--accent)] hover:-translate-y-0.5"
              >
                <span className="shrink-0 grid place-items-center w-7 h-7 rounded-full bg-[var(--accent)] text-white">
                  <Check size={15} />
                </span>
                <span className="text-sm font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      )}

      {/* Galería */}
      {images.length > 0 && (
        <section className="grid gap-6 md:grid-cols-2 mb-24">
          {images.map((img, i) => (
            <Reveal key={img} delay={(i % 2) * 120} className={i === 0 ? "md:col-span-2" : ""}>
              <button
                onClick={() => setZoom(i)}
                className="group relative block w-full aspect-[16/10] rounded-[2rem] overflow-hidden border border-[var(--border)] bg-[var(--card)] cursor-zoom-in transition duration-300 hover:shadow-2xl hover:shadow-[var(--glow)]"
              >
                <Image
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  fill
                  sizes="(min-width: 768px) 70vw, 100vw"
                  className={`${project.objectFit === "cover" ? "object-cover" : "object-contain"} transition-transform duration-700 ease-out group-hover:scale-105`}
                />
              </button>
            </Reveal>
          ))}
        </section>
      )}

      {/* Siguiente proyecto */}
      {next && next.id !== project.id && (
        <Link
          href={`/projects/${next.id}`}
          className="group block border-t border-[var(--border)] pt-10"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-3">→</p>
          <p className="flex items-center gap-4 text-4xl md:text-7xl font-semibold font-[family-name:var(--font-playfair)] tracking-tight transition-colors group-hover:text-[var(--accent)]">
            {next.title}
            <ArrowRight className="w-10 h-10 md:w-16 md:h-16 transition-transform group-hover:translate-x-3" />
          </p>
        </Link>
      )}

      {/* Imagen ampliada */}
      {zoom !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 animate-fade-up"
          onClick={() => setZoom(null)}
        >
          <div className="relative w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image src={images[zoom]} alt={`${project.title} screenshot ${zoom + 1}`} fill sizes="100vw" className="object-contain" />
          </div>
          <button onClick={() => setZoom(null)} aria-label="Cerrar" className="absolute top-5 right-5 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition">
            <X size={22} />
          </button>
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); setZoom((zoom - 1 + images.length) % images.length) }}
                aria-label="Anterior"
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
              >
                <ChevronLeft size={26} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setZoom((zoom + 1) % images.length) }}
                aria-label="Siguiente"
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
              >
                <ChevronRight size={26} />
              </button>
            </>
          )}
        </div>
      )}
    </main>
  )
}
