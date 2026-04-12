import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";

const Navbar = () => {

  const { token, logout } = useContext(UserContext);

  const { total } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3 shadow-sm">
      
      {/* IZQUIERDA */}
      <div className="d-flex align-items-center gap-3">
        
        {/* Logo + nombre */}
        <Link className="navbar-brand fw-bold me-3" to="/">
          <i className="bi bi-pizza"></i> Pizzería Mamma Mia!
        </Link>

        {/* Siempre visible */}
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
              onClick={logout}
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

        {/* Total del carrito (siempre visible) */}
        <Link to="/cart" className="btn btn-info">
          Total: ${total.toLocaleString()}
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
