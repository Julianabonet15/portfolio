"use client"

import ProjectCard from "@/components/ProjectCard"
import { Projects } from "@/data/projectsData"
import { useApp } from "@/context/AppContext"

export default function ProjectsPage() {
  const { t } = useApp()

  return (
    <section className="max-w-6xl mx-auto px-5 pt-36 pb-20">
      <h1 className="text-5xl md:text-7xl font-semibold mb-12">{t("section.projects")}</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {Projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
