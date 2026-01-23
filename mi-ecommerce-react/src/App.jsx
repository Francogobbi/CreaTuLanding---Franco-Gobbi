import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer saludo="Bienvenido a Tienda Tech" />
    </div>
  );
}

export default App;
