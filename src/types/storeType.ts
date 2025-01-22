import { Product } from "./product";

export interface MainStore {
  mainStore: {
    products: Product[];
    categories: string[];
  };
}
