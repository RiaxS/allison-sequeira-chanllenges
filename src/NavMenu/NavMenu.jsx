import React from "react";
import { Link } from "react-router-dom";

function NavMenu() {
  return (
    <nav>
      <div className="nav-bar-container">
        <h2 className="logo text-3xl">Varitos Bakery</h2>
        <ul className="navbar-list ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Inicio
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/catalog">
              Catalogo
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/contact">
              Acerca de Nosotros
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <span className="material-symbols-outlined">shopping_cart</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavMenu;
