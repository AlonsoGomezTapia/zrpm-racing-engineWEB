import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Oxanium } from "next/font/google";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { QuickGarageModal } from "@/components/vehicle/QuickGarageModal";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oxanium = Oxanium({
  variable: "--font-oxanium",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zrpm.cl"),
  title: {
    default: "ZRPM Racing Engine | Performance Automotriz & Repuestos de Competición",
    template: "%s | ZRPM Racing Engine",
  },
  description:
    "Taller de alto rendimiento automotriz en Santiago de Chile (Victoria 8766, La Cisterna). Especialistas en reprogramación de ECU, banco dinamómetro, kits Bi-Turbo, superchargers Roush/Whipple y frenos Brembo.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "ZRPM Racing Engine",
    "reprogramacion ecu chile",
    "banco dinamometro santiago",
    "taller performance la cisterna",
    "ford mustang repuestos chile",
    "camaro ss headers chile",
    "dodge challenger srt 392 chile",
    "frenos brembo chile",
    "kits twin turbo hellion chile",
    "importacion repuestos usa chile",
  ],
  authors: [{ name: "ZRPM Racing Engine" }],
  creator: "ZRPM Racing Engine",
  publisher: "ZRPM Racing Engine",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "ZRPM Racing Engine | Performance Automotriz & Repuestos",
    description:
      "Taller motorsport en Victoria 8766, La Cisterna. Especialistas en proyectos extremos V8 americanos, reprogramación en dinamómetro y repuestos de competición.",
    url: "https://zrpm.cl",
    siteName: "ZRPM Racing Engine",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/images/hero/workshop-dyno.jpg",
        width: 1200,
        height: 630,
        alt: "ZRPM Racing Engine Taller y Dinamómetro La Cisterna",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZRPM Racing Engine | Performance Automotriz",
    description:
      "Potencia tu vehículo americano en el taller de alto rendimiento líder en Santiago de Chile. Proyectos Bi-Turbo, Superchargers y reprogramación.",
    images: ["/images/hero/workshop-dyno.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const globalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AutoRepair",
      "@id": "https://zrpm.cl/#workshop",
      name: "ZRPM Racing Engine",
      url: "https://zrpm.cl",
      logo: "https://zrpm.cl/images/logo/zrpm-logo.png",
      image: "https://zrpm.cl/images/hero/workshop-dyno.jpg",
      description:
        "Taller motorsport de alto rendimiento automotriz, banco dinamómetro de rodillos y reprogramación de ECU para vehículos americanos en Santiago de Chile.",
      telephone: "+56990550474",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Victoria 8766",
        addressLocality: "La Cisterna",
        addressRegion: "Región Metropolitana",
        postalCode: "7970000",
        addressCountry: "CL",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -33.5327,
        longitude: -70.6669,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      priceRange: "$$$$",
    },
    {
      "@type": "AutoPartsStore",
      "@id": "https://zrpm.cl/#store",
      name: "ZRPM Racing Engine Store",
      url: "https://zrpm.cl/catalogo",
      description:
        "Tienda de repuestos de competición, inducción, escapes, sobrealimentación y frenos Brembo para Ford Mustang, Camaro, Corvette y Dodge.",
      telephone: "+56990550474",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Victoria 8766",
        addressLocality: "La Cisterna",
        addressRegion: "Región Metropolitana",
        addressCountry: "CL",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${inter.variable} ${oxanium.variable} ${jetbrainsMono.variable} font-sans bg-[#08080A] text-[#F3F4F6] min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
        <TopBar />
        <Navbar />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />

        {/* Global Modals and Drawers */}
        <CartDrawer />
        <QuickGarageModal />
      </body>
    </html>
  );
}
