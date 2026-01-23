import React, { useState } from "react";

const CartWidget = () => {
  const [cantidad, setCantidad] = useState(0);

  return (
    <button
      style={styles.button}
      onClick={() => setCantidad(cantidad + 1)}
    >
      🛒 <span style={styles.contador}>{cantidad}</span>
    </button>
  );
};

const styles = {
  button: {
    backgroundColor: "#ffffff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "25px",
    cursor: "pointer",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  contador: {
    backgroundColor: "#00bcd4",
    color: "white",
    borderRadius: "50%",
    padding: "2px 6px",
    fontSize: "0.8rem",
  },
};

export default CartWidget;
