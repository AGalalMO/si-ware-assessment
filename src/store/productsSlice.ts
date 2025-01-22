import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/product";

const initialState: {
  products: Product[];
  categories: string[];
} = {
  products: [],
  categories: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fillProductsList(state, action)
    {
      state.products = [...(action?.payload?.products ?? [])];
      state.categories = [...(action?.payload?.categories ?? [])];
    },
    updateProduct(state, action) {
      state.products[action.payload.index] = {
        ...state.products[action.payload.index],
        ...action.payload?.item,
      };
    },
  },
});

export const { fillProductsList, updateProduct } = productsSlice.actions;
export default productsSlice.reducer;
