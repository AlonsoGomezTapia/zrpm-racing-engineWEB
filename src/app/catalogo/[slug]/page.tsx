import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS, getProductBySlug, getRelatedProducts } from "@/lib/data/products";
import { ProductBreadcrumbs } from "@/components/product/ProductBreadcrumbs";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { ProductTechnicalTabs } from "@/components/product/ProductTechnicalTabs";
import { RelatedProducts } from "@/components/product/RelatedProducts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Producto No Encontrado | ZRPM Racing Engine",
      description: "El componente solicitado no fue encontrado en el catálogo de ZRPM.",
    };
  }

  const title = `${product.name} | ZRPM Racing Engine Chile`;
  const description = `${product.shortDescription} Disponible en ZRPM Racing Engine con despacho a todo Chile o instalación en taller La Cisterna.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://zrpm.cl/catalogo/${product.slug}`,
      siteName: "ZRPM Racing Engine",
      locale: "es_CL",
      type: "website",
      images: product.images && product.images.length > 0 ? [product.images[0]] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: product.images && product.images.length > 0 ? [product.images[0]] : [],
    },
    alternates: {
      canonical: `https://zrpm.cl/catalogo/${product.slug}`,
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product, 4);

  // Structured Data Schema for Google Rich Snippets
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: product.images,
    description: product.shortDescription,
    sku: product.sku,
    brand: {
      "@type": "Brand",
      name: product.brand.name,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "CLP",
      price: product.priceCLP,
      availability:
        product.availability === "in_stock"
          ? "https://schema.org/InStock"
          : "https://schema.org/PreOrder",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: "ZRPM Racing Engine",
      },
    },
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 pb-20">
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        {/* Breadcrumb navigation */}
        <ProductBreadcrumbs product={product} />

        {/* Main Product Section: Gallery + Info */}
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Image Gallery (5 cols on lg) */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="sticky top-24">
              <ProductGallery product={product} />
            </div>
          </div>

          {/* Right Column: Information, Pricing, Compatibility, CTAs (7 cols on lg) */}
          <div className="lg:col-span-6 xl:col-span-7">
            <ProductInfo product={product} />
          </div>
        </div>

        {/* Technical Tabs & Engineering Specs */}
        <ProductTechnicalTabs product={product} />

        {/* Related Components */}
        <RelatedProducts
          products={relatedProducts}
          currentCategorySlug={product.category.slug}
        />
      </div>
    </div>
  );
}
