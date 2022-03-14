export interface SectionModel {
  title: string,
  subtitle: string,
  data: {
    products: SectionProductModel[]
  }
}

export interface SectionProductModel {
  no: number,
  name: string,
  short_description: string,
  list_image_url: string,
  original_price: number,
  discounted_price: number,
  discount_rate: number,
}
