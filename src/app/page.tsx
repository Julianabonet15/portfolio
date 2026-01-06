import ProjectCard from "@/components/ProjectCard"
import { Projects } from "@/data/projectsData"
import { Github, Linkedin } from "lucide-react"

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-5 pt-24 pb-24">
      
  {/* HERO / PRESENTACIÓN */}
<section className="mb-24 flex flex-col items-center text-center gap-6">
  
  {/* Foto */}
  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border border-[var(--border)]">
    <img
      src="/images/juli.png"
      alt="Juli Bonet"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Título */}
  <h1 className="text-3xl md:text-5xl font-semibold">
    Soy Juliana Bonet
  </h1>

  {/* Descripción */}
  <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
    Desarrolladora web frontend con foco en crear interfaces claras, funcionales y bien pensadas.
    Combino criterio visual, experiencia de usuario y código para transformar ideas en productos
    digitales simples y efectivos.
  </p>

  {/* Íconos */}
  <div className="flex items-center justify-center gap-6 pt-2">
    <a
      href="https://github.com/Julianabonet15"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[var(--text-secondary)] hover:text-[var(--foreground)] transition"
      aria-label="GitHub"
    >
      <Github size={30} />
    </a>

    <a
      href="https://www.linkedin.com/in/juliana-bonet"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[var(--text-secondary)] hover:text-[var(--foreground)] transition"
      aria-label="LinkedIn"
    >
      <Linkedin size={30} />
    </a>
  </div>
</section>

      {/* TECNOLOGÍAS */}
<section className="mb-20">
  <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--text-secondary)] mb-6">
    Tecnologías
  </h2>

  <ul className="flex flex-wrap gap-3 max-w-3xl">
    {[
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind",
      "Git",
      "GitHub",
    ].map((tech) => (
      <li
        key={tech}
        className="
          text-xs
          px-4
          py-2
          rounded-full
          border
          border-[var(--border)]
          text-[var(--text-secondary)]
          bg-white/40
          backdrop-blur
          transition
          md:hover:text-[var(--text-main)]
        "
      >
        {tech}
      </li>
    ))}
  </ul>
</section>


      {/* PROYECTOS */}
      <section id="proyectos" className="mb-32">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">
          Proyectos
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {Projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="max-w-3xl mt-32">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Sobre mí
        </h2>

        <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
          Trabajo en desarrollo frontend poniendo atención en el detalle visual, la experiencia de usuario y la calidad del código.
          <br /><br />
          Me interesa transformar ideas en interfaces claras y funcionales, y seguir creciendo en proyectos reales donde el diseño y la técnica se encuentren.
        </p>
      </section>


    </main>
  )
}
