export interface ShippingHistory {
  id: number;
  trackingId: string;
  courier: string;
  category: string;
  shippingDate: Date;
  destination: string;
  weight: string;
  cost: number;
  status: number;
}
