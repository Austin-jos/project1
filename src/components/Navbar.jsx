import { Link } from "react-router-dom";

export default function Navbar() {
  const styles = {
    nav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 30px",
      background: "#2563eb",
      color: "#fff",
    },
    left: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
    },
    right: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
    },
    link: {
      color: "#fff",
      textDecoration: "none",
      fontWeight: "bold",
    },
    loginIcon: {
      fontSize: "24px",
      textDecoration: "none",
      color: "#fff",
      cursor: "pointer",
    },
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.left}>
        <h2>🛍️ ShopEasy</h2>
      </div>

      <div style={styles.right}>
        <Link style={styles.link} to="/">
          Home
        </Link>

        <Link style={styles.link} to="/products">
          Products
        </Link>

        <Link style={styles.link} to="/cart">
          Cart
        </Link>

        
        <Link
  to="/register"
  style={{
    color: "white",
    textDecoration: "none",
    fontSize: "24px",
  }}
  title="Register"
>
  👤
</Link>
      </div>
    </nav>
  );
}