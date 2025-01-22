import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsList } from "../api/services/getProductsList";
import { fillProductsList } from "../store/productsSlice";
import { MainStore } from "../types/storeType";

/**
 * Custom hook to manage products data in Redux store
 *
 * This hook handles fetching and storing products data. It automatically fetches
 * products and categories if they're not already present in the store.
 *
 */
export const useProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: MainStore) => state.mainStore.products);

  useEffect(() => {
    if (!products?.length) getAllProducts();
  }, []);

  /**
   * Fetches products and categories data from the API and updates the Redux store
   */
  const getAllProducts = async () => {
    const { categories, products } = await getProductsList();
    dispatch(fillProductsList({ categories, products }));
  };
};
