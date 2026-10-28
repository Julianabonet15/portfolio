"use client"

import { Project } from "@/types/project"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { ArrowUpRight, Github } from "lucide-react"
import { useApp } from "@/context/AppContext"

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  const { t, lang } = useApp()
  const ref = useRef<HTMLElement>(null)

  // Inclinación 3D y luz que sigue al mouse
  const onMove = (e: React.PointerEvent) => {
    const el = ref.current
    if (!el || e.pointerType !== "mouse") return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    el.style.transform = `perspective(1200px) rotateX(${(0.5 - y) * 6}deg) rotateY(${(x - 0.5) * 6}deg)`
    el.style.setProperty("--mx", `${x * 100}%`)
    el.style.setProperty("--my", `${y * 100}%`)
  }

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = ""
  }

  return (
    <article
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="group relative rounded-[2rem] border border-[var(--border)] bg-[var(--card)] overflow-hidden transition-[transform,box-shadow,border-color] duration-300 ease-out hover:border-[var(--accent)] hover:shadow-2xl hover:shadow-[var(--glow)]"
    >
      {/* Luz del hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "radial-gradient(400px circle at var(--mx) var(--my), var(--glow), transparent 60%)" }}
      />

      <Link href={`/projects/${project.id}`} className="block">
        {project.images?.[0] && (
          <div className="relative aspect-[16/10] overflow-hidden bg-[var(--card-bg)]">
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className={`${project.objectFit === "cover" ? "object-cover" : "object-contain p-6"} transition-transform duration-700 ease-out group-hover:scale-105`}
            />
          </div>
        )}

        <div className="p-6 md:p-7">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">{project.title}</h3>
              {project.role && (
                <p className="text-sm font-medium text-[var(--accent)] mt-1">{project.role[lang]}</p>
              )}
            </div>
            <span className="shrink-0 grid place-items-center w-11 h-11 rounded-full border border-[var(--border)] transition-all duration-300 group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] group-hover:text-white group-hover:rotate-45">
              <ArrowUpRight size={20} />
            </span>
          </div>

          <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5 line-clamp-3">
            {project.description[lang]}
          </p>

          <ul className="flex flex-wrap gap-2">
            {project.techs.map((tech) => (
              <li
                key={tech}
                className="text-xs font-medium px-3 py-1 rounded-full bg-[var(--background)] text-[var(--text-secondary)] border border-[var(--border)]"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </Link>

      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("card.code")}
          className="absolute top-4 right-4 z-20 grid place-items-center w-10 h-10 rounded-full bg-black/60 text-white backdrop-blur opacity-0 group-hover:opacity-100 transition hover:bg-[var(--accent)]"
        >
          <Github size={17} />
        </a>
      )}
    </article>
  )
}
