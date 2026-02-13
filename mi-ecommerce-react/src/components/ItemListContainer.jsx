import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";

const ItemListContainer = ({ saludo }) => {
  const { categoryId } = useParams();
  const filteredProducts = categoryId
    ? products.filter(p => p.category === categoryId)
    : products;

  return (
    <div style={styles.container}>
      <h2>{saludo}</h2>
      <div style={styles.grid}>
        {filteredProducts.map(product => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.title} style={styles.image} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <Link to={`/item/${product.id}`}>Ver detalle</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { maxWidth: "900px", margin: "20px auto", padding: "20px", textAlign: "center", backgroundColor: "#f5f5f5", borderRadius: "8px" },
  grid: { display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", marginTop: "20px" },
  card: { width: "200px", padding: "10px", border: "1px solid #ccc", borderRadius: "8px", textAlign: "center" },
  image: { width: "100%", borderRadius: "8px" }
};

export default ItemListContainer;
