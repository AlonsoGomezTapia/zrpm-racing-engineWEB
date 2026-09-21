import { NextRequest, NextResponse } from "next/server";
import { quoteRequestSchema } from "@/lib/validations/quote";
import { PRODUCTS } from "@/lib/data/products";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = quoteRequestSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Datos de cotización inválidos",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const {
      name,
      rut,
      phone,
      email,
      city,
      items,
      deliveryMethod,
      wantsInstallation,
      vehicleNotes,
    } = result.data;

    // Server-side calculation and item verification from authentic catalog
    const validatedItems = [];
    let calculatedSubtotalCLP = 0;

    for (const item of items) {
      const product = PRODUCTS.find((p) => p.id === item.productId);
      if (!product) {
        return NextResponse.json(
          {
            success: false,
            message: `El producto con ID "${item.productId}" no existe en el catálogo activo.`,
          },
          { status: 400 }
        );
      }

      const itemTotal = product.priceCLP * item.quantity;
      calculatedSubtotalCLP += itemTotal;

      validatedItems.push({
        id: product.id,
        sku: product.sku,
        name: product.name,
        brand: product.brand.name,
        unitPriceCLP: product.priceCLP,
        quantity: item.quantity,
        totalCLP: itemTotal,
      });
    }

    const netAmountCLP = Math.round(calculatedSubtotalCLP / 1.19);
    const ivaAmountCLP = calculatedSubtotalCLP - netAmountCLP;
    const quoteId = `ZRPM-COT-${Math.floor(100000 + Math.random() * 900000)}`;

    let savedInDb = false;
    try {
      await prisma.quote.create({
        data: {
          quoteId,
          rut: rut || "S/RUT",
          fullName: name,
          email,
          phone,
          city: city || null,
          deliveryMethod,
          notes: vehicleNotes || null,
          subtotalCLP: netAmountCLP,
          ivaCLP: ivaAmountCLP,
          totalCLP: calculatedSubtotalCLP,
          status: "PENDING",
          items: {
            create: validatedItems.map((vi) => ({
              productId: vi.id,
              sku: vi.sku,
              name: vi.name,
              unitPriceCLP: vi.unitPriceCLP,
              quantity: vi.quantity,
              lineTotalCLP: vi.totalCLP,
            })),
          },
        },
      });
      savedInDb = true;
    } catch (dbError) {
      console.warn("No se pudo guardar la cotización en base de datos (fallback activo):", dbError);
    }

    return NextResponse.json(
      {
        success: true,
        quoteId,
        message: "Cotización formal generada exitosamente por el servidor de ZRPM.",
        data: {
          quoteId,
          createdAt: new Date().toISOString(),
          customer: {
            name,
            rut: rut || null,
            phone,
            email,
            city,
            vehicleNotes: vehicleNotes || null,
          },
          order: {
            items: validatedItems,
            deliveryMethod,
            wantsInstallation,
            financials: {
              subtotalNetoCLP: netAmountCLP,
              iva19CLP: ivaAmountCLP,
              totalCLP: calculatedSubtotalCLP,
              currency: "CLP",
            },
            persisted: savedInDb,
          },
        },
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Error interno al procesar la cotización.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  let count = 0;
  try {
    count = await prisma.quote.count();
  } catch {
    // fallback
  }

  return NextResponse.json({
    status: "online",
    service: "ZRPM Racing Engine - Quotation Engine API",
    version: "1.0.0",
    totalQuotesStored: count,
  });
}
