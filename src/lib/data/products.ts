import { Product } from "@/types";
import { BRANDS } from "./brands";
import { CATEGORIES } from "./categories";

const getBrand = (slug: string) =>
  BRANDS.find((b) => b.slug === slug) || BRANDS[0];
const getCategory = (slug: string) =>
  CATEGORIES.find((c) => c.slug === slug) || CATEGORIES[0];

export const PRODUCTS: Product[] = [
  {
    id: "prod-tt-coyote-custom",
    sku: "ZRPM-TT-COYOTE-900",
    name: "Kit Twin-Turbo Custom ZRPM Ford Mustang GT (800–1000+ HP)",
    slug: "kit-twin-turbo-custom-zrpm-mustang-gt",
    brand: getBrand("hellion"),
    category: getCategory("modificacion-a-pedido"),
    priceCLP: 14500000,
    originalPriceCLP: 15900000,
    isOnSale: true,
    stock: 2,
    availability: "import_order",
    estimatedDeliveryDays: 14,
    shortDescription:
      "Desarrollo de ingeniería a pedido para Mustang GT Coyote 5.0L. Doble turbo con salidas Hood-Exit, intercooler frontal y puesta a punto en dinamómetro ZRPM.",
    description:
      "El sistema insignia de sobrealimentación forzada de ZRPM Racing Engine. Diseñado para superar los 850 HP con combustible comercial y más de 1.000 HP con mezcla de competición. Incluye turbocompresores cerámicos gemelos, tuberías de intercooler en aluminio curvado por mandril, bajantes de escape en acero inoxidable T304 y calibración completa en dinamómetro de rodillos.",
    specifications: {
      "Turbocompresores": "Dual Precision 6266 / Hellion Twin Turbo Spec",
      "Potencia Objetivo": "800 a 1050+ HP según presión y combustible",
      "Presión de Boost": "Regulable de 7 a 18 PSI",
      "Intercooler": "Núcleo frontal de alta capacidad 4.5\" Bar & Plate",
      "Válvulas": "Dual 44mm V-Band Wastegates + Blow-Off 50mm",
      "Instalación": "Requiere montaje y puesta a punto en taller ZRPM",
    },
    images: [
      "/images/cars/mustang-biturbo.jpg",
      "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1000&q=80",
    ],
    compatibleGenerations: ["gen-mustang-s550-pre", "gen-mustang-s550-facelift", "gen-mustang-mach1"],
    isFeatured: true,
    isPopular: true,
  },
  {
    id: "prod-jlt-intake-mustang-15-17",
    sku: "JLT-CAI-FMG15",
    name: "Inducción JLT Cold Air Intake Ford Mustang GT 5.0L (2015–2017)",
    slug: "induccion-jlt-2015-2017",
    brand: getBrand("jlt"),
    category: getCategory("induccion-admision"),
    priceCLP: 580000,
    originalPriceCLP: 620000,
    isOnSale: true,
    stock: 3,
    availability: "in_stock",
    estimatedDeliveryDays: 1,
    shortDescription:
      "Admisión de aire frío JLT Performance con tubo de 120mm y filtro cónico sobredimensionado. Ganancias comprobadas de +25 a +30 HP.",
    description:
      "La inducción JLT Cold Air Intake es la referencia en Mustang GT S550. Diseñada para proporcionar el máximo caudal de aire fresco reduciendo las temperaturas de admisión (IAT) y maximizando la potencia en el rango medio y alto.",
    specifications: {
      "Diámetro de Tubo": "120mm de entrada con acople de silicona reforzada",
      "Filtro": "S&B Oiled Cotton Gauze lavable de alto flujo",
      "Ganancia Estimada": "+25 a +32 HP con calibración de software",
      "Requiere Reprogramación": "Sí, calibración MAF necesaria",
      "Procedencia": "Made in USA",
    },
    images: [
      "https://store.zrpm.cl/wp-content/uploads/2025/06/induccion-1.webp",
      "https://store.zrpm.cl/wp-content/uploads/2025/06/WhatsApp-Image-2025-04-22-at-7.03.43_PM-removebg-preview.png",
    ],
    compatibleGenerations: ["gen-mustang-s550-pre"],
    isFeatured: true,
    isPopular: true,
  },
  {
    id: "prod-roush-sc-stage2",
    sku: "ROUSH-422144-SC",
    name: "Ford Mustang 5.0L Supercharger Stage 2 Kit Roush (750 HP)",
    slug: "ford-mustang-50l-supercharger-stage-2-kit-roush",
    brand: getBrand("roush"),
    category: getCategory("sobrealimentacion"),
    priceCLP: 11850000,
    isOnSale: false,
    stock: 1,
    availability: "import_order",
    estimatedDeliveryDays: 12,
    shortDescription:
      "Kit Roush TVS 2650 Phase 2 que eleva la potencia de tu Mustang GT a 750 caballos de fuerza y 910 Nm de torque.",
    description:
      "El supercargador Roush Phase 2 es el upgrade definitivo para el motor Coyote. Incorpora los rotores de cuatro lóbulos con 160 grados de torsión de Eaton, un intercambiador de calor de doble pasada y calibración oficial.",
    specifications: {
      "Potencia": "750 HP / 910 Nm de Torque",
      "Tipo de Compresor": "Roots TVS R2650 de cuatro lóbulos",
      "Enfriamiento": "Intercambiador aire-agua sobredimensionado",
      "Inyectores": "Inyectores Roush de alto flujo incluidos",
    },
    images: [
      "https://store.zrpm.cl/wp-content/uploads/2025/06/Roush.png",
      "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1000&q=80",
    ],
    compatibleGenerations: ["gen-mustang-s550-pre", "gen-mustang-s550-facelift"],
    isFeatured: true,
  },
  {
    id: "prod-brembo-front-mustang",
    sku: "BREMBO-F-S550-01",
    name: "Pastillas de Freno Delanteras Brembo High Performance Mustang 2015–2023",
    slug: "pastillas-freno-delanteras-brembo-mustang-2015-2023",
    brand: getBrand("brembo"),
    category: getCategory("frenos-suspension"),
    priceCLP: 285000,
    originalPriceCLP: 310000,
    isOnSale: true,
    stock: 6,
    availability: "in_stock",
    estimatedDeliveryDays: 1,
    shortDescription:
      "Compuesto semi-metálico de alta fricción Brembo Racing diseñado para frenadas consistentes y disipación térmica sin fatiga.",
    description:
      "Juego de pastillas para caliper Brembo de 6 pistones en Mustang GT Performance Package y Mach 1. Resistencia superior al fade térmico para tandas de track-day y uso urbano deportivo.",
    specifications: {
      "Compuesto": "Brembo HP2000 Semi-Metallic Sport",
      "Temperatura": "Hasta 650°C sin pérdida de mordida",
      "Compatibilidad": "Pinzas delanteras Brembo 6 pistones OEM",
    },
    images: [
      "/images/products/brembo-pads.jpg",
    ],
    compatibleGenerations: ["gen-mustang-s550-pre", "gen-mustang-s550-facelift", "gen-mustang-mach1"],
    isFeatured: false,
    isPopular: true,
  },
  {
    id: "prod-ngk-iridium-set",
    sku: "NGK-LTR7IX-11",
    name: "Juego de Bujías NGK Iridium IX Grado Frío Coyote & LT1 (Set x8)",
    slug: "bujias-ngk-iridium-grado-frio-v8",
    brand: getBrand("ngk"),
    category: getCategory("induccion-admision"),
    priceCLP: 98000,
    isOnSale: false,
    stock: 12,
    availability: "in_stock",
    estimatedDeliveryDays: 1,
    shortDescription:
      "Bujías de iridio de grado térmico 1 punto más frío, esenciales para preparaciones con reprogramación Stage 2/3 o sobrealimentación.",
    description:
      "El electrodo central de iridio garantiza chispa potente y previene detonaciones prematuras bajo altas temperaturas. Recomendadas por ZRPM para proyectos modificados y turbocargados.",
    specifications: {
      "Material Electrodo": "Iridio 0.6mm con núcleo de cobre",
      "Rango Térmico": "Grado 7 (1 paso más frío que OEM)",
      "Calibración Gap": "Pre-calibradas a 0.030\" para sobrealimentación",
      "Cantidad": "Set completo de 8 bujías",
    },
    images: [
      "https://store.zrpm.cl/wp-content/uploads/2025/06/BUJIAS.webp",
    ],
    compatibleGenerations: [
      "gen-mustang-s197",
      "gen-mustang-s550-pre",
      "gen-mustang-s550-facelift",
      "gen-camaro-gen5",
      "gen-camaro-gen6",
      "gen-corvette-c7",
    ],
    isFeatured: false,
    isPopular: true,
  },
  {
    id: "prod-xpipe-mustang-s197",
    sku: "ZRPM-EXH-XP1114",
    name: "X-Pipe en Acero Inoxidable 3\" Ford Mustang GT (2011–2014)",
    slug: "xpipe-acero-inoxidable-mustang-2011-2014",
    brand: getBrand("steeda"),
    category: getCategory("escapes-headers"),
    priceCLP: 390000,
    originalPriceCLP: 440000,
    isOnSale: true,
    stock: 4,
    availability: "in_stock",
    estimatedDeliveryDays: 1,
    shortDescription:
      "Tubo cruzado en X de 3 pulgadas en acero inoxidable T304. Agrega el clásico sonido agudo de competición Coyote y desahoga el flujo de escape.",
    description:
      "Reemplaza el resonador restrictivo central de fábrica. Al cruzar los pulsos de escape en el punto X, crea un efecto venturi que ayuda a evacuar los gases de los cilindros con mayor rapidez.",
    specifications: {
      "Material": "Acero inoxidable T304 pulido grado aeronáutico",
      "Diámetro": "3 pulgadas (76mm)",
      "Ganancia": "+8 a +14 HP en banco dinamómetro",
    },
    images: [
      "/images/products/xpipe-exhaust.jpg",
    ],
    compatibleGenerations: ["gen-mustang-s197"],
    isFeatured: false,
    isPopular: false,
  },
  {
    id: "prod-headers-camaro-ss",
    sku: "ZRPM-HDR-CAM16",
    name: "Colectores de Escape Largos (Long Tube Headers) Camaro SS 6.2L",
    slug: "colectores-headers-camaro-ss-62l",
    brand: getBrand("steeda"),
    category: getCategory("escapes-headers"),
    priceCLP: 890000,
    isOnSale: false,
    stock: 2,
    availability: "in_stock",
    estimatedDeliveryDays: 1,
    shortDescription:
      "Headers 1-7/8\" en acero inoxidable con colectores de velocidad diseñados para el motor LT1 6.2L. Ganancias masivas de torque.",
    description:
      "Elimina la contrapresión del sistema de escape original. Los tubos primarios de longitud igualada optimizan el barrido de los gases de escape, permitiendo que el motor respire con total libertad en aceleración a fondo.",
    specifications: {
      "Primarios": "Tubos curvados de 1-7/8\" (48mm)",
      "Colector": "Merge collector de 3\" con picos de velocidad",
      "Material": "Acero inoxidable T304 calibre 16",
      "Ganancia Estimada": "+30 a +40 HP con Reprogramación Stage 2",
    },
    images: [
      "https://store.zrpm.cl/wp-content/uploads/2025/06/Multiples-de-escape.webp",
      "/images/cars/camaro-ss.jpg",
    ],
    compatibleGenerations: ["gen-camaro-gen6"],
    isFeatured: true,
  },
  {
    id: "prod-roush-f150-supercharger",
    sku: "ROUSH-F150-SC-570",
    name: "Kit Sobrealimentación Roush R2300 Phase 2 Ford F-150 Coyote (570 HP)",
    slug: "kit-sobrealimentacion-roush-r2300-ford-f150",
    brand: getBrand("roush"),
    category: getCategory("sobrealimentacion"),
    priceCLP: 10900000,
    isOnSale: false,
    stock: 1,
    availability: "import_order",
    estimatedDeliveryDays: 15,
    shortDescription:
      "Kit original Roush Performance para camionetas Ford F-150 con motor Coyote 5.0L. Entrega 570 caballos y respuesta brutal desde ralentí.",
    description:
      "Desarrollado específicamente para el chasis de la F-150 con motor V8 Coyote. Transforma la camioneta en una máquina de aceleración descomunal, manteniendo el confort y la capacidad de remolque.",
    specifications: {
      "Potencia": "570 HP / 720 Nm",
      "Compresor": "TVS R2300 con sistema de bypass integrado",
      "Compatibilidad": "Ford F-150 Coyote 5.0L",
    },
    images: [
      "/images/cars/ford-f150.jpg",
      "https://store.zrpm.cl/wp-content/uploads/2025/06/Roush.png",
    ],
    compatibleGenerations: ["gen-ford-f150-coyote"],
    isFeatured: false,
  },
  {
    id: "prod-corvette-brakes-bbk",
    sku: "BREMBO-C7-GT6",
    name: "Kit Frenos Brembo GT 6 Pistones Discos Flotantes 380mm Corvette",
    slug: "kit-frenos-brembo-gt-corvette",
    brand: getBrand("brembo"),
    category: getCategory("frenos-suspension"),
    priceCLP: 3450000,
    isOnSale: false,
    stock: 2,
    availability: "import_order",
    estimatedDeliveryDays: 10,
    shortDescription:
      "Sistema de frenado de circuito para Corvette C6 y C7. Pinzas monobloque de 6 pistones con discos ranurados flotantes de dos piezas.",
    description:
      "Desarrollado para resistir las exigencias de tandas en pista con neumáticos slick Hoosier. Disipación térmica superior y tacto de pedal ultrarrígido sin pérdida de presión hidráulica.",
    specifications: {
      "Pinzas": "Monobloque de aluminio forjado de 6 pistones",
      "Discos": "Flotantes de 380mm x 34mm ranurados Tipo 3",
      "Líneas": "Líneas de freno malladas en acero inoxidable Goodridge",
    },
    images: [
      "/images/cars/corvette.jpg",
      "https://images.unsplash.com/photo-1600790142055-619df03207e6?auto=format&fit=crop&w=1000&q=80",
    ],
    compatibleGenerations: ["gen-corvette-c7"],
    isFeatured: true,
  },

  {
    id: "prod-steeda-coilovers-drift",
    sku: "STEEDA-COIL-S550D",
    name: "Coilovers Ajustables Steeda Pro-Action Drift & Track Mustang S550",
    slug: "coilovers-ajustables-steeda-mustang-s550",
    brand: getBrand("steeda"),
    category: getCategory("modificaciones-drift-pista"),
    priceCLP: 1850000,
    isOnSale: false,
    stock: 2,
    availability: "in_stock",
    estimatedDeliveryDays: 1,
    shortDescription:
      "Suspensión roscada monotubo con regulación de altura y dureza en 30 clics. Configurada para derrape controlado y agarre en circuito.",
    description:
      "La misma plataforma de amortiguación probada en el Mustang Drift de ZRPM. Permite variar la altura entre 1 y 2.5 pulgadas de descenso sin sacrificar recorrido de amortiguador.",
    specifications: {
      "Regulación": "30 clics de dureza simultánea rebote/compresión",
      "Copelas": "Copelas regulables de caída (Camber Plates) en aluminio T6",
      "Resortes": "Acero de silicio-cromo de tasa lineal",
    },
    images: [
      "/images/cars/mustang-drift.jpg",
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1000&q=80",
    ],
    compatibleGenerations: ["gen-mustang-s550-pre", "gen-mustang-s550-facelift", "gen-mustang-mach1"],
    isFeatured: true,
  },

];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return PRODUCTS.map((p) => p.slug);
}

export function getRelatedProducts(currentProduct: Product, limit: number = 4): Product[] {
  // First look for products with same category, excluding current product
  const sameCategory = PRODUCTS.filter(
    (p) => p.category.id === currentProduct.category.id && p.id !== currentProduct.id
  );
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  // Next look for products with same brand
  const sameBrand = PRODUCTS.filter(
    (p) =>
      p.brand.id === currentProduct.brand.id &&
      p.id !== currentProduct.id &&
      !sameCategory.some((item) => item.id === p.id)
  );

  // Combine and fill with others if needed
  const combined = [...sameCategory, ...sameBrand];
  if (combined.length >= limit) {
    return combined.slice(0, limit);
  }

  const others = PRODUCTS.filter(
    (p) => p.id !== currentProduct.id && !combined.some((item) => item.id === p.id)
  );

  return [...combined, ...others].slice(0, limit);
}

export function getProductsByGenerationId(generationId: string): Product[] {
  return PRODUCTS.filter((p) => p.compatibleGenerations.includes(generationId));
}

export function getProductCountForGeneration(generationId: string): number {
  return PRODUCTS.filter((p) => p.compatibleGenerations.includes(generationId)).length;
}


