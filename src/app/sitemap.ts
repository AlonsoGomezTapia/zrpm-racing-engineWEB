import { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/data/products";
import { VEHICLE_GENERATIONS } from "@/lib/data/vehicles";
import { CATEGORIES } from "@/lib/data/categories";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://zrpm.cl";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Core static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/catalogo`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/vehiculos`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/servicios`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/importaciones`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contacto`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/carrito`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];

  // Dynamic product pages
  const productPages: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
    url: `${BASE_URL}/catalogo/${product.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Categories in catalog
  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${BASE_URL}/catalogo?categoria=${cat.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  // Vehicle platforms in catalog
  const vehiclePages: MetadataRoute.Sitemap = VEHICLE_GENERATIONS.map((gen) => ({
    url: `${BASE_URL}/catalogo?generacion=${gen.id}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticPages, ...productPages, ...categoryPages, ...vehiclePages];
}