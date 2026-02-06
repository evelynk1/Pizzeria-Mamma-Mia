import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [token, setToken] = useState(false);
  const total = 25000;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      {/* Logo + botones juntos */}
      <div className="d-flex align-items-center gap-2">
        <a className="navbar-brand" href="#">
          <i className="bi bi-pizza"></i> Pizzería Mamma Mia!
        </a>

        <button className="btn btn-outline-light">
          <i className="bi bi-house"></i> Home
        </button>

        {token ? (
          <>
            <button className="btn btn-outline-light">
              <i className="bi bi-person-circle"></i> Profile
            </button>
            <button
              className="btn btn-outline-light"
              onClick={() => setToken(false)}
            >
              <i className="bi bi-box-arrow-right"></i> Logout
            </button>
          </>
        ) : (
          <>
            <button
              className="btn btn-outline-light"
              onClick={() => setToken(true)}
            >
              <i className="bi bi-box-arrow-in-right"></i> Login
            </button>
            <button className="btn btn-outline-light">
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
