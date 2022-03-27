import { CartInfo } from '../cart/cart.model';

export interface MainInitialState extends CategoryRes {
  mainBannerData: MainBannerRes;
  mdChoiceCategoryData: CategoryRes[];
  mdChoiceProductData: ProductInfo[];
  randomCollectionData: RandomCollectionDataRes;
  randomCollectionData2: RandomCollectionDataRes;
  cartInfo: CartInfo;
}

export interface MainBannerRes {
  id?: number;
  title?: string;
  subtitle?: string;
  additional_text?: null;
  template_code?: string;
  template_type?: string;
  event_code?: string;
  data: {
    id: string;
    image_url: string;
    link?: string;
  }[];
}
export interface ProductSticker {
  content: {
    text: string;
    weight: string;
  }[];
  opacity: number;
  background_color: string;
}

export interface ProductInfo extends CartInfo {
  code?: string;
  no?: number;
  is_sold_out?: boolean;
  sold_out_title?: string;
  sold_out_text?: string;
  sticker?: ProductSticker | null;
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
    products: ProductInfo[];
  };
}

export interface CategoryRes {
  code: string;
  name?: string;
}
