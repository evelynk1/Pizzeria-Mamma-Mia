import { useState, useEffect } from "react";

const Pizza = () => {
  const [info, setInfo] = useState(null);

  const consultarApi = async () => {
    try {
      const url = "http://localhost:5000/api/pizzas/p001";
      const response = await fetch(url);
      const data = await response.json();
      setInfo(data);
    } catch (error) {
      console.error("Error al obtener la pizza:", error);
    }
  };

  useEffect(() => {
    consultarApi();
  }, []);

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
          <div className="col-md-5">
            <img
              src={info.img}
              alt={info.name}
              className="img-fluid h-100 w-100"
              style={{ objectFit: "cover", minHeight: "300px" }}
            />
          </div>

          <div className="col-md-7">
            <div className="card-body p-4">
              <h2 className="card-title text-capitalize fw-bold mb-3">
                {info.name}
              </h2>
              <p className="card-text text-muted mb-4">{info.desc}</p>

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

              <div className="d-flex justify-content-between align-items-center mt-auto">
                <h3 className="text-danger fw-bold mb-0">
                  ${info.price.toLocaleString()}
                </h3>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-outline-dark">
                    <i className="bi bi-eye"></i> Ver más
                  </button>
                  <button className="btn btn-dark">
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
