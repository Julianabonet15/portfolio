"use client"

import ProjectCard from "@/components/ProjectCard"
import { Projects } from "@/data/projectsData"

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-24 pb-20">
      <h1 className="text-3xl font-bold mb-10">Proyectos</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {Projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}