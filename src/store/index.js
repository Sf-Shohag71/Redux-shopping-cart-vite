import { combineReducers, createStore } from "redux";
import cartSlice, { decreaseCartItemQuantity } from "./cartSlice";
import productsReducer from "./productsReducer";
import wishListReducer from "./wishListReducer";

const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartSlice,
  wishList: wishListReducer,
});

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
console.log(store);

const a = decreaseCartItemQuantity(70);
console.log(a);


