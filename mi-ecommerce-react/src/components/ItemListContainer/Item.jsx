import { Link } from "react-router-dom";

const Item = ({ product }) => {

  return (

    <div>

      <h3>{product.title}</h3>

      <img src={product.image} width="200" />

      <p>${product.price}</p>

      <Link to={`/item/${product.id}`}>Ver detalle</Link>

    </div>

  );
};

export default Item;