import { useSelector } from "react-redux";
import Product from "../components/Product";
import "../pages/Home.css";

function Home() {
  const productsList = useSelector((state) => state.products.list);
  const isLoading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  return isLoading ? (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  ) : error ? (
    <h2 style={{ textAlign: "center" }}>{error}</h2>
  ) : (
    <div className="products-container">
      {productsList.map(({ id, title, price, rating, image }) => (
        <Product
          key={id}
          productId={id}
          title={title}
          price={price}
          imageUrl={image}
          rating={rating.rate}
        />
      ))}
    </div>
  );
}

export default Home;
