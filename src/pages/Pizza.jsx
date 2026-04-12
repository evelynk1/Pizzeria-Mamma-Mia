import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useParams, useNavigate } from "react-router-dom";

const Pizza = () => {
  // Estado donde guardamos la info de la pizza
  const [info, setInfo] = useState(null);

  // Obtenemos el id desde la URL (/pizza/:id)
  const { id } = useParams();

  // Contexto del carrito
  const { addToCart } = useContext(CartContext);

  // Hook para navegar (lo usaremos para "volver")
  const navigate = useNavigate();

  // useEffect se ejecuta cada vez que cambia el id

  useEffect(() => {
    const consultarApi = async () => {
      try {
        // URL dinámica usando el id
       const url = `http://localhost:5000/pizzas/${id}`;

        const response = await fetch(url);
        const data = await response.json();

        // Guardamos la info en el estado
        setInfo(data);
      } catch (error) {
        console.error("Error al obtener la pizza:", error);
      }
    };

    consultarApi();
  }, [id]); //  si cambia el id, vuelve a cargar

  // Mientras carga, mostramos spinner
  if (!info) {
    return (
      <div className="d-flex justify-content-center my-5">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div
        className="card mb-3 shadow-sm border-0 overflow-hidden"
        style={{ maxWidth: "900px", margin: "auto" }}
      >
        <div className="row g-0 align-items-center">
          {/* Imagen */}
          <div className="col-md-5">
            <img
              src={info.img}
              alt={info.name}
              className="img-fluid h-100 w-100"
              style={{ objectFit: "cover", minHeight: "300px" }}
            />
          </div>

          {/* Contenido */}
          <div className="col-md-7">
            <div className="card-body p-4">
              {/* Nombre */}
              <h2 className="card-title text-capitalize fw-bold mb-3">
                {info.name}
              </h2>

              {/* Descripción */}
              <p className="card-text text-muted mb-4">{info.desc}</p>

              {/* Ingredientes */}
              <div className="bg-light p-3 rounded-3 mb-4">
                <p className="fw-bold mb-2">Ingredientes:</p>
                <ul className="list-unstyled d-flex flex-wrap gap-2 mb-0">
                  {info.ingredients?.map((ingrediente) => (
                    <li
                      key={ingrediente}
                      className="badge bg-white text-dark border p-2 fw-normal"
                    >
                      {ingrediente}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Precio + botones */}
              <div className="d-flex justify-content-between align-items-center mt-auto">
                <h3 className="text-danger fw-bold mb-0">
                  {/* Seguridad por si price aún no existe */}
                  ${info.price?.toLocaleString()}
                </h3>

                <div className="d-flex gap-2">
                  
                  
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => navigate(-1)}
                  >
                    ← Volver
                  </button>

                  {/* Botón añadir al carrito */}
                  <button
                    className="btn btn-dark"
                    onClick={() => addToCart(info)}
                  >
                    <i className="bi bi-cart-plus"></i> Añadir
                  </button>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
