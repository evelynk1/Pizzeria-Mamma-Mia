import React from "react";
import { useState } from "react";

const Navbar = ({ setView }) => {
  const [token, setToken] = useState(false);
  const total = 25000;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3 shadow-sm">
      
      {/* IZQUIERDA */}
      <div className="d-flex align-items-center gap-3">
        
        <a className="navbar-brand fw-bold me-3" href="#">
          <i className="bi bi-pizza"></i> Pizzería Mamma Mia!
        </a>

        <button
          className="btn btn-outline-light"
          onClick={() => setView("home")}
        >
          <i className="bi bi-house"></i> Home
        </button>

        {token ? (
          <>
            <button className="btn btn-outline-light">
              <i className="bi bi-person-circle"></i> Profile
            </button>

            <button
              className="btn btn-outline-light"
              onClick={() => {
                setToken(false);
                setView("home");
              }}
            >
              <i className="bi bi-box-arrow-right"></i> Logout
            </button>
          </>
        ) : (
          <>
            <button
              className="btn btn-outline-light"
              onClick={() => setView("login")}
            >
              <i className="bi bi-box-arrow-in-right"></i> Login
            </button>

            <button
              className="btn btn-outline-light"
              onClick={() => setView("register")}
            >
              <i className="bi bi-person-plus"></i> Register
            </button>
          </>
        )}
      </div>

      {/* DERECHA */}
      <div className="ms-auto">
        <button className="btn btn-info fw-bold px-3">
          <i className="bi bi-cart"></i> Total: ${total.toLocaleString()}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;