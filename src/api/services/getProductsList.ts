import { Product } from "../../types/product";
import { getProducts } from "../endpoints";

export const getProductsList = async () => {
  try {
    const response = await getProducts();
    const productsCategories: string[] = response?.data?.map(
      (product: Product) => product?.category
    );
   
    return {
      products: response?.data,
      categories: [...new Set(productsCategories)],
    };
  } catch {
    console.error("Failed To Fetch Data");
  }
  return { products: [], categories: [] };
};
