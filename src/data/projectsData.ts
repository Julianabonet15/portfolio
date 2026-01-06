import { Project } from "@/types/project"

export const Projects: Project[] = [
  {
    id: "1",
    title: "FITHUB",
    description:
      "Pagina web para gimnasios que permite registrarse, pagar la cuota online, reservar y cancelar turnos, recibir notificaciones automáticas y ubicar la sede más cercana con Google Maps. Los administradores gestionan usuarios, pagos y asistencia desde un dashboard centralizado. Incluye chatbot, chat en tiempo real y diseño pensado en la mejor experiencia de usuario.",
    techs: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/fithubhenry/fithub-front.git",
    demo: "https://fithub-front-dev.onrender.com/",
    images: [
      "/images/fithub.png",     // preview home
      "/images/fithub.login.png",     // usuario
      "/images/fithub.register.png" // dashboard
    ],
  },
  {
    id: "2",
    title: "The Mug Club",
    description:
      "Desarrollo de una experiencia de usuario responsiva para e-commerce, incluyendo gestión de carrito, validaciones de formularios y proceso de compra integrado.",
    techs: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Julianabonet15/Proyectom4Vercel",
    demo: "https://themugclub-seven.vercel.app/",
    images: [
      "/images/mugclub.png",
      "/images/themugclub.card.png",
      "/images/themugclub.login.png"
    ],
  },
]
