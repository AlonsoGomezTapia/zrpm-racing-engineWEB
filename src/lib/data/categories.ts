import { ProductCategory } from "@/types";

export const CATEGORIES: ProductCategory[] = [
  {
    id: "cat-twin-turbo",
    name: "Modificación a Pedido & Bi-Turbo",
    slug: "modificacion-a-pedido",
    description:
      "Desarrollo integral de sistemas Bi-Turbo personalizados y proyectos forjados a medida. El trabajo más popular y extremo de ZRPM.",
    iconName: "Flame",
    imageUrl: "/images/cars/mustang-biturbo.jpg",
    carModel: "Mustang Bi-Turbo 1.000+ HP",
    isPopularBadge: "EL MÁS POPULAR DEL TALLER",
  },
  {
    id: "cat-drift",
    name: "Modificaciones para Drift & Pista",
    slug: "modificaciones-drift-pista",
    description:
      "Preparación de chasis, ángulo de giro, diferenciales bloqueados, embragues cerámicos y frenos hidráulicos para competencias de drift.",
    iconName: "Activity",
    imageUrl: "/images/cars/mustang-drift.jpg",
    carModel: "Mustang Drift Spec ZRPM",
    isPopularBadge: "COMPETICIÓN & DRIFT",
  },
  {
    id: "cat-camaro",
    name: "Línea Chevrolet Camaro SS 6.2L",
    slug: "chevrolet-camaro-ss",
    description:
      "Kits de admisión, colectores de escape largos (Headers), árboles de levas de alto cruce y reprogramación específica para el bloque LT1.",
    iconName: "Cpu",
    imageUrl: "/images/cars/camaro-ss.jpg",
    carModel: "Camaro SS 6.2 V8",
  },
  {
    id: "cat-corvette",
    name: "Línea Corvette & Track Day",
    slug: "chevrolet-corvette",
    description:
      "Frenos sobredimensionados, neumáticos slick Hoosier de competición, enfriadores de aceite y puestas a punto para circuito cerrado.",
    iconName: "Shield",
    imageUrl: "/images/cars/corvette.jpg",
    carModel: "Corvette Hoosier Slick Setup",
  },
  {
    id: "cat-f150",
    name: "Sobrealimentación Trucks (Ford F-150)",
    slug: "ford-f150-supercharged",
    description:
      "Kits de compresor volumétrico Roush y Whipple para camionetas con motor Coyote 5.0L, calibrados para arrancones y remolque pesado.",
    iconName: "Gauge",
    imageUrl: "/images/cars/ford-f150.jpg",
    carModel: "Ford F-150 Drag / Roush SC",
  },
  {
    id: "cat-induccion",
    name: "Inducción & Admisión de Alto Flujo",
    slug: "induccion-admision",
    description:
      "Kits de admisión directa Cold Air Intake JLT, Roush y filtros de alto flujo para maximizar el ingreso de aire fresco a la admisión.",
    iconName: "Wind",
    imageUrl: "https://store.zrpm.cl/wp-content/uploads/2025/06/induccion-1.webp",
    carModel: "Admisiones JLT & Roush",
  },
];
