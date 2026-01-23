import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>🛍️ Tienda Tech</div>
      <ul style={styles.menu}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#00bcd4",
    color: "white",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  menu: {
    listStyle: "none",
    display: "flex",
    gap: "15px",
    margin: 0,
    padding: 0,
  },
};

export default NavBar;
