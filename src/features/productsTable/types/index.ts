export enum SORT_ENUM {
  AUTO = "AUTO",
  DESC = "DESC",
  ASC = "ASC",
}

export interface sortOptions {
  direction: SORT_ENUM;
  key: string;
  loading: boolean;
}

export interface filterOptions{
  category: string |null,
  stock: string|null ,
  loading:boolean
}