import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {

  return (

    <nav>

      <Link to="/">Tienda Tech</Link>

      <Link to="/category/laptops">Laptops</Link>

      <Link to="/category/smartphones">Smartphones</Link>

      <Link to="/category/accesorios">Accesorios</Link>

      <Link to="/category/monitores">Monitores</Link>

      <CartWidget />

    </nav>

  );
};

export default NavBar;