import { useState } from "react";

export default function ProductCard({ product }) {
  const [hover, setHover] = useState(false);

  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
    background: "#fff",
    cursor: "pointer",
    transition: "all 0.3s ease",
    transform: hover ? "translateY(-10px) scale(1.03)" : "translateY(0)",
    boxShadow: hover
      ? "0 10px 25px rgba(0,0,0,0.2)"
      : "0 2px 5px rgba(0,0,0,0.1)",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />

      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      <button
        style={{
          padding: "10px 20px",
          background: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}