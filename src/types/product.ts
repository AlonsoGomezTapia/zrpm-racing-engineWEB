export type ProductAvailability = "in_stock" | "import_order" | "out_of_stock";

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  iconName?: string;
  imageUrl?: string;
  carModel?: string;
  isPopularBadge?: string;
}

export interface ProductBrand {
  id: string;
  name: string;
  slug: string;
  logoUrl?: string;
  country?: string;
  isPopular?: boolean;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  slug: string;
  brand: ProductBrand;
  category: ProductCategory;
  priceCLP: number;
  originalPriceCLP?: number;
  isOnSale: boolean;
  stock: number;
  availability: ProductAvailability;
  estimatedDeliveryDays?: number;
  shortDescription: string;
  description: string;
  specifications: Record<string, string>;
  images: string[];
  compatibleGenerations: string[];
  isFeatured?: boolean;
  isPopular?: boolean;
}

export interface ProductFilterParams {
  categorySlug?: string;
  brandSlug?: string;
  vehicleGenerationId?: string;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  availability?: ProductAvailability;
  sortBy?: "price-asc" | "price-desc" | "name" | "featured";
}
