export interface Category {
  code: string,
  name: string,
}

// TODO 네이밍 생각해보기
export interface Product {
  code: string,
  no?: number,
  name: string,
  short_description?: string,
  list_image_url: string,
  original_price: number,
  discounted_price: number,
  discount_rate: number,
  is_sold_out?: boolean,
  sold_out_title?: string,
  sold_out_text?: string,
  sticker?: ProductSticker | null
}

// TODO content.weight에 넣으면 왜 에러가 날까?
type StickerWeight = "regular" | "bold";

export interface ProductSticker {
  content: {
    text: string,
    weight: string,
  }[],
  opacity: number,
  background_color: string
}
