import Link from "next/link"

export default function Footer() {
  return (
   <footer className="mt-32 bg-[var(--navbar-bg)] border-t border-[var(--border)]">

      <div className="max-w-6xl mx-auto px-5 py-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-sm text-[var(--text-secondary)]">

        {/* Nombre */}
        <p>
          © {new Date().getFullYear()} Juliana Bonet
        </p>

        {/* Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/Julianabonet15"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-main)] transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/juliana-bonet"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-main)] transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
