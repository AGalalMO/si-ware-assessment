import { Product } from "../types/product";
import axiosInstance from "./axiosConfig";

export const getProducts = () => axiosInstance.get("products");

export const editProduct = (id:number, product:Product) =>
  axiosInstance.put(`products/${id}`, { ...product });