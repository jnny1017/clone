export interface MainBanner {
  id?: number,
  title?: string,
  subtitle?: string,
  additional_text?: null,
  template_code?: string,
  template_type?: string,
  event_code?: string,
  data: Banner[],
}

export interface Banner {
  id: string,
  image_url: string,
  link?: string,
}
