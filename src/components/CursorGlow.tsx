"use client"

import { useEffect, useRef } from "react"

// Luz suave que sigue al mouse (solo en pantallas con puntero)
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return

    const onMove = (e: PointerEvent) => {
      ref.current?.style.setProperty("--x", `${e.clientX}px`)
      ref.current?.style.setProperty("--y", `${e.clientY}px`)
    }
    window.addEventListener("pointermove", onMove)
    return () => window.removeEventListener("pointermove", onMove)
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
      style={{
        background: "radial-gradient(500px circle at var(--x, 50%) var(--y, 30%), var(--glow), transparent 70%)",
      }}
    />
  )
}
