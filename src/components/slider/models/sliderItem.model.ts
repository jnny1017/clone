export interface SliderItemModel {
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
  sticker?: Sticker | null
}

type FontWeight = "regular" | "bold";

export interface Sticker {
  content: {
    text: string,
    weight: string,
  }[],
  opacity: number,
  background_color: string
}
