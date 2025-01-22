import { Product } from "../types/product";

/**
 * Web Worker that filters products based on category and stock status
 *
 * Listens for messages containing:
 * @param {Object} event.data - The data passed to the worker
 * @param {Product[]} event.data.productsList - Array of products to filter
 * @param {string} [event.data.category] - Optional category to filter by
 * @param {string} [event.data.stock] - Optional stock status to filter by
 *
 * @returns {Product[]} Filtered array of products posted back via postMessage
 */

addEventListener("message", async (event) => {
  try {
    // If no filters are provided, return the original list
    if (!event?.data?.category && !event?.data?.stock) {
      postMessage(event?.data?.productsList);
    } else {
      // Filter products based on provided criteria
      const sortedProducts = (event.data.productsList as Product[])?.filter(
        (product) => {
          // Case 1: Both category and stock filters are provided
          if (event?.data?.category && event?.data?.stock) {
            if (
              event?.data?.category == product?.category &&
              event?.data?.stock == product?.stockStatus
            )
              return true;
            return false;
          }

          // Case 2: Either category OR stock filter is provided
          if (
            (event?.data?.category &&
              event?.data?.category == product?.category) ||
            (event?.data?.stock && event?.data?.stock == product?.stockStatus)
          ) {
            return true;
          }
          return false;
        }
      );

      postMessage(sortedProducts);
    }
  } catch {
    console.info("AUTO SORTING FAILED ");
  }
});
