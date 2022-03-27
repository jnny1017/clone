export interface CartInitialState {
  cartInfo: CartInfo;
  updatedCount: number;
}

export interface CartInfo {
  name: string;
  list_image_url: string;
  short_description?: string;
  original_price: number;
  discount_rate?: number;
  discounted_price?: number;
  count: number;
}
