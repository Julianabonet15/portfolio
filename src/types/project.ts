export interface Project {
  id: string
  title: string
  description: {
    es: string
    en: string
  }
  techs: string[]
  githubUrl?: string
  demo?: string
  images?: string[]
}