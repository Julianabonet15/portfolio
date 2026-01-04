import ProjectCard from "@/components/ProjectCard"
import { Projects } from "@/data/projectsData"

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-5 pt-24 pb-24">
      
      {/* HERO / PRESENTACIÓN */}
      <section className="mb-24 flex flex-col gap-6">
        
        {/* Foto + título */}
        <div className="flex items-center gap-4">
         <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border border-[var(--border)] shrink-0">

            <img
              src="/images/juli.png"
              alt="Juli Bonet"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-3xl md:text-5xl font-semibold">
            Hola, soy Juli
          </h1>
        </div>

        {/* Descripción */}
        <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
          Desarrollo interfaces cuidando el detalle visual, la experiencia de usuario y el código.
        </p>
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
