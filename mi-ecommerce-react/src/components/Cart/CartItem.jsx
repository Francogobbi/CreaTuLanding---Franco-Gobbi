const CartItem = ({ product }) => {

  return (

    <div>

      <h3>{product.title}</h3>

      <p>Cantidad: {product.quantity}</p>

      <p>Subtotal: ${product.quantity * product.price}</p>

    </div>

  );

};

export default CartItem;