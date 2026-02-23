import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { AppProvider } from "@/context/AppContext"
import { Playfair_Display, Inter } from "next/font/google"
import type { Metadata } from "next"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Juliana Bonet | Frontend Developer",
  description:
    "Desarrolladora frontend especializada en React y Next.js. Creo interfaces claras, funcionales y centradas en la experiencia de usuario.",
  openGraph: {
    title: "Juliana Bonet | Frontend Developer",
    description:
      "Frontend Developer enfocada en React y Next.js. Diseño y desarrollo interfaces claras y funcionales.",
    url: "https://portfolio-juliana-bonet.vercel.app/",
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
    <html lang="es" suppressHydrationWarning className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'light';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <AppProvider>
          <Navbar />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  )
}