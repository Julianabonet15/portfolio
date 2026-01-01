export default function Home() {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-4xl font-bold">
        Hola, soy Juli 👋
      </h1>

      <p className="text-lg max-w-xl">
        Soy desarrolladora web fullstack. Me gusta crear interfaces claras,
        funcionales y pensadas para el usuario.
      </p>

      <div className="flex gap-4">
        <a
          href="/projects"
          className="px-5 py-2 bg-black text-white rounded"
        >
          Ver proyectos
        </a>

        <a
          href="/contact"
          className="px-5 py-2 border rounded"
        >
          Contacto
        </a>
      </div>
    </section>
  );
}

