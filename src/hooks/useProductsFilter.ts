import { useEffect, useRef } from "react";
import { Product } from "../types/product";

/**
 * Custom hook for filtering products using a Web Worker
 * @param setFilteredProducts - Callback function to update filtered products state
 * @returns Object containing the runProductsFilter function
 */
export const useProductsFilter = (
  setFilteredProducts: (products: Product[]) => void
) => {
  // Reference to store the Web Worker instance
  const workerRef = useRef() as { current: Worker };

  // Initialize Web Worker on component mount
  useEffect(() => {
    // Create new Worker instance
    workerRef.current = new Worker(
      new URL("/src/workers/ProductsFilterWorker.ts", import.meta.url)
    ) as never;

    // Handle successful filter results from worker
    workerRef.current.onmessage = (event) => {
      setFilteredProducts(event?.data);
    };

    // Handle worker errors
    workerRef.current.onerror = (error) => {
      console.log("Filter Worker error:", error);
    };

    // Cleanup: terminate worker on component unmount
    return () => {
      if (workerRef.current) {
        workerRef.current.terminate();
      }
    };
  }, []);

  /**
   * Sends filter parameters to Web Worker to process products filtering
   * @param productsList - Array of products to filter
   * @param category - Category to filter by, or null for no category filter
   * @param stock - Stock status to filter by, or null for no stock filter
   */
  const runProductsFilter = (
    productsList: Product[],
    category: string | null,
    stock: string | null
  ) => {
    workerRef.current?.postMessage({
      productsList: productsList,
      category: category,
      stock: stock,
    });
  };

  return {
    runProductsFilter,
  };
};
