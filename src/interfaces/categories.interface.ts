export interface Categories {
  no: string,
  name: string,
  show_all_flag?: boolean,
  pc_icon_url: string,
  icon_url?: string,
  pc_icon_active_url: string,
  icon_active_url?: string,
  categories: SubCategories[],
}

export interface SubCategories {
  no: string,
  name: string
}
