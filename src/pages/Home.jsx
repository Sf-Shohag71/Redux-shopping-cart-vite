import { useSelector } from "react-redux";
import Product from "../components/Product";

function Home() {
  const productsList = useSelector((state) => state.products);
  return (
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
