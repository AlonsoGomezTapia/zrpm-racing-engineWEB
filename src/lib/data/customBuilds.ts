export interface CustomBuild {
  id: string;
  slug: string;
  title: string;
  vehicle: string;
  year: number;
  engine: string;
  powerHP: number;
  torqueNM: number;
  boostPSI: number;
  category: "Twin-Turbo Custom" | "Supercharged" | "Drift Competition" | "Track / Drag";
  highlight: string;
  description: string;
  modsList: string[];
  imageUrl: string;
  isFlagship?: boolean;
}

export const CUSTOM_BUILDS: CustomBuild[] = [
  {
    id: "build-mustang-biturbo",
    slug: "mustang-gt-bi-turbo-zrpm-1000hp",
    title: "Ford Mustang GT Bi-Turbo 1.000+ HP (El Más Popular de ZRPM)",
    vehicle: "Ford Mustang GT S550 / Shelby Front",
    year: 2018,
    engine: "Coyote 5.0L Ti-VCT V8 Bi-Turbo con salidas de capó",
    powerHP: 1050,
    torqueNM: 1180,
    boostPSI: 18,
    category: "Twin-Turbo Custom",
    highlight: "El auto más popular e icónico de ZRPM: Turbos gemelos montados en capó y calibración Dyno",
    description:
      "El proyecto insignia y más reconocido del taller ZRPM en Chile. Construcción extrema a medida con turbocompresores simétricos montados sobre el capó (Hood Exit), intercooler frontal masivo de alto flujo, bomba de aceite de cromoly reforzada y puesta a punto de inyección en dinamómetro de rodillos superando los 1.000 caballos de fuerza.",
    modsList: [
      "Twin Turbo System Custom ZRPM con salidas de escape en capó (Hood-Exit)",
      "Intercooler Frontal Bar & Plate de 5 pulgadas de alta densidad",
      "Válvulas Wastegate duales de 44mm con control electrónico de presión",
      "Bomba de aceite Billet con engranajes de cromoly para 8.000 RPM",
      "Inyectores de competición 1300cc y bomba de combustible triple de alto caudal",
      "Reprogramación electrónica personalizada a medida en Dinamómetro ZRPM",
      "Neumáticos traseros drag slick con llantas de competición Beadlock",
    ],
    imageUrl: "/images/cars/mustang-biturbo.jpg",
    isFlagship: true,
  },
  {
    id: "build-mustang-drift",
    slug: "mustang-gt-drift-spec-zrpm",
    title: "Ford Mustang GT Drift Spec ZRPM Performance",
    vehicle: "Ford Mustang GT S550",
    year: 2019,
    engine: "Coyote 5.0L V8 con mapa de aceleración rápida",
    powerHP: 540,
    torqueNM: 620,
    boostPSI: 0,
    category: "Drift Competition",
    highlight: "Vehículo oficial de drift preparado en taller ZRPM para competencias y exhibiciones",
    description:
      "Construido por ZRPM para drift profesional en Chile. Chasis aligerado, kit de ángulo de dirección extendido, suspensión roscada regulable en 3 vías, freno de mano hidráulico de doble caliper y radiador de aluminio sobredimensionado para disipar el calor en quemas continuas de neumático.",
    modsList: [
      "Kit de ángulo de giro Wisefab / Angle kit para derrape continuo",
      "Freno de mano hidráulico independiente con caliper trasero secundario",
      "Suspensión Coilovers de competición con tarado de rebote específico para drift",
      "Inducción de aire de alto flujo JLT con filtro cónico sobredimensionado",
      "Reprogramación de ECU con corte de inyección agresivo (Hard Cut Limiter)",
      "Diferencial autoblocante reforzado con bloqueo al 100%",
    ],
    imageUrl: "/images/cars/mustang-drift.jpg",
  },
  {
    id: "build-f150-drag",
    slug: "ford-f150-supercharged-drag-zrpm",
    title: "Ford F-150 Coyote 5.0L Supercharged (Drag Spec)",
    vehicle: "Ford F-150 Regular Cab",
    year: 2021,
    engine: "Coyote 5.0L V8 con Supercharger Roush / Whipple",
    powerHP: 720,
    torqueNM: 890,
    boostPSI: 11,
    category: "Supercharged",
    highlight: "Camioneta de arrancones de aceleración demoledora montada sobre neumáticos Hoosier",
    description:
      "Preparación especial realizada por ZRPM para cuarto de milla y calle. Sobrealimentada mediante compresor volumétrico, equipada con neumáticos Hoosier de alta tracción y puesta a punto de caja automática de 10 cambios.",
    modsList: [
      "Kit Supercharger volumétrico con intercambiador de calor agua-aire",
      "Neumáticos de arrancones Hoosier Drag Radials para máxima tracción",
      "Colectores de escape largos en acero inoxidable con bajante directa",
      "Calibración de software en motor y transmisión automática ZRPM",
      "Kit de suspensión rebajada con barras de tracción traseras antibounce",
    ],
    imageUrl: "/images/cars/ford-f150.jpg",
  },
  {
    id: "build-camaro-ss",
    slug: "chevrolet-camaro-ss-62-zrpm",
    title: "Chevrolet Camaro SS 6.2L V8 Upgrades ZRPM",
    vehicle: "Chevrolet Camaro SS",
    year: 2017,
    engine: "LT1 6.2L V8 con Colectores & Inducción",
    powerHP: 510,
    torqueNM: 660,
    boostPSI: 0,
    category: "Track / Drag",
    highlight: "Respuesta inmediata del bloque LT1 con capó de fibra y escape libre",
    description:
      "Mejora integral de aspiración natural en el motor LT1 6.2L. Instalación de colectores largos cerámicos, capó de fibra de carbono para reducción de peso en el eje delantero y calibración en dinamómetro.",
    modsList: [
      "Colectores de escape largos (Long Tube Headers) cerámicos",
      "Línea de escape de 3 pulgadas en acero inoxidable con X-Pipe central",
      "Capó liviano de fibra de carbono con extractor de calor funcional",
      "Admisión de aire frío de alto flujo con cuerpo de aceleración porteado",
      "Reprogramación Stage 2 con combustible de 97 octanos",
    ],
    imageUrl: "/images/cars/camaro-ss.jpg",
  },
  {
    id: "build-corvette-track",
    slug: "chevrolet-corvette-c7-z06-1000hp-zrpm",
    title: "Chevrolet Corvette C7 Z06 1.000 HP (Forged Internals ZRPM)",
    vehicle: "Chevrolet Corvette C7 Z06",
    year: 2017,
    engine: "Motor LT4 6.2L Supercharged con internals forjados (1.000 HP)",
    powerHP: 1000,
    torqueNM: 1250,
    boostPSI: 14,
    category: "Supercharged",
    highlight: "Proyecto de exhibición ZRPM: LT4 forjado de 1.000 HP, levas BTR y calibración HP Tuners",
    description:
      "Desarrollo oficial presentado por ZRPM Racing Engine. Bloque LT4 6.2L sobrealimentado con componentes internos forjados para soportar 1.000 HP, kit de levas Brian Tooley Racing Stage 2, colectores y escape Texas Speed, inducción Rotofab y gestión electrónica HP Tuners calibrada en dinamómetro.",
    modsList: [
      "Motor LT4 6.2L con internos forjados de competición (capacidad 1.000 HP)",
      "Supercharger Eaton TVS 1.7L de fábrica con polea sobredimensionada",
      "Kit de levas Stage 2 Brian Tooley Racing (BTR) con resortes duales",
      "Headers largos de escape y línea completa Texas Speed & Performance",
      "Admisión de aire frío Rotofab Cold Air Intake de alto caudal",
      "Reprogramación electrónica a medida con suite HP Tuners",
      "Parasol oficial y puesta a punto por ingenieros ZRPM Racing Engine",
    ],
    imageUrl: "/images/cars/corvette-z06.jpg",
  },
  {
    id: "build-challenger-srt8",
    slug: "dodge-challenger-srt8-burnout-zrpm",
    title: "Dodge Challenger SRT8 Mopar Performance ZRPM",
    vehicle: "Dodge Challenger SRT8 / 392 HEMI",
    year: 2018,
    engine: "6.4L Apache HEMI V8 con Admisión & Escape",
    powerHP: 515,
    torqueNM: 680,
    boostPSI: 0,
    category: "Track / Drag",
    highlight: "Quema de neumáticos brutal con bloque HEMI 392 y calibración MOPAR",
    description:
      "Preparación de alto torque para el bloque HEMI 6.4L en ZRPM Racing Engine. Sistema de admisión de alto flujo JLT, línea de escape con resonadores libres y reprogramación de centralita eliminando retrasos de acelerador.",
    modsList: [
      "Inducción de aire frío JLT Cold Air Intake con tubo sobredimensionado",
      "Kit de escape deportivo directo con eliminación de resonador intermedio",
      "Calibración de mapa de combustible y avance de encendido para 97 octanos",
      "Ajuste de control de largada (Launch Control) y desactivación de limitador",
      "Neumáticos de compuesto blando para pista y quemas de goma controladas",
    ],
    imageUrl: "/images/cars/challenger-srt8.jpg",
  },
  {
    id: "build-jeep-trackhawk",
    slug: "jeep-grand-cherokee-trackhawk-hellcat-zrpm",
    title: "Jeep Grand Cherokee Trackhawk 6.2L Hellcat (707+ HP)",
    vehicle: "Jeep Grand Cherokee Trackhawk WK2",
    year: 2020,
    engine: "V8 6.2L Supercargado Hellcat (707 HP / 875 Nm)",
    powerHP: 707,
    torqueNM: 875,
    boostPSI: 11.6,
    category: "Supercharged",
    highlight: "SUV hiperdeportivo en taller ZRPM: V8 6.2L Hellcat, tracción Quadra-Trac 4x4 y 0-100 en 3.5s",
    description:
      "Construcción y mantenimiento de alto nivel para el SUV más potente de Jeep en taller ZRPM. Bloque V8 6.2L Supercharged con caja automática de 8 marchas, tracción integral permanente y discos ventilados Brembo de 400 mm.",
    modsList: [
      "Motor V8 6.2L HEMI Supercargado (Hellcat) con 707 HP y 875 Nm de fábrica",
      "Compresor volumétrico de doble tornillo 2.4L con intercooler agua-aire integrado",
      "Tracción integral 4x4 Quadra-Trac con reparto variable para máxima aceleración",
      "Frenos Brembo de 6 pistones con rotores ventilados de 400 mm adelante",
      "Puesta a punto electrónica y calibración de transmisión en dinamómetro ZRPM",
      "Kit de ensanche de carrocería y acabado custom mate con gráficos de taller",
    ],
    imageUrl: "/images/cars/jeep-trackhawk.jpg",
  },
];


