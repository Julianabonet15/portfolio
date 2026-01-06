import Link from "next/link"
import { Github, Linkedin, Instagram, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--border)]">

      <div className="max-w-6xl mx-auto px-5 py-6 flex flex-col items-center gap-4">


        {/* ICONOS */}
        <div className="flex gap-6">
          <Link
            href="https://github.com/Julianabonet15"
            target="_blank"
            aria-label="GitHub"
            className="hover:opacity-70 transition"
          >
            <Github size={22} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/juliana-bonet"
            target="_blank"
            aria-label="LinkedIn"
            className="hover:opacity-70 transition"
          >
            <Linkedin size={22} />
          </Link>

          <Link
            href="https://www.instagram.com/juli.bonet/"
            target="_blank"
            aria-label="Instagram"
            className="hover:opacity-70 transition"
          >
            <Instagram size={22} />
          </Link>

          <Link
            href="https://wa.me/5492477345930"
            target="_blank"
            aria-label="WhatsApp"
            className="hover:opacity-70 transition"
          >
            <MessageCircle size={22} />
          </Link>
        </div>

        {/* TEXTO */}
        <p className="text-xs text-[var(--text-secondary)]">
          © {new Date().getFullYear()} Juliana Bonet
        </p>
      </div>
    </footer>
  )
}
