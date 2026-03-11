import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ product }) => {

  const [added, setAdded] = useState(false);

  const { addItem } = useContext(CartContext);

  const handleAdd = (quantity) => {

    addItem(product, quantity);

    setAdded(true);

  };

  return (

    <div>

      <h2>{product.title}</h2>

      <img src={product.image} width="300"/>

      <p>{product.description}</p>

      <p>${product.price}</p>

      {!added && <ItemCount stock={10} initial={1} onAdd={handleAdd}/>}

      {added && <p>Producto agregado al carrito</p>}

    </div>

  );
};

export default ItemDetail;