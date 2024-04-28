import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.svg";

function Header() {
  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
         <img src={CartIcon} alt="" />
          <div className="cart-items-count">0</div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
