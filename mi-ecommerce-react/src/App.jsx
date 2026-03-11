import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import CheckoutForm from "./components/Checkout/CheckoutForm";

import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>

      <NavBar />

      <Routes>

        <Route path="/" element={<ItemListContainer />} />

        <Route path="/category/:categoryId" element={<ItemListContainer />} />

        <Route path="/item/:itemId" element={<ItemDetailContainer />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<CheckoutForm />} />

      </Routes>

    </CartProvider>
  );
}

export default App;