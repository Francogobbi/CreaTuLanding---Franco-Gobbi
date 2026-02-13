import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";

const ItemDetail = () => {
  const { itemId } = useParams();
  const product = products.find(p => p.id === Number(itemId));

  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div style={styles.container}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={styles.image} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <button style={styles.button}>Agregar al carrito</button>
      <div style={{ marginTop: "15px" }}>
        <Link to="/">Volver al catálogo</Link>
      </div>
    </div>
  );
};

const styles = {
  container: { maxWidth: "600px", margin: "20px auto", padding: "20px", textAlign: "center", backgroundColor: "#f5f5f5", borderRadius: "8px" },
  image: { width: "100%", borderRadius: "8px", marginBottom: "15px" },
  button: { padding: "10px 20px", borderRadius: "8px", backgroundColor: "#00bcd4", color: "white", border: "none", cursor: "pointer" }
};

export default ItemDetail;
