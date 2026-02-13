import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetail from "./components/ItemDetail";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer saludo="Bienvenido a Tienda Tech" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer saludo="Bienvenido a Tienda Tech" />} />
        <Route path="/item/:itemId" element={<ItemDetail />} />
      </Routes>
    </div>
  );
}

export default App;
