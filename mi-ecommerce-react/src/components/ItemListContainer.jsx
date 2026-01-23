import React from "react";

const ItemListContainer = ({ saludo }) => {
  return (
    <div style={styles.container}>
      <h2>{saludo}</h2>
      <p>En esta sección se mostrarán los productos de tu tienda.</p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "20px auto",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
  },
};

export default ItemListContainer;
