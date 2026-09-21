import { Product } from "./product";

export interface CartItem {
  product: Product;
  quantity: number;
}

export type DeliveryMethod = "workshop_pickup" | "santiago_express" | "chile_shipping";

export interface CustomerData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  rutOrId: string;
  address?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  notes?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  createdAt: string;
  items: CartItem[];
  customer: CustomerData;
  deliveryMethod: DeliveryMethod;
  shippingCostCLP: number;
  subtotalCLP: number;
  totalCLP: number;
  status: "pending_payment" | "paid" | "processing" | "shipped" | "ready_pickup" | "completed" | "cancelled";
  paymentMethod?: "webpay" | "transfer" | "in_store";
}
