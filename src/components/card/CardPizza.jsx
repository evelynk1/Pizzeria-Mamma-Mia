import React from "react";
import { Link } from "react-router-dom";

const CardPizza = ({ id, name, price, ingredients, img, onAdd }) => {
  return (
    <div className="card mb-4 border-naranjo">
      
      {/* Imagen de la pizza */}
      <img src={img} className="card-img-top" alt={name} />

      <div className="card-body">

        {/* Nombre */}
        <h5 className="card-title">Pizza {name}</h5>

       
        {/* Se agrega ? para evitar error si ingredients es undefined */}
        <p className="card-text">
          <strong>Ingredientes:</strong> {ingredients?.join(", ")}
        </p>

        {/* Precio */}
        <p className="card-text">
          <strong>Precio:</strong> ${price?.toLocaleString()}
        </p>

        <div className="d-flex justify-content-between">

          <Link to={`/pizza/${id}`} className="btn btn-outline-dark">
            <i className="bi bi-eye"></i> Ver más
          </Link>

          {/* Botón añadir al carrito */}
          <button 
            className="btn btn-dark"
            onClick={onAdd} 
          >
            <i className="bi bi-cart-plus"></i> Añadir
          </button>

        </div>
      </div>
    </div>
  );
};

export default CardPizza;
