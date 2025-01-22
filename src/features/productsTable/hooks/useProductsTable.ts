import { useEffect, useState } from "react";
import { SORT_ENUM, sortOptions } from "../types";
import { Product } from "../../../types/product";
import { useProductsSort } from "../../../hooks/useProductsSort";
import { useProductsFilter } from "../../../hooks/useProductsFilter";
import { useSelector } from "react-redux";
import { MainStore } from "../../../types/storeType";

/**
 * Custom hook for managing product table state and operations
 * @returns {Object} Object containing table state and control functions
 * @property {Product[]} productsToView - Current products being displayed
 * @property {sortOptions} sortOptions - Current sort state including direction and column
 * @property {(key: string) => void} sortTableData - Function to sort table by column
 * @property {Function} runProductsFilter - Function to filter products
 */
export const useProductsTable = () => {
  const products = useSelector(
    (state: MainStore) => state?.mainStore?.products
  );

  const [sortOptions, setSortOptions] = useState<sortOptions>({
    direction: SORT_ENUM.AUTO,
    key: "",
    loading: false,
  });
  const [productsToView, setProductsToView] = useState(products);

  /**
   * Callback to update products after sorting
   * @param sortedProducts - Array of sorted products
   */
  const setSortedProducts = (sortedProducts: Product[]) => {
    setProductsToView(sortedProducts);
    setSortOptions((prev) => {
      return { ...prev, loading: false };
    });
  };

  /**
   * Callback to update products after filtering
   * @param filteredProducts - Array of filtered products
   */
  const setFilteredProducts = (filteredProducts: Product[]) => {
    setProductsToView(filteredProducts);
  };
  useEffect(() => {
    setProductsToView(products);
  }, [products]);
  const { runProductsSort } = useProductsSort(setSortedProducts);
  const { runProductsFilter } = useProductsFilter(setFilteredProducts);

  /**
   * Handles table column sorting
   * @param key - Column key to sort by
   */
  const sortTableData = (key: string) => {
    const sortCriteria =
      sortOptions.direction == SORT_ENUM.ASC ? SORT_ENUM.DESC : SORT_ENUM.ASC;
    setSortOptions((prev) => {
      return {
        key: key,
        loading: true,
        direction:
          prev.direction == SORT_ENUM.ASC ? SORT_ENUM.DESC : SORT_ENUM.ASC,
      };
    });
    runProductsSort(products, sortCriteria, key);
  };

  return {
    productsToView,
    sortOptions,
    sortTableData,
    runProductsFilter,
  };
};
