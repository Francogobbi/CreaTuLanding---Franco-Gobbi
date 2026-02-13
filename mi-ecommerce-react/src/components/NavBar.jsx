import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const categories = ["laptops", "smartphones", "accesorios", "monitores"];

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>🛍️ Tienda Tech</Link>
      </div>
      <ul style={styles.menu}>
        <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Inicio</Link></li>
        {categories.map(cat => (
          <li key={cat}>
            <Link to={`/category/${cat}`} style={{ color: "white", textDecoration: "none" }}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
      <CartWidget />
    </nav>
  );
};

const styles = {
  nav: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px", backgroundColor: "#00bcd4", color: "white" },
  logo: { fontWeight: "bold", fontSize: "1.5rem" },
  menu: { listStyle: "none", display: "flex", gap: "15px", margin: 0, padding: 0 }
};

export default NavBar;
