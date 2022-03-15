export interface MainInitialState extends CategoryRes {
  randomCollectionData: RandomCollectionDataRes;
}

export interface RandomCollectionDataRes {}

export interface CategoryRes {
  code: string;
  name?: string;
}
