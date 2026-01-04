"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-[var(--navbar-bg)] border-b border-[var(--border)] fixed top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-base font-semibold tracking-tight"
        >
          Juli Bonet
        </Link>

        {/* Botón hamburguesa (solo mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
          aria-label="Abrir menú"
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-[var(--text-secondary)]">
          <li>
            <Link href="#proyectos" className="hover:text-[var(--foreground)] transition">
              Proyectos
            </Link>
          </li>
          <li>
            <Link href="#sobre-mi" className="hover:text-[var(--foreground)] transition">
              Sobre mí
            </Link>
          </li>
          
        </ul>
      </nav>

      {/* Menú mobile desplegable */}
      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--navbar-bg)]">
          <ul className="flex flex-col px-6 py-4 gap-4 text-sm">
            <li>
              <Link href="#proyectos" onClick={() => setOpen(false)}>
                Proyectos
              </Link>
            </li>
            <li>
              <Link href="#sobre-mi" onClick={() => setOpen(false)}>
                Sobre mí
              </Link>
            </li>
            <li>
              <Link href="#contacto" onClick={() => setOpen(false)}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
