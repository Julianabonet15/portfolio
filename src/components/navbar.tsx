"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Moon, Sun, Languages, Menu, X } from "lucide-react"
import { useApp } from "@/context/AppContext"

const LINKS = [
  { id: "proyectos", key: "nav.projects" },
  { id: "sobre-mi", key: "nav.about" },
  { id: "contacto", key: "nav.contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState("")
  const { theme, toggleTheme, lang, toggleLang, t } = useApp()

  // Barra de progreso de scroll y sección activa
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)

      const current = LINKS.findLast(({ id }) => {
        const el = document.getElementById(id)
        return el && el.getBoundingClientRect().top < window.innerHeight * 0.4
      })
      setActive(current?.id ?? "")
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
      <nav className="relative max-w-4xl mx-auto flex items-center justify-between rounded-full border border-[var(--border)] bg-[var(--navbar-bg)] backdrop-blur-xl px-5 py-2.5 shadow-lg shadow-black/5 overflow-hidden">

        {/* Progreso de scroll */}
        <span
          aria-hidden
          className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)]"
          style={{ width: `${progress * 100}%` }}
        />

        <Link href="/" className="text-base font-semibold tracking-tight">
          Juliana Bonet
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1 text-sm">
          {LINKS.map(({ id, key }) => (
            <li key={id}>
              <Link
                href={`/#${id}`}
                className={`px-4 py-1.5 rounded-full transition-colors ${
                  active === id
                    ? "bg-[var(--foreground)] text-[var(--background)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--foreground)]"
                }`}
              >
                {t(key)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 text-xs font-semibold px-2.5 py-2 rounded-full text-[var(--text-secondary)] hover:text-[var(--foreground)] hover:bg-[var(--border)] transition"
            aria-label="Cambiar idioma"
          >
            <Languages size={15} />
            {lang === "es" ? "EN" : "ES"}
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-[var(--text-secondary)] hover:text-[var(--foreground)] hover:bg-[var(--border)] transition hover:rotate-45"
            aria-label="Cambiar tema"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-full hover:bg-[var(--border)] transition"
            aria-label="Abrir menú"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Menú mobile */}
      {open && (
        <div className="md:hidden max-w-4xl mx-auto mt-2 rounded-3xl border border-[var(--border)] bg-[var(--navbar-bg)] backdrop-blur-xl animate-fade-up">
          <ul className="flex flex-col p-3 text-lg font-[family-name:var(--font-playfair)] font-semibold">
            {LINKS.map(({ id, key }) => (
              <li key={id}>
                <Link
                  href={`/#${id}`}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-2xl hover:bg-[var(--border)] transition"
                >
                  {t(key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
