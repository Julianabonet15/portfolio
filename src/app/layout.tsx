import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Juliana Bonet | Frontend Developer",
  description:
    "Desarrolladora frontend especializada en React y Next.js. Creo interfaces claras, funcionales y centradas en la experiencia de usuario.",
  openGraph: {
    title: "Juliana Bonet | Frontend Developer",
    description:
      "Frontend Developer enfocada en React y Next.js. Diseño y desarrollo interfaces claras y funcionales.",
    url: "https://TU-DOMINIO.com", // después lo cambiás
    siteName: "Juliana Bonet",
    images: [
      {
        url: "images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio de Juliana Bonet",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
