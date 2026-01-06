import Image from "next/image"
import Link from "next/link"
import { Projects } from "@/data/projectsData"
import { notFound } from "next/navigation"

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params

  const project = Projects.find(
    (p) => p.id.toString() === id
  )

  if (!project) {
    notFound()
  }

  return (
    <main className="max-w-6xl mx-auto px-6 pt-20 pb-20">
      
      {/* Volver */}
      <div className="mb-10">
        <Link
          href="/#proyectos"
          className="text-sm text-[var(--text-secondary)] hover:underline"
        >
          ← Volver
        </Link>
      </div>

      {/* Header + acciones */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
        
        {/* Texto */}
        <header className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            {project.title}
          </h1>

          <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Techs */}
          <ul className="flex flex-wrap gap-2">
            {project.techs.map((tech) => (
              <li
                key={tech}
                className="text-xs px-3 py-1 rounded-full border border-[var(--border)]"
              >
                {tech}
              </li>
            ))}
          </ul>
        </header>

        {/* GitHub / Demo */}
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-lg
                border
                border-[var(--border)]
                bg-[#f7f5f1]
                px-4
                py-2
                text-sm
                font-medium
                transition-all
                duration-300
                ease-out
                md:hover:-translate-y-0.5
                md:hover:shadow-md
              "
            >
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-lg
                border
                border-[var(--border)]
                bg-[#f7f5f1]
                px-4
                py-2
                text-sm
                font-medium
                transition-all
                duration-300
                ease-out
                md:hover:-translate-y-0.5
                md:hover:shadow-md
              "
            >
              Demo
            </a>
          )}
        </div>
      </div>

      {/* Imágenes */}
      {project.images && (
        <section className="grid gap-6 md:grid-cols-2">
          {project.images.map((img, index) => (
            <div
              key={index}
              className="
                group
                relative
                w-full
                aspect-[16/10]
                rounded-xl
                overflow-hidden
                border
                border-[var(--border)]
                bg-[#f7f5f1]
                transition-all
                duration-300
                ease-out
                md:hover:-translate-y-1
                md:hover:shadow-lg
              "
            >
              <Image
                src={img}
                alt={`${project.title} screenshot ${index + 1}`}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-300
                  ease-out
                  md:group-hover:scale-105
                "
              />
            </div>
          ))}
        </section>
      )}
    </main>
  )
}

export async function generateStaticParams() {
  return Projects.map((project) => ({
    id: project.id.toString(),
  }))
}
