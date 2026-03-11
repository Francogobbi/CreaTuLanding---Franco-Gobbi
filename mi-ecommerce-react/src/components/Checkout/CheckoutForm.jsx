import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const CheckoutForm = () => {

  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const handleSubmit = async (e) => {

    e.preventDefault();

    const order = {

      buyer: {
        name: e.target.name.value,
        email: e.target.email.value
      },

      items: cart,

      total: totalPrice()

    };

    const ordersRef = collection(db,"orders");

    const doc = await addDoc(ordersRef, order);

    setOrderId(doc.id);

    clearCart();

  };

  if(orderId){

    return <h2>Orden generada: {orderId}</h2>;

  }

  return (

    <form onSubmit={handleSubmit}>

      <input name="name" placeholder="Nombre"/>

      <input name="email" placeholder="Email"/>

      <button type="submit">
        Comprar
      </button>

    </form>

  );

};

export default CheckoutForm;