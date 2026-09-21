import { PrismaClient } from "@prisma/client";
import { VEHICLE_MAKES, VEHICLE_MODELS, VEHICLE_GENERATIONS } from "../src/lib/data/vehicles";
import { BRANDS } from "../src/lib/data/brands";
import { CATEGORIES } from "../src/lib/data/categories";
import { PRODUCTS } from "../src/lib/data/products";

const prisma = new PrismaClient();

async function main() {
  console.log("Iniciando sembrado de datos en SQLite (dev.db)...");

  // 1. Vehicle Makes
  for (const make of VEHICLE_MAKES) {
    await prisma.vehicleMake.upsert({
      where: { id: make.id },
      update: {
        name: make.name,
        slug: make.slug,
        country: make.country,
      },
      create: {
        id: make.id,
        name: make.name,
        slug: make.slug,
        country: make.country,
      },
    });
  }
  console.log(`✓ ${VEHICLE_MAKES.length} Marcas vehiculares insertadas.`);

  // 2. Vehicle Models
  for (const model of VEHICLE_MODELS) {
    await prisma.vehicleModel.upsert({
      where: { id: model.id },
      update: {
        name: model.name,
        slug: model.slug,
        makeId: model.makeId,
      },
      create: {
        id: model.id,
        name: model.name,
        slug: model.slug,
        makeId: model.makeId,
      },
    });
  }
  console.log(`✓ ${VEHICLE_MODELS.length} Modelos vehiculares insertados.`);

  // 3. Vehicle Generations
  for (const gen of VEHICLE_GENERATIONS) {
    await prisma.vehicleGeneration.upsert({
      where: { id: gen.id },
      update: {
        name: gen.name,
        slug: gen.id.replace("gen-", ""),
        startYear: gen.yearFrom,
        endYear: gen.yearTo ?? null,
        chassisCode: gen.code,
        platform: gen.engine,
        imageUrl: gen.imageUrl || "/images/cars/mustang-biturbo.jpg",
        modelId: gen.modelId,
      },
      create: {
        id: gen.id,
        name: gen.name,
        slug: gen.id.replace("gen-", ""),
        startYear: gen.yearFrom,
        endYear: gen.yearTo ?? null,
        chassisCode: gen.code,
        platform: gen.engine,
        imageUrl: gen.imageUrl || "/images/cars/mustang-biturbo.jpg",
        modelId: gen.modelId,
      },
    });
  }
  console.log(`✓ ${VEHICLE_GENERATIONS.length} Generaciones vehiculares ZRPM insertadas con imágenes reales.`);

  // 4. Brands
  for (const brand of BRANDS) {
    await prisma.brand.upsert({
      where: { id: brand.id },
      update: {
        name: brand.name,
        slug: brand.slug,
        description: brand.description,
        country: brand.country,
        logoUrl: brand.logoUrl,
        isOfficialDistributor: brand.isOfficialDistributor ?? false,
      },
      create: {
        id: brand.id,
        name: brand.name,
        slug: brand.slug,
        description: brand.description,
        country: brand.country,
        logoUrl: brand.logoUrl,
        isOfficialDistributor: brand.isOfficialDistributor ?? false,
      },
    });
  }
  console.log(`✓ ${BRANDS.length} Fabricantes y marcas de competición insertados.`);

  // 5. Categories
  for (const cat of CATEGORIES) {
    await prisma.category.upsert({
      where: { id: cat.id },
      update: {
        name: cat.name,
        slug: cat.slug,
        description: cat.description,
        iconName: cat.iconName,
        imageUrl: cat.imageUrl,
        carModel: cat.carModel ?? null,
        isPopularBadge: cat.isPopularBadge ?? null,
      },
      create: {
        id: cat.id,
        name: cat.name,
        slug: cat.slug,
        description: cat.description,
        iconName: cat.iconName,
        imageUrl: cat.imageUrl,
        carModel: cat.carModel ?? null,
        isPopularBadge: cat.isPopularBadge ?? null,
      },
    });
  }
  console.log(`✓ ${CATEGORIES.length} Categorías de piezas insertadas.`);

  // 6. Products
  for (const prod of PRODUCTS) {
    await prisma.product.upsert({
      where: { id: prod.id },
      update: {
        sku: prod.sku,
        name: prod.name,
        slug: prod.slug,
        brandId: prod.brand.id,
        categoryId: prod.category.id,
        priceCLP: prod.priceCLP,
        originalPriceCLP: prod.originalPriceCLP ?? null,
        isOnSale: prod.isOnSale ?? false,
        stock: prod.stock,
        availability: prod.availability,
        estimatedDeliveryDays: prod.estimatedDeliveryDays,
        shortDescription: prod.shortDescription,
        description: prod.description,
        specifications: JSON.stringify(prod.specifications ?? {}),
        images: JSON.stringify(prod.images ?? []),
        compatibleGenerations: JSON.stringify(prod.compatibleGenerations ?? []),
        isFeatured: prod.isFeatured ?? false,
        isPopular: prod.isPopular ?? false,
      },
      create: {
        id: prod.id,
        sku: prod.sku,
        name: prod.name,
        slug: prod.slug,
        brandId: prod.brand.id,
        categoryId: prod.category.id,
        priceCLP: prod.priceCLP,
        originalPriceCLP: prod.originalPriceCLP ?? null,
        isOnSale: prod.isOnSale ?? false,
        stock: prod.stock,
        availability: prod.availability,
        estimatedDeliveryDays: prod.estimatedDeliveryDays,
        shortDescription: prod.shortDescription,
        description: prod.description,
        specifications: JSON.stringify(prod.specifications ?? {}),
        images: JSON.stringify(prod.images ?? []),
        compatibleGenerations: JSON.stringify(prod.compatibleGenerations ?? []),
        isFeatured: prod.isFeatured ?? false,
        isPopular: prod.isPopular ?? false,
      },
    });
  }
  console.log(`✓ ${PRODUCTS.length} Productos de competición y pastillas/X-Pipe insertados en SQLite.`);

  console.log("Sembrado de datos finalizado con éxito.");
}

main()
  .catch((e) => {
    console.error("Error al sembrar la base de datos:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });