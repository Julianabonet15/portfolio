import Link from "next/link"
import { Github, Linkedin, Instagram, MessageCircle } from "lucide-react"

const SOCIALS = [
  { href: "https://github.com/Julianabonet15", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/juliana-bonet", label: "LinkedIn", icon: Linkedin },
  { href: "https://www.instagram.com/juli.bonet/", label: "Instagram", icon: Instagram },
  { href: "https://wa.me/5492477345930", label: "WhatsApp", icon: MessageCircle },
]

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-5 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
      <p className="text-sm text-[var(--text-secondary)]">
        © {new Date().getFullYear()} Juliana Bonet
      </p>

      <div className="flex gap-2">
        {SOCIALS.map(({ href, label, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            aria-label={label}
            className="grid place-items-center w-11 h-11 rounded-full border border-[var(--border)] text-[var(--text-secondary)] transition hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <Icon size={18} />
          </Link>
        ))}
      </div>
    </footer>
  )
}
