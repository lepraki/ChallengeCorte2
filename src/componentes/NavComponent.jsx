import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavComponent.css";

function NavComponent() {
  const location = useLocation();

  return (
    <nav>
      <ul>
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Inicio</Link>
        </li>
        <li className={location.pathname === "/acerca" ? "active" : ""}>
          <Link to="/acerca">Acerca de</Link>
        </li>
        <li className={location.pathname === "/contacto" ? "active" : ""}>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavComponent;