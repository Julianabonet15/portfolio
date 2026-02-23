"use client"

import { useState } from "react"
import Link from "next/link"
import { Moon, Sun, Languages } from "lucide-react"
import { useApp } from "@/context/AppContext"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme, lang, toggleLang, t } = useApp()

  return (
    <header className="w-full bg-[var(--navbar-bg)] border-b border-[var(--border)] fixed top-0 z-50 transition-colors duration-300">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-base font-semibold tracking-tight">
          Juli Bonet
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-[var(--text-secondary)]">
          <li>
            <Link href="#proyectos" className="hover:text-[var(--foreground)] transition">
              {t("nav.projects")}
            </Link>
          </li>
          <li>
            <Link href="#sobre-mi" className="hover:text-[var(--foreground)] transition">
              {t("nav.about")}
            </Link>
          </li>

          {/* Separador */}
          <li className="w-px h-4 bg-[var(--border)]" />

          {/* Idioma */}
          <li>
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)] hover:text-[var(--foreground)] transition"
              aria-label="Cambiar idioma"
            >
              <Languages size={15} />
              {lang === "es" ? "EN" : "ES"}
            </button>
          </li>

          {/* Tema */}
          <li>
            <button
              onClick={toggleTheme}
              className="text-[var(--text-secondary)] hover:text-[var(--foreground)] transition"
              aria-label="Cambiar tema"
            >
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </button>
          </li>
        </ul>

        {/* Mobile: íconos + hamburguesa */}
        <div className="flex md:hidden items-center gap-4">
          <button onClick={toggleLang} className="text-[var(--text-secondary)]" aria-label="Idioma">
            <Languages size={17} />
          </button>
          <button onClick={toggleTheme} className="text-[var(--text-secondary)]" aria-label="Tema">
            {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
          </button>
          <button onClick={() => setOpen(!open)} className="text-xl" aria-label="Abrir menú">
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Menú mobile */}
      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--navbar-bg)]">
          <ul className="flex flex-col px-6 py-4 gap-4 text-sm">
            <li><Link href="#proyectos" onClick={() => setOpen(false)}>{t("nav.projects")}</Link></li>
            <li><Link href="#sobre-mi" onClick={() => setOpen(false)}>{t("nav.about")}</Link></li>
            <li><Link href="#contacto" onClick={() => setOpen(false)}>{t("nav.contact")}</Link></li>
          </ul>
        </div>
      )}
    </header>
  )
}