import type { Metadata, Viewport } from "next";
import { Montserrat, Playfair_Display, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { RevealObserver } from "@/components/ui/RevealObserver";
import { ScrollUI } from "@/components/ui/ScrollUI";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { SITE } from "@/lib/site";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  // En el sitio solo se usa la cursiva: descargamos solo esa variante.
  style: ["italic"],
  display: "swap",
});

// Serif editorial para las páginas de universidades (estilo Harvard / Stanford).
// preload: false → solo se descarga en las páginas que realmente la usan.
const academic = Source_Serif_4({
  variable: "--font-academic-src",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Asesoría de Tesis Universidad Perú | 100% Online",
    template: "%s",
  },
  description:
    "¿Necesitas asesoría de tesis universitaria en Perú? Especialistas en UNMSM, PUCP, UCV, UPC y más. ¡Consulta gratis!",
  applicationName: SITE.name,
  icons: { icon: "/images/logo-icon.webp", apple: "/images/logo-icon.webp" },
  openGraph: {
    type: "website",
    locale: "es_PE",
    siteName: "tesisuniversidadperu",
    images: [{ url: "/images/logo.webp", width: 1200, height: 1200, alt: "Tesis Universidad Perú" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#04c3d9",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/images/logo.webp`,
  email: SITE.email,
  telephone: SITE.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Alameda Lorenzo de Vidaurre 216, Los Próceres",
    addressLocality: "Santiago de Surco",
    addressRegion: "Lima",
    addressCountry: "PE",
  },
  areaServed: "PE",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`no-js ${montserrat.variable} ${playfair.variable} ${academic.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col">
        {/* Si hay JS, activamos las animaciones de aparición; si no, todo queda visible. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.remove('no-js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <ScrollUI />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <RevealObserver />
        <SmoothScroll />
      </body>
    </html>
  );
}
