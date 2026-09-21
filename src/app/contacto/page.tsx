import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfoCards } from "@/components/contact/ContactInfoCards";
import { ContactForm } from "@/components/contact/ContactForm";
import { InteractiveWorkshopMap } from "@/components/contact/InteractiveWorkshopMap";
import { ContactFAQ } from "@/components/contact/ContactFAQ";

export const metadata: Metadata = {
  title: "Contacto, Taller & Dinamómetro en La Cisterna | ZRPM Racing Engine",
  description:
    "Visita nuestro taller mecánico y banco dinamómetro en Victoria 8766, La Cisterna, Santiago de Chile. Coordinación de reprogramaciones, mantenciones y contacto directo por WhatsApp al +56 9 9055 0474.",
  openGraph: {
    title: "Contacto & Ubicación Taller | ZRPM Racing Engine Chile",
    description:
      "Taller de alto rendimiento, banco dinamómetro y repuestos americanos en Victoria 8766, La Cisterna. Contáctanos por WhatsApp o agenda tu visita técnica.",
    url: "https://zrpm.cl/contacto",
    siteName: "ZRPM Racing Engine",
    locale: "es_CL",
    type: "website",
    images: ["/images/hero/workshop-dyno.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto & Ubicación Taller | ZRPM Racing Engine Chile",
    description:
      "Taller de alto rendimiento, banco dinamómetro y repuestos americanos en Victoria 8766, La Cisterna. Contáctanos por WhatsApp o agenda tu visita técnica.",
    images: ["/images/hero/workshop-dyno.jpg"],
  },
  alternates: {
    canonical: "https://zrpm.cl/contacto",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "ZRPM Racing Engine",
    image: "https://zrpm.cl/images/logo/zrpm-logo.png",
    telephone: "+56990550474",
    email: "contacto@zrpm.cl",
    url: "https://zrpm.cl",
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
      latitude: -33.5284,
      longitude: -70.6622,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    priceRange: "$$$",
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 pb-20">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center space-x-2 text-xs text-neutral-400 mb-6"
        >
          <Link
            href="/"
            className="flex items-center hover:text-white transition-colors text-neutral-500"
          >
            <Home className="w-3.5 h-3.5 mr-1" />
            <span>Inicio</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
          <span className="text-white font-medium">Taller & Contacto</span>
        </nav>

        {/* Hero Section */}
        <ContactHero />

        {/* Contact Info Cards */}
        <ContactInfoCards />

        {/* Form and Map Two-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="lg:col-span-5">
            <InteractiveWorkshopMap />
          </div>
        </div>

        {/* FAQ Section */}
        <ContactFAQ />
      </div>
    </div>
  );
}
