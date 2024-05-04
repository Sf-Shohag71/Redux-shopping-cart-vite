import { configureStore } from "@reduxjs/toolkit";
import cartSlice, { decreaseCartItemQuantity } from "./cartSlice";
import productsReducer from "./productsReducer";
import wishListReducer from "./wishListReducer";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartSlice,
    wishList: wishListReducer,
  },
});
const a = decreaseCartItemQuantity(70);
console.log(a);
