"use client"

import { Project } from "@/types/project"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ExternalLink, Github } from "lucide-react"
import { useApp } from "@/context/AppContext"

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  const router = useRouter()
  const { t, lang } = useApp()

  return (
    <article
      className="
        group
        cursor-pointer
        rounded-2xl
        border border-[var(--border)]
        bg-[var(--card)]
        overflow-hidden
        transition-all duration-300
        hover:border-neutral-400
        hover:shadow-xl
      "
    >
      {project.images?.[0] && (
        <div className="relative bg-[var(--card-bg)] border-b border-[var(--border)] px-6 py-6 flex items-center justify-center overflow-hidden">
          <div className="relative w-full max-w-2xl aspect-[16/9] rounded-xl overflow-hidden">
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="
            absolute inset-0
            bg-black/50
            backdrop-blur-sm
            flex items-center justify-center gap-4
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
          ">
            <button
              onClick={() => router.push(`/projects/${project.id}`)}
              className="flex items-center gap-2 text-sm text-white border border-white/60 px-4 py-2 rounded-full hover:bg-white hover:text-black transition font-medium"
            >
              <ExternalLink size={14} />
              {t("card.viewProject")}
            </button>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 text-sm text-white border border-white/60 px-4 py-2 rounded-full hover:bg-white hover:text-black transition font-medium"
              >
                <Github size={14} />
                {t("card.code")}
              </a>
            )}
          </div>
        </div>
      )}

      <div className="p-5" onClick={() => router.push(`/projects/${project.id}`)}>
        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          {project.description[lang]}
        </p>
        <ul className="flex flex-wrap gap-2">
          {project.techs.map((tech) => (
            <li
            key={tech}
            className="
              text-xs px-3 py-1
              rounded-full
              border border-[var(--border)]
              text-[var(--text-secondary)]
              bg-[var(--card-bg)]
              group-hover:border-neutral-300
              transition
            "
          >
            {tech}
          </li>
          ))}
        </ul>
      </div>
    </article>
  )
}