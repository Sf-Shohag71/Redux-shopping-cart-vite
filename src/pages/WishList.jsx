export default function wishList() {
  return (
    <div className="cart-container">
      <h2>Items in Your Wish List</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
      </div>
    </div>
  );
}
