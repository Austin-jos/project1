import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section style={{ textAlign: "center", padding: "60px" }}>
      <h1>Welcome to ShopEasy</h1>

      <button
        onClick={() => navigate("/products")}
        style={{
          padding: "10px 20px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Shop Now
      </button>
    </section>
  );
}

export default Hero;