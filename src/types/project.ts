export interface Project {
  id: string
  title: string
  description: {
    es: string
    en: string
  }
  // Qué hicimos en el proyecto (diseño, desarrollo, etc.)
  role?: {
    es: string
    en: string
  }
  // Funcionalidades principales
  features?: {
    es: string[]
    en: string[]
  }
  techs: string[]
  githubUrl?: string
  demo?: string
  images?: string[]
  objectFit?: "cover" | "contain"
}
