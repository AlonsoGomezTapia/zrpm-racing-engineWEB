import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Datos de formulario inválidos",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, phone, email, vehicle, serviceType, message, preferredDate } = result.data;
    const referenceId = `ZRPM-SOL-${Math.floor(100000 + Math.random() * 900000)}`;

    let savedInDb = false;
    try {
      await prisma.contactRequest.create({
        data: {
          referenceId,
          fullName: name,
          email,
          phone,
          vehicle: vehicle || null,
          serviceType,
          message,
          preferredDate: preferredDate || null,
          status: "PENDING",
        },
      });
      savedInDb = true;
    } catch (dbError) {
      console.warn("No se pudo guardar la solicitud en la base de datos (fallback activo):", dbError);
    }

    return NextResponse.json(
      {
        success: true,
        referenceId,
        message: "Solicitud de contacto y agendamiento recibida exitosamente.",
        data: {
          referenceId,
          name,
          email,
          phone,
          vehicle,
          serviceType,
          preferredDate,
          persisted: savedInDb,
          receivedAt: new Date().toISOString(),
        },
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Error interno al procesar la solicitud de contacto.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  let count = 0;
  try {
    count = await prisma.contactRequest.count();
  } catch {
    // fallback
  }

  return NextResponse.json({
    status: "online",
    service: "ZRPM Racing Engine - Contact & Appointment API",
    version: "1.0.0",
    workshop: "Victoria 8766, La Cisterna, Santiago",
    totalRequestsStored: count,
  });
}
