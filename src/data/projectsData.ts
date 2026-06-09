import { Project } from "@/types/project"

export const Projects: Project[] = [
  {
    id: "1",
    title: "FITHUB",
    description: {
      es: "Página web para gimnasios que permite registrarse, pagar la cuota online, reservar y cancelar turnos, recibir notificaciones automáticas y ubicar la sede más cercana con Google Maps. Los administradores gestionan usuarios, pagos y asistencia desde un dashboard centralizado. Incluye chatbot, chat en tiempo real y diseño pensado en la mejor experiencia de usuario.",
      en: "Web platform for gyms that allows users to register, pay membership fees online, book and cancel sessions, receive automatic notifications, and locate the nearest branch via Google Maps. Admins manage users, payments, and attendance from a centralized dashboard. Includes a chatbot, real-time chat, and a UX-focused design.",
    },
    techs: ["Next.js", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/fithubhenry/fithub-front.git",
    demo: "https://fithub-front-dev.onrender.com/",
    images: [
      "/images/fithub.png",
      "/images/fithub.login.png",
      "/images/fithub.register.png",
    ],
  },
  {
    id: "2",
    title: "The Mug Club",
    description: {
      es: "Desarrollo de una experiencia de usuario responsiva para e-commerce, incluyendo gestión de carrito, validaciones de formularios y proceso de compra integrado.",
      en: "Responsive e-commerce user experience including cart management, form validations, and an integrated checkout process.",
    },
    techs: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Julianabonet15/Proyectom4Vercel",
    demo: "https://themugclub-seven.vercel.app/",
    images: [
      "/images/mugclub.png",
      "/images/themugclub.card.png",
      "/images/themugclub.login.png",
    ],
  },
  {
  id: "3",
  title: "La Bianqueria",
  description: {
    es: "Sistema POS y control de stock para una mercería en Argentina. Diseñado para operar offline en el local, incluye gestión de productos con variantes (talle, color), historial de ventas, manejo de caja y facturación electrónica integrada con AFIP.",
    en: "POS system and inventory management for a retail haberdashery in Argentina. Designed to run offline on a single local machine, featuring product and variant management (size, color), sales history, cash register control, and electronic invoicing integrated with AFIP.",
  },
  techs: ["Next.js 15", "TypeScript", "Prisma", "SQLite", "Tailwind", "Zod"],
  demo: "https://bianqueria.xavier.com.ar/login",
  images: [
    "/images/b1.png",
    "/images/b2.png",
    "/images/b3.png",
  ],
  objectFit: "cover",
},
]