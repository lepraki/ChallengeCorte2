import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavComponent.css"; // Importar archivo CSS con estilos

function NavComponent() {
  // Obtiene la ruta actual
  const location = useLocation();

  return (
    <nav>
      <ul>
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Inicio</Link>
        </li>
        <li className={location.pathname === "/about" ? "active" : ""}>
          <Link to="/about">Acerca de</Link>
        </li>
        <li className={location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavComponent;