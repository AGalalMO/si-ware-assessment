import { useEffect, useRef } from "react";
import { Product } from "../types/product";
import { SORT_ENUM } from "../features/productsTable/types";

/**
 * Custom hook for sorting products using a Web Worker
 * @param setSortedProducts - Callback function to update the sorted products state
 * @returns Object containing the runProductsSort function
 */
export const useProductsSort = (
  setSortedProducts: (sortedProducts: Product[]) => void
) => {
  // Reference to the Web Worker instance
  const workerRef = useRef() as { current: Worker };

  useEffect(() => {
    // Initialize Web Worker
    workerRef.current = new Worker(
      new URL("/src/workers/ProductsSortingWorker.ts", import.meta.url)
    ) as never;

    // Handle successful sorting results
    workerRef.current.onmessage = (event) => {
      setSortedProducts(event?.data);
    };

    // Handle Web Worker errors
    workerRef.current.onerror = (error) => {
      console.log("SORT Worker error:", error);
    };

    // Cleanup: terminate Web Worker when component unmounts
    return () => {
      if (workerRef.current) {
        workerRef.current.terminate();
      }
    };
  }, []);

  /**
   * Triggers the product sorting operation in the Web Worker
   * @param productsList - Array of products to sort
   * @param newSortCriteria - Sort criteria enum value
   * @param objectKey - Key of the product object to sort by
   */
  const runProductsSort = (
    productsList: Product[],
    newSortCriteria: SORT_ENUM,
    objectKey: string
  ) => {
    workerRef.current?.postMessage({
      productsList: productsList,
      newSortCriteria: newSortCriteria,
      objectKey: objectKey,
    });
  };

  return {
    runProductsSort,
  };
};
