import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Cart() {
  return (
    <>
      <Navbar />

      <div
        style={{
          maxWidth: "700px",
          margin: "40px auto",
          padding: "20px",
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Your Cart</h2>
        <p>Wireless Headphones - ₹2,999</p>
        <p>Smart Watch - ₹4,999</p>
        <hr />
        <h3>Total: ₹7,998</h3>

        <button
          style={{
            padding: "10px 20px",
            background: "#22c55e",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Checkout
        </button>
      </div>

      <Footer />
    </>
  );
}