import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.svg";
import wishList from "../assets/wishList.svg";
import { loadCartItems } from "../store/cartSlice";
import {
  fetchProducts,
  updateAllProducts
} from "../store/productsSlice";

function Header() {
  const cartItems = useSelector((state) => state.cartItems);
  const wishListItems = useSelector((state) => state.wishList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        dispatch(updateAllProducts(data));
      })
      .catch(() => {
        // dispatch(fetchProductsError("Something went wrong"));
      });
    fetch("https://fakestoreapi.com/carts/5")
      .then((response) => response.json())
      .then((data) => {
        dispatch(loadCartItems(data));
      });
  }, []);
  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <Link className="cart-icon" to="/wishList">
          <img src={wishList} alt="wishList" />
          <div className="cart-items-count">
            {wishListItems.reduce(
              (accumulator, currentItem) => accumulator + currentItem,
              0
            )}
          </div>
        </Link>
        <Link className="cart-icon" to="/cart">
          <img src={CartIcon} alt="" />
          <div className="cart-items-count">
            {cartItems.reduce(
              (accumulator, currentItem) => accumulator + currentItem.quantity,
              0
            )}
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
