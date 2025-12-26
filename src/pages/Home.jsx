import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { products } from "../assets/assets";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <h2>Latest Products</h2>

        <div className="row">
          {products.slice(0, 8).map((products) => (
            <ProductCard key={products._id} product={products} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
