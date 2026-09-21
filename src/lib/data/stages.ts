import { TuningStageData } from "@/types";

export const TUNING_STAGES: TuningStageData[] = [
  {
    stage: 1,
    title: "STAGE 1",
    tagline: "Reprogramación de Software 100% Plug & Play",
    description:
      "Optimización de mapas de inyección, avance de encendido, respuesta electrónica del acelerador y eliminación de limitador de velocidad. No requiere modificar piezas mecánicas de fábrica.",
    gainHPEstimate: 35,
    gainTorqueEstimateNM: 55,
    priceCLPNeto: 350000,
    requiredHardware: ["Vehículo en óptimas condiciones mecánicas", "Combustible de 97 octanos"],
    recommendedHardware: ["Filtro de aire de panel de alto flujo K&N / Roush"],
    isCustomDynoTuned: true,
  },
  {
    stage: "1+",
    title: "STAGE 1+",
    tagline: "Software Optimizado con Inducción de Aire",
    description:
      "Calibración específica para motores equipados con kits de inducción de aire frío (Cold Air Intake JLT/Roush). Se re-escala la curva MAF para aprovechar el caudal de aire fresco adicional.",
    gainHPEstimate: 52,
    gainTorqueEstimateNM: 75,
    priceCLPNeto: 420000,
    requiredHardware: ["Kit de Inducción / Cold Air Intake instalado", "Combustible 97 Octanos"],
    recommendedHardware: ["Bujías de iridio grado frío NGK", "Inspección de bobinas de encendido"],
    isCustomDynoTuned: true,
  },
  {
    stage: 2,
    title: "STAGE 2",
    tagline: "Reprogramación + Desahogo de Escape (Headers / X-Pipe)",
    description:
      "Ajuste agresivo para autos con modificaciones de escape completas (colectores largos, catalizadores de alto flujo o supresor y X-Pipe). Gran ganancia de torque en rango medio.",
    gainHPEstimate: 78,
    gainTorqueEstimateNM: 110,
    priceCLPNeto: 550000,
    requiredHardware: [
      "Inducción de aire de alto flujo",
      "Colectores largos (Headers) o Downpipes deportivos",
      "Bujías 1 paso más frías",
    ],
    recommendedHardware: [
      "Radiador o enfriador de aceite de competición",
      "Termostato de menor temperatura",
    ],
    isCustomDynoTuned: true,
  },
  {
    stage: 3,
    title: "STAGE 3 / CUSTOM FORCED INDUCTION",
    tagline: "Sobrealimentación, Twin-Turbo & Preparación Extrema",
    description:
      "La cúspide del motorsport. Calibración a medida en dinamómetro para vehículos con turbocompresores gemelos o supercargadores volumétricos, inyectores de alto flujo y componentes internos forjados.",
    gainHPEstimate: 350,
    gainTorqueEstimateNM: 480,
    priceCLPNeto: 950000,
    requiredHardware: [
      "Kit Supercharger o Twin-Turbo instalado",
      "Inyectores sobredimensionados (1000cc+) y bomba de alto flujo",
      "Bomba de aceite de cromoly para altas RPM",
      "Embrague o caja automática reforzada",
    ],
    recommendedHardware: [
      "Línea de combustible con retorno",
      "Sensor de mezcla de banda ancha (Wideband) permanente",
    ],
    isCustomDynoTuned: true,
  },
];
