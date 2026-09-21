import { NextRequest, NextResponse } from "next/server";
import { PRODUCTS } from "@/lib/data/products";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const category = searchParams.get("category");
  const brand = searchParams.get("brand");
  const generation = searchParams.get("generation") || searchParams.get("generacion");
  const search = searchParams.get("search");
  const inStockOnly = searchParams.get("inStock") === "true";
  const sku = searchParams.get("sku");
  const sort = searchParams.get("sort") || "featured";

  try {
    // 1. Query Prisma database
    if (sku) {
      const dbProduct = await prisma.product.findUnique({
        where: { sku },
        include: { brand: true, category: true },
      });
      if (dbProduct) {
        return NextResponse.json({
          success: true,
          source: "database",
          data: {
            ...dbProduct,
            specifications: JSON.parse(dbProduct.specifications || "{}"),
            images: JSON.parse(dbProduct.images || "[]"),
            compatibleGenerations: JSON.parse(dbProduct.compatibleGenerations || "[]"),
          },
        });
      }
    } else {
      const dbProducts = await prisma.product.findMany({
        include: { brand: true, category: true },
        orderBy:
          sort === "price-asc"
            ? { priceCLP: "asc" }
            : sort === "price-desc"
            ? { priceCLP: "desc" }
            : sort === "name"
            ? { name: "asc" }
            : { createdAt: "desc" },
      });

      if (dbProducts && dbProducts.length > 0) {
        let mapped = dbProducts.map((p) => ({
          ...p,
          specifications: JSON.parse(p.specifications || "{}"),
          images: JSON.parse(p.images || "[]"),
          compatibleGenerations: JSON.parse(p.compatibleGenerations || "[]") as string[],
        }));

        if (category) {
          mapped = mapped.filter((p) => p.category.slug === category);
        }
        if (brand) {
          mapped = mapped.filter((p) => p.brand.slug === brand);
        }
        if (generation) {
          mapped = mapped.filter((p) => p.compatibleGenerations.includes(generation));
        }
        if (inStockOnly) {
          mapped = mapped.filter((p) => p.availability === "in_stock");
        }
        if (search && search.trim()) {
          const q = search.toLowerCase();
          mapped = mapped.filter(
            (p) =>
              p.name.toLowerCase().includes(q) ||
              p.sku.toLowerCase().includes(q) ||
              p.shortDescription.toLowerCase().includes(q) ||
              p.brand.name.toLowerCase().includes(q)
          );
        }

        return NextResponse.json({
          success: true,
          source: "database",
          total: mapped.length,
          data: mapped,
        });
      }
    }
  } catch (dbError) {
    console.warn("Prisma query fallback:", dbError);
  }

  // Fallback to memory catalog
  if (sku) {
    const product = PRODUCTS.find(
      (p) => p.sku.toLowerCase() === sku.toLowerCase()
    );
    if (!product) {
      return NextResponse.json(
        { success: false, message: `Producto con SKU ${sku} no encontrado.` },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, source: "memory-fallback", data: product });
  }

  let filtered = [...PRODUCTS];

  if (category) {
    filtered = filtered.filter((p) => p.category.slug === category);
  }
  if (brand) {
    filtered = filtered.filter((p) => p.brand.slug === brand);
  }
  if (generation) {
    filtered = filtered.filter((p) =>
      p.compatibleGenerations.includes(generation)
    );
  }
  if (inStockOnly) {
    filtered = filtered.filter((p) => p.availability === "in_stock");
  }
  if (search && search.trim()) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.brand.name.toLowerCase().includes(q)
    );
  }

  if (sort === "price-asc") {
    filtered.sort((a, b) => a.priceCLP - b.priceCLP);
  } else if (sort === "price-desc") {
    filtered.sort((a, b) => b.priceCLP - a.priceCLP);
  } else if (sort === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  return NextResponse.json({
    success: true,
    source: "memory-fallback",
    total: filtered.length,
    data: filtered,
  });
}
