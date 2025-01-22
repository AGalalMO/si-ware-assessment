import { Product } from "../../types/product";
import { editProduct } from "../endpoints";

export const editProductData = async (product: Product) => {
  try {
    const response = await editProduct(product?.id, product);

    return response?.data;
  } catch {
    console.error("Failed To Fetch Data");
  }
  return null;
};
