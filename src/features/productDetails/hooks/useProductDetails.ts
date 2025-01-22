import { useEffect, useState } from "react";
import { Product } from "../../../types/product";
import { handleValueChangeType } from "../types";
import { editProductData } from "../../../api/services/editProduct";
import { toast } from "react-toastify";

/**
 * Custom hook for managing product details editing functionality
 * @param product - The initial product data
 * @returns {Object} Object containing:
 * - mutableProduct: Current editable product state
 * - loading: Loading state for save operation
 * - isEditEnabled: Whether edit mode is active
 * - handleValueChange: Function to update product values
 * - handleEditClick: Function to enable edit mode
 * - handleSaveClick: Function to save changes
 * - handleCancelClick: Function to cancel changes
 */

export const useProductDetails = (product: Product) => {
  const [isEditEnabled, setIsEditEnabled] = useState(false);
  const [mutableProduct, setMutableProduct] = useState(product);

  useEffect(() => {
    setMutableProduct(product);
  }, [product]);

  /**
   * Handles changes to product values
   * @param key - The property key to update
   * @param value - The new value
   * @param nestedKey - Optional key for nested dimension properties
   */
  const handleValueChange: handleValueChangeType = (key, value, nestedKey) => {
    if (nestedKey) {
      setMutableProduct({
        ...mutableProduct,
        dimensions: {
          ...mutableProduct?.dimensions,
          [nestedKey]: value,
        },
      });
    } else setMutableProduct({ ...mutableProduct, [key]: value });
  };

  const [loading, setLoading] = useState(false);

  /**
   * Handles saving product changes
   * @returns Promise containing the API response
   */
  const handleSaveClick = async () => {
    setLoading(true);
    const response = await editProductData(mutableProduct);
    if (response) {
      setIsEditEnabled(false);
    } else {
      toast.error("Update Failed Due to Server issue");
    }
    setLoading(false);
  };

  /**
   * Resets product changes and disables edit mode
   */
  const handleCancelClick = () => {
    setMutableProduct(product);
    setIsEditEnabled(false);
  };

  /**
   * Enables edit mode for the product
   */
  const handleEditClick = () => {
    setIsEditEnabled(true);
  };

  return {
    mutableProduct,
    loading,
    isEditEnabled,
    handleValueChange,
    handleEditClick,
    handleSaveClick,
    handleCancelClick,
  };
};
