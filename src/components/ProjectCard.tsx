"use client"

import { Project } from "@/types/project"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  const router = useRouter()

  return (
    <article
      onClick={() => router.push(`/projects/${project.id}`)}
      className="
        cursor-pointer
        rounded-2xl
        border border-[var(--border)]
        bg-[var(--card)]
        overflow-hidden
        transition-shadow
        hover:shadow-lg
      "
    >
{/* Imagen */}
{project.images?.[0] && (
  <div
    className="
      bg-[#f7f5f1]
      border-t border-[var(--border)]
      px-6 py-6
      flex items-center justify-center
    "
  >
    <div
      className="
        relative
        w-full
        max-w-2xl
        aspect-[16/9]
        rounded-xl
        overflow-hidden
      "
    >
      <Image
        src={project.images[0]}
        alt={project.title}
        fill
        className="
          object-contain
          transition-transform duration-500
          sm:hover:scale-105
        "
      />
    </div>
  </div>
)}


      {/* Contenido */}
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2">
          {project.title}
        </h3>

        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2">
          {project.techs.map((tech) => (
            <li
              key={tech}
              className="
                text-xs
                px-3 py-1
                rounded-full
                border border-[var(--border)]
                text-[var(--text-secondary)]
                bg-white/40
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
