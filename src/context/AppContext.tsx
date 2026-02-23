"use client"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"
type Lang = "es" | "en"

interface AppContextType {
  theme: Theme
  toggleTheme: () => void
  lang: Lang
  toggleLang: () => void
  t: (key: string) => string
}

const translations = {
  es: {
    "nav.projects": "Proyectos",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",
    "hero.title": "Soy Juliana Bonet",
    "hero.description": "Desarrolladora web frontend con foco en crear interfaces claras, funcionales y bien pensadas. Combino criterio visual, experiencia de usuario y código para transformar ideas en productos digitales simples y efectivos.",
    "hero.contact": "Contactame",
    "section.techs": "Tecnologías",
    "section.projects": "Proyectos",
    "section.projects.subtitle": "Lo que construí",
    "section.about": "Sobre mí",
    "about.subtitle": "Diseño con criterio, desarrollo con cuidado.",
    "about.text": "Trabajo en desarrollo frontend poniendo atención en el detalle visual, la experiencia de usuario y la calidad del código.\n\nMe interesa transformar ideas en interfaces claras y funcionales, y seguir creciendo en proyectos reales donde el diseño y la técnica se encuentren.",
    "card.viewProject": "Ver proyecto",
    "card.code": "Código",
  },
  en: {
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.title": "I'm Juliana Bonet",
    "hero.description": "Frontend web developer focused on building clear, functional, and thoughtful interfaces. I combine visual judgment, user experience, and code to turn ideas into simple and effective digital products.",
    "hero.contact": "Contact me",
    "section.techs": "Technologies",
    "section.projects": "Projects",
    "section.projects.subtitle": "What I've built",
    "section.about": "About me",
    "about.subtitle": "Design with judgment, built with care.",
    "about.text": "I work in frontend development with close attention to visual detail, user experience, and code quality.\n\nI'm interested in turning ideas into clear and functional interfaces, and growing through real projects where design and technique meet.",
    "card.viewProject": "View project",
    "card.code": "Code",
  },
}

const AppContext = createContext<AppContextType | null>(null)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light")
  const [lang, setLang] = useState<Lang>("es")

  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as Theme) ?? "light"
    const savedLang = (localStorage.getItem("lang") as Lang) ?? "es"
    setTheme(savedTheme)
    setLang(savedLang)
    document.documentElement.setAttribute("data-theme", savedTheme)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem("lang", lang)
  }, [lang])

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"))
  const toggleLang = () => setLang((prev) => (prev === "es" ? "en" : "es"))

  const t = (key: string): string =>
    translations[lang][key as keyof typeof translations["es"]] ?? key

  return (
    <AppContext.Provider value={{ theme, toggleTheme, lang, toggleLang, t }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error("useApp must be used within AppProvider")
  return ctx
}