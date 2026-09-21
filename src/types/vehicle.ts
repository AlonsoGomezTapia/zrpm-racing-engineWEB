export interface VehicleMake {
  id: string;
  name: string;        // 'Ford', 'Chevrolet', 'Dodge', 'Jeep'
  slug: string;
  country: string;
  logoUrl?: string;
}

export interface VehicleModel {
  id: string;
  makeId: string;
  name: string;        // 'Mustang', 'Camaro', 'Challenger', 'Charger', 'Grand Cherokee'
  slug: string;
}

export interface VehicleGeneration {
  id: string;
  modelId: string;
  code: string;        // 'S550', 'S197', 'Gen 5', 'Gen 6', 'LD', 'WK2'
  name: string;        // 'Ford Mustang GT (S550 Pre-Facelift)'
  trim: string;        // 'GT 5.0L V8', 'Mach 1 5.0L V8', 'SS 6.2L V8', 'SRT 6.4L 392'
  yearFrom: number;
  yearTo: number;
  engine: string;      // 'Coyote 5.0L Ti-VCT V8'
  stockHP: number;     // 435 HP
  stockTorqueNM: number;
  imageUrl?: string;
}

export interface SelectedVehicle {
  make: VehicleMake;
  model: VehicleModel;
  generation: VehicleGeneration;
  year: number;
}
