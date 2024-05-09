import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productsReducer from "./productsSlice";
import wishListReducer from "./wishListReducer";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartSlice,
    wishList: wishListReducer,
  },
});

