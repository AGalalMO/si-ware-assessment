/**
 * Web Worker for sorting product lists
 * Handles sorting of Product arrays in either ascending or descending order
 * based on a specified object key
 */
import { Product } from "../types/product";

/**
 * Event listener for messages sent to the worker
 * @param event MessageEvent containing:
 *   - objectKey: Key to sort by
 *   - newSortCriteria: "ASC" or "DESC" sort direction
 *   - productsList: Array of Product objects to sort
 */
addEventListener("message", async (event) => {
  try {
    const objectKey = event?.data?.objectKey as never;
    const sortedList =
      event?.data?.newSortCriteria == "ASC"
        ? sortAscProducts(event.data.productsList as Product[], objectKey)
        : sortDescProducts(event.data.productsList as Product[], objectKey);
    postMessage(sortedList);
  } catch {
    console.info(" SORTING FAILED ");
  }
});

/**
 * Sorts products in ascending order based on the specified object key
 * @param products Array of Product objects to sort
 * @param objectKey Key of the Product object to sort by
 * @returns Sorted array of Products
 */
const sortAscProducts = (products: Product[], objectKey: never) => {
  return (products ?? [])?.sort((a, b) => {
    if (a?.[objectKey] < b?.[objectKey]) return -1;
    if (a?.[objectKey] > b?.[objectKey]) return 1;
    return 0;
  });
};

/**
 * Sorts products in descending order based on the specified object key
 * @param objectKey Key of the Product object to sort by
 * @param products Array of Product objects to sort
 * @returns Sorted array of Products
 */
const sortDescProducts = (products: Product[], objectKey: never) => {
  return (products ?? [])?.sort((a, b) => {
    if (a?.[objectKey] < b?.[objectKey]) return 1;
    if (a?.[objectKey] > b?.[objectKey]) return -1;
    return 0;
  });
};
