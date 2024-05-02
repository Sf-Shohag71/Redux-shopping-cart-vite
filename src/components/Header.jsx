import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.svg";
import wishList from "../assets/wishList.svg";

function Header() {
  const cartItems = useSelector((state) => state.cartItems);
  const wishListItems = useSelector((state) => state.wishList);
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
