export interface CartInitialState {
  cartInfo: CartInfo;
}

export interface CartInfo {
  list_image_url: string;
  name: string;
  original_price: number;
}
