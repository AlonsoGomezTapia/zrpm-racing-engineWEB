import { NextRequest, NextResponse } from "next/server";
import {
  VEHICLE_MAKES,
  VEHICLE_MODELS,
  VEHICLE_GENERATIONS,
  getMakeById,
  getModelById,
  getGenerationById,
} from "@/lib/data/vehicles";
import { getProductCountForGeneration } from "@/lib/data/products";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const makeParam = searchParams.get("make");
  const generationId = searchParams.get("id");

  try {
    if (generationId) {
      const dbGen = await prisma.vehicleGeneration.findUnique({
        where: { id: generationId },
        include: {
          model: {
            include: { make: true },
          },
        },
      });
      if (dbGen) {
        return NextResponse.json({
          success: true,
          source: "database",
          data: {
            id: dbGen.id,
            modelId: dbGen.modelId,
            code: dbGen.chassisCode,
            name: dbGen.name,
            yearFrom: dbGen.startYear,
            yearTo: dbGen.endYear ?? undefined,
            engine: dbGen.platform,
            imageUrl: dbGen.imageUrl,
            model: dbGen.model,
            make: dbGen.model?.make,
            compatiblePartsCount: getProductCountForGeneration(dbGen.id),
          },
        });
      }
    } else if (!makeParam) {
      const [dbMakes, dbModels, dbGens] = await Promise.all([
        prisma.vehicleMake.findMany(),
        prisma.vehicleModel.findMany(),
        prisma.vehicleGeneration.findMany({ include: { model: true } }),
      ]);

      if (dbMakes.length > 0) {
        return NextResponse.json({
          success: true,
          source: "database",
          totalGenerations: dbGens.length,
          data: {
            makes: dbMakes,
            models: dbModels,
            generations: dbGens.map((g) => ({
              id: g.id,
              modelId: g.modelId,
              code: g.chassisCode,
              name: g.name,
              yearFrom: g.startYear,
              yearTo: g.endYear ?? undefined,
              engine: g.platform,
              imageUrl: g.imageUrl,
              compatiblePartsCount: getProductCountForGeneration(g.id),
            })),
          },
        });
      }
    }
  } catch (dbError) {
    console.warn("Vehicles Prisma query fallback:", dbError);
  }

  // Fallback to static verified structures
  if (generationId) {
    const generation = getGenerationById(generationId);
    if (!generation) {
      return NextResponse.json(
        { success: false, message: "Generación vehicular no encontrada." },
        { status: 404 }
      );
    }
    const model = getModelById(generation.modelId);
    const make = model ? getMakeById(model.makeId) : null;
    const compatiblePartsCount = getProductCountForGeneration(generation.id);

    return NextResponse.json({
      success: true,
      source: "memory-fallback",
      data: {
        ...generation,
        model,
        make,
        compatiblePartsCount,
      },
    });
  }

  if (makeParam) {
    const make =
      VEHICLE_MAKES.find((m) => m.id === makeParam || m.slug === makeParam);
    if (!make) {
      return NextResponse.json(
        { success: false, message: "Marca vehicular no encontrada." },
        { status: 404 }
      );
    }
    const models = VEHICLE_MODELS.filter((m) => m.makeId === make.id);
    const generations = VEHICLE_GENERATIONS.filter((g) =>
      models.some((m) => m.id === g.modelId)
    );

    return NextResponse.json({
      success: true,
      source: "memory-fallback",
      data: {
        make,
        models,
        generations: generations.map((g) => ({
          ...g,
          compatiblePartsCount: getProductCountForGeneration(g.id),
        })),
      },
    });
  }

  const enrichedGenerations = VEHICLE_GENERATIONS.map((g) => ({
    ...g,
    compatiblePartsCount: getProductCountForGeneration(g.id),
  }));

  return NextResponse.json({
    success: true,
    source: "memory-fallback",
    totalGenerations: enrichedGenerations.length,
    data: {
      makes: VEHICLE_MAKES,
      models: VEHICLE_MODELS,
      generations: enrichedGenerations,
    },
  });
}
