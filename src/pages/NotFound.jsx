import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound-container">

      <div className="notfound-box text-center">

        <h1 className="notfound-404">404</h1>

        <h2 className="mb-3">Ups... te perdiste 🍕</h2>

        <p className="mb-4 text-light">
          La página que buscas no existe o fue movida.
        </p>

        <Link to="/" className="btn btn-warning fw-bold px-4">
          Volver al inicio
        </Link>

      </div>
    </div>
  );
};

export default NotFound;
