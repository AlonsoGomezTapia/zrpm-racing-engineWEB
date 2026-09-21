import { VehicleMake, VehicleModel, VehicleGeneration } from "@/types";

export const VEHICLE_MAKES: VehicleMake[] = [
  {
    id: "make-ford",
    name: "Ford",
    slug: "ford",
    country: "USA",
  },
  {
    id: "make-chevrolet",
    name: "Chevrolet",
    slug: "chevrolet",
    country: "USA",
  },
  {
    id: "make-dodge",
    name: "Dodge",
    slug: "dodge",
    country: "USA",
  },
  {
    id: "make-jeep",
    name: "Jeep",
    slug: "jeep",
    country: "USA",
  },
];

export const VEHICLE_MODELS: VehicleModel[] = [
  // Ford
  { id: "model-mustang", makeId: "make-ford", name: "Mustang", slug: "mustang" },
  { id: "model-f150", makeId: "make-ford", name: "F-150", slug: "f-150" },

  // Chevrolet
  { id: "model-camaro", makeId: "make-chevrolet", name: "Camaro", slug: "camaro" },
  { id: "model-corvette", makeId: "make-chevrolet", name: "Corvette", slug: "corvette" },

  // Dodge
  { id: "model-challenger", makeId: "make-dodge", name: "Challenger", slug: "challenger" },
  { id: "model-charger", makeId: "make-dodge", name: "Charger", slug: "charger" },

  // Jeep
  { id: "model-grand-cherokee", makeId: "make-jeep", name: "Grand Cherokee", slug: "grand-cherokee" },
];

export const VEHICLE_GENERATIONS: VehicleGeneration[] = [
  // Ford Mustang
  {
    id: "gen-mustang-s197",
    modelId: "model-mustang",
    code: "S197 II",
    name: "Ford Mustang GT 5.0L (2011–2014)",
    trim: "GT 5.0L V8",
    yearFrom: 2011,
    yearTo: 2014,
    engine: "Coyote 5.0L Gen 1 V8 (412-420 HP)",
    stockHP: 420,
    stockTorqueNM: 529,
    imageUrl: "/images/cars/mustang-s197.jpg",
  },
  {
    id: "gen-mustang-s550-pre",
    modelId: "model-mustang",
    code: "S550 (Pre-Facelift)",
    name: "Ford Mustang GT 5.0L (2015–2017)",
    trim: "GT 5.0L V8",
    yearFrom: 2015,
    yearTo: 2017,
    engine: "Coyote 5.0L Gen 2 V8 (435 HP)",
    stockHP: 435,
    stockTorqueNM: 542,
    imageUrl: "/images/cars/mustang-s550-pre.jpg",
  },
  {
    id: "gen-mustang-s550-facelift",
    modelId: "model-mustang",
    code: "S550 (Facelift)",
    name: "Ford Mustang GT 5.0L (2018–2023)",
    trim: "GT 5.0L V8",
    yearFrom: 2018,
    yearTo: 2023,
    engine: "Coyote 5.0L Gen 3 V8 (460 HP)",
    stockHP: 460,
    stockTorqueNM: 569,
    imageUrl: "/images/cars/mustang-biturbo.jpg",
  },
  {
    id: "gen-mustang-mach1",
    modelId: "model-mustang",
    code: "S550 Mach 1",
    name: "Ford Mustang Mach 1 5.0L (2021–2023)",
    trim: "Mach 1 5.0L V8",
    yearFrom: 2021,
    yearTo: 2023,
    engine: "Coyote 5.0L Mach 1 Spec (480 HP)",
    stockHP: 480,
    stockTorqueNM: 569,
    imageUrl: "/images/cars/mustang-mach1.jpg",
  },

  // Ford F-150
  {
    id: "gen-ford-f150-coyote",
    modelId: "model-f150",
    code: "Gen 13 / 14",
    name: "Ford F-150 5.0L V8 Coyote (2015–2023)",
    trim: "Lariat / Platinum / XLT 5.0L",
    yearFrom: 2015,
    yearTo: 2023,
    engine: "Coyote 5.0L V8 Ti-VCT (385–400 HP)",
    stockHP: 395,
    stockTorqueNM: 542,
    imageUrl: "/images/cars/ford-f150.jpg",
  },

  // Camaro
  {
    id: "gen-camaro-gen5",
    modelId: "model-camaro",
    code: "Gen 5",
    name: "Chevrolet Camaro SS (2010–2015)",
    trim: "SS 6.2L V8",
    yearFrom: 2010,
    yearTo: 2015,
    engine: "LS3 / L99 6.2L V8 (400-426 HP)",
    stockHP: 426,
    stockTorqueNM: 569,
    imageUrl: "/images/cars/camaro-ss.jpg",
  },
  {
    id: "gen-camaro-gen6",
    modelId: "model-camaro",
    code: "Gen 6",
    name: "Chevrolet Camaro SS (2016–2022)",
    trim: "SS 6.2L V8",
    yearFrom: 2016,
    yearTo: 2022,
    engine: "LT1 6.2L Direct Injection V8 (455 HP)",
    stockHP: 455,
    stockTorqueNM: 617,
    imageUrl: "/images/cars/camaro-gen6.jpg",
  },

  // Corvette
  {
    id: "gen-corvette-c7",
    modelId: "model-corvette",
    code: "C7 Z06",
    name: "Chevrolet Corvette C7 Z06 Supercharged (2015–2019)",
    trim: "Z06 6.2L Supercharged V8",
    yearFrom: 2015,
    yearTo: 2019,
    engine: "LT4 6.2L Supercharged V8 (650 HP / 1.000 HP Forged ZRPM)",
    stockHP: 650,
    stockTorqueNM: 881,
    imageUrl: "/images/cars/corvette-z06.jpg",
  },

  // Challenger
  {
    id: "gen-dodge-challenger-early",
    modelId: "model-challenger",
    code: "LC Early",
    name: "Dodge Challenger SRT8 6.1L (2008–2010)",
    trim: "SRT8 6.1L HEMI",
    yearFrom: 2008,
    yearTo: 2010,
    engine: "6.1L HEMI V8 (425 HP)",
    stockHP: 425,
    stockTorqueNM: 569,
    imageUrl: "/images/cars/challenger-srt8.jpg",
  },
  {
    id: "gen-dodge-challenger-392",
    modelId: "model-challenger",
    code: "LA 392",
    name: "Dodge Challenger Scat Pack / SRT 392 (2011–2023)",
    trim: "SRT 6.4L 392 HEMI",
    yearFrom: 2011,
    yearTo: 2023,
    engine: "6.4L Apache HEMI V8 (485 HP)",
    stockHP: 485,
    stockTorqueNM: 644,
    imageUrl: "/images/cars/challenger-srt8.jpg",
  },

  // Charger
  {
    id: "gen-dodge-charger-ld",
    modelId: "model-charger",
    code: "LD",
    name: "Dodge Charger R/T & SRT (2015–2023)",
    trim: "R/T & SRT HEMI V8",
    yearFrom: 2015,
    yearTo: 2023,
    engine: "5.7L / 6.4L HEMI V8",
    stockHP: 485,
    stockTorqueNM: 644,
    imageUrl: "/images/cars/charger-rt.jpg",
  },

  // Jeep
  {
    id: "gen-jeep-wk2-srt",
    modelId: "model-grand-cherokee",
    code: "WK2 SRT",
    name: "Jeep Grand Cherokee SRT 6.4L (2012–2021)",
    trim: "SRT 6.4L HEMI 4WD",
    yearFrom: 2012,
    yearTo: 2021,
    engine: "6.4L HEMI V8 (475 HP)",
    stockHP: 475,
    stockTorqueNM: 637,
    imageUrl: "/images/cars/jeep-srt.jpg",
  },
  {
    id: "gen-jeep-wk2-trackhawk",
    modelId: "model-grand-cherokee",
    code: "WK2 Trackhawk",
    name: "Jeep Grand Cherokee Trackhawk 6.2L Supercharged (2018–2021)",
    trim: "Trackhawk 6.2L Supercharged V8 (Hellcat)",
    yearFrom: 2018,
    yearTo: 2021,
    engine: "V8 6.2L Supercargado Hellcat (707 HP)",
    stockHP: 707,
    stockTorqueNM: 875,
    imageUrl: "/images/cars/jeep-trackhawk.jpg",
  },
];


export function getGenerationById(id: string): VehicleGeneration | undefined {
  return VEHICLE_GENERATIONS.find((g) => g.id === id);
}

export function getGenerationsByIds(ids: string[]): VehicleGeneration[] {
  return VEHICLE_GENERATIONS.filter((g) => ids.includes(g.id));
}

export function getMakeById(id: string): VehicleMake | undefined {
  return VEHICLE_MAKES.find((m) => m.id === id);
}

export function getModelById(id: string): VehicleModel | undefined {
  return VEHICLE_MODELS.find((m) => m.id === id);
}

export function getModelsByMakeId(makeId: string): VehicleModel[] {
  return VEHICLE_MODELS.filter((m) => m.makeId === makeId);
}

export function getGenerationsByModelId(modelId: string): VehicleGeneration[] {
  return VEHICLE_GENERATIONS.filter((g) => g.modelId === modelId);
}


