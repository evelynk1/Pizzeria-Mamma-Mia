import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [token, setToken] = useState(false); // simulación login
  const total = 25000;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3 shadow-sm">
      
      {/* IZQUIERDA */}
      <div className="d-flex align-items-center gap-3">
        
        <Link className="navbar-brand fw-bold me-3" to="/">
          <i className="bi bi-pizza"></i> Pizzería Mamma Mia!
        </Link>

        <Link to="/" className="btn btn-outline-light">
          <i className="bi bi-house"></i> Home
        </Link>

        {token ? (
          <>
            <Link to="/profile" className="btn btn-outline-light">
              <i className="bi bi-person-circle"></i> Profile
            </Link>

            <button
              className="btn btn-outline-light"
              onClick={() => setToken(false)}
            >
              <i className="bi bi-box-arrow-right"></i> Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline-light">
              <i className="bi bi-box-arrow-in-right"></i> Login
            </Link>

            <Link to="/register" className="btn btn-outline-light">
              <i className="bi bi-person-plus"></i> Register
            </Link>
          </>
        )}
      </div>

      {/* DERECHA */}
      <div className="ms-auto">
        <Link to="/cart" className="btn btn-info fw-bold px-3">
          <i className="bi bi-cart"></i> Total: ${total.toLocaleString()}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;