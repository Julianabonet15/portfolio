import { Project } from "@/types/project"

export const Projects: Project[] = [
  {
    id: "4",
    title: "La Opinión",
    description: {
      es: "Portal de noticias del diario La Opinión de Pergamino, que se publica desde 1917. Diseñamos y desarrollamos el sitio con Next.js: portada con notas destacadas, secciones por tema y por ciudad, transmisión en vivo, podcast y ediciones en PDF.",
      en: "News portal for La Opinión, a newspaper from Pergamino published since 1917. We designed and built the site with Next.js: a front page with featured stories, sections by topic and city, live streaming, podcast, and PDF editions.",
    },
    role: {
      es: "Diseño UI/UX y desarrollo con Next.js",
      en: "UI/UX design & Next.js development",
    },
    features: {
      es: [
        "Portada con notas destacadas",
        "Secciones por tema y por ciudad",
        "Últimas notas y más leídas",
        "Transmisión en vivo y podcast",
        "Ediciones del diario en PDF",
        "Perfil de usuario y Mis Notas",
      ],
      en: [
        "Front page with featured stories",
        "Sections by topic and city",
        "Latest and most-read stories",
        "Live streaming and podcast",
        "PDF editions of the paper",
        "User profile and My Stories",
      ],
    },
    techs: ["Next.js", "React", "Tailwind"],
    demo: "https://laopinionline.ar/",
    images: [
      "/images/laopinion.png",
      "/images/laopinion.notas.png",
      "/images/laopinion.secciones.png",
    ],
    objectFit: "cover",
  },
  {
    id: "2",
    title: "365 · La Opinión",
    description: {
      es: "Sitio web del club de beneficios 365 del diario La Opinión. Diseñamos y desarrollamos la plataforma completa con Next.js: los socios se suscriben al plan mensual, buscan descuentos por comercio o rubro, ven los beneficios de su ciudad y piden la tarjeta 365.",
      en: "Website for 365, the benefits club of the newspaper La Opinión. We designed and built the full platform with Next.js: members subscribe to the monthly plan, search discounts by store or category, browse benefits in their city, and request the 365 card.",
    },
    role: {
      es: "Diseño UI/UX y desarrollo con Next.js",
      en: "UI/UX design & Next.js development",
    },
    features: {
      es: [
        "Suscripción al plan mensual de socios",
        "Buscador de comercios y beneficios",
        "Beneficios por ciudad y novedades destacadas",
        "Carruseles de promociones",
        "Pedido de la tarjeta 365",
        "Registro, inicio de sesión y Mi cuenta",
      ],
      en: [
        "Monthly membership subscription",
        "Store and benefit search",
        "Benefits by city and featured news",
        "Promotion carousels",
        "365 card request",
        "Sign-up, login, and My account",
      ],
    },
    techs: ["Next.js", "React", "Tailwind"],
    demo: "https://365.laopinionline.ar/",
    images: [
      "/images/365.png",
      "/images/365.membresia.png",
      "/images/365.promos.png",
    ],
    objectFit: "cover",
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
    "/images/bianqueria.png",
    "/images/b1.png",
    "/images/b2.png",
    "/images/b3.png",
  ],
  objectFit: "cover",
},
]