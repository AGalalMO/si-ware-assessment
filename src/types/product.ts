import { Dimension } from "./dimension";

export interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  price: number;
  stockStatus: Stock_Status;
  description: string;
  sku: string;
  dimensions: Dimension;
}

export enum Stock_Status {
  LIMITED = "Limited Stock",
  IN_STOCK = "In Stock",
  OUT_OF_STOCK = "Out of Stock",
}
