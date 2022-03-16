export interface MainInitialState extends CategoryRes {
  randomCollectionData: RandomCollectionDataRes;
  randomCollectionData2: RandomCollectionDataRes;
}

export interface RandomCollectionDataRes {
  id: number;
  title: string;
  subtitle: string;
  additional_text: null;
  template_code: string;
  template_type: string;
  event_code: string;
  data: {
    collection_code: string;
    has_more: true;
    products: {
      no: number;
      name: string;
      short_description: string;
      list_image_url: string;
      original_price: number;
      discounted_price: number;
      discount_rate: number;
      is_sold_out: boolean;
      sold_out_title: string;
      sold_out_text: string;
      sticker: null;
    }[];
  };
}

export interface CategoryRes {
  code: string;
  name?: string;
}
