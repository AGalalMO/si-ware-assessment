import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";

const store = configureStore({
  reducer: {
    // 'products' here is the key for the products slice in the state
    mainStore: productsReducer,
  },
});

export default store;
