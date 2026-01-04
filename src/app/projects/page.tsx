import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/types/project";

const projects: Project[] = [
  {
    id: "1",
    title: "Proyecto 1",
    description: "Descripción breve del proyecto.",
    techs: ["React", "Next.js", "TypeScript"],
    github: "https://github.com/tu-user/proyecto-1",
    demo: "https://demo.com",
  },
];

export default function Projects() {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Proyectos</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}
