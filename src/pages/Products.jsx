import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import products from "../data/products";

export default function Products() {
  return (
    <>
      <Navbar />

      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        All Products
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          padding: "30px",
        }}
      >
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <Footer />
    </>
  );
}