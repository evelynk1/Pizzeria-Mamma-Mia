import React from "react";
import { useState } from "react";

const Navbar = ({setView}) => {
  // estado para simular si esta logueado
  const [token, setToken] = useState(false);
  const total = 25000;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      {/* Logo + botones juntos */}
      <div className="d-flex align-items-center gap-2">
        <a className="navbar-brand" href="#">
          <i className="bi bi-pizza"></i> Pizzería Mamma Mia!
        </a>

        {/* cambia la vista a home */}
        <button 
          className="btn btn-outline-light"
          onClick={() => setView("home")}
        >
          <i className="bi bi-house"></i> Home
        </button>

        {token ? (
          <>
            {/* si esta logueado aparece profile */}
            <button className="btn btn-outline-light">
              <i className="bi bi-person-circle"></i> Profile
            </button>

            {/* cambia el token a false y se vuelva a home */}
            <button
              className="btn btn-outline-light"
              onClick={() => {
                setToken(false);
                setView("home"); //  volver a Home al hacer logout
              }}
            >
              <i className="bi bi-box-arrow-right"></i> Logout
            </button>
          </>
        ) : (
          <>
            {/* Si NO está logueado, aparece Login */}
            <button
              className="btn btn-outline-light"
              onClick={() => setView("login")}
            >
              <i className="bi bi-box-arrow-in-right"></i> Login
            </button>

            {/* Y también Register */}
            <button
              className="btn btn-outline-light"
              onClick={() => setView("register")}
            >
              <i className="bi bi-person-plus"></i> Register
            </button>
          </>
        )}
      </div>

      {/* Botón carrito al extremo derecho */}
      <div className="ms-auto">
        <button className="btn btn-outline-info">
          <i className="bi bi-cart"></i> Total:${total.toLocaleString()}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

