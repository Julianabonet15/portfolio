import "./globals.css";
import Navbar from "../components/navbar";

export const metadata = {
  title: "Juli Bonet | Portfolio",
  description: "Portfolio de desarrolladora web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
