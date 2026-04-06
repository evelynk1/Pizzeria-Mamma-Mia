import React from "react";


const CardPizza = ({ name, price, ingredients, img, onAdd }) => {
  return (
    <div className="card mb-4 border-naranjo">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">Pizza {name}</h5>
        <p className="card-text">
          <strong>Ingredientes:</strong> {ingredients.join(", ")}
        </p>
        <p className="card-text">
          <strong>Precio:</strong> ${price.toLocaleString()}
        </p>

        <div className="d-flex justify-content-between">

          <button className="btn btn-outline-dark">
            <i className="bi bi-eye"></i> Ver más
          </button>
          {/*
          <button className="btn btn-dark">
            <i className="bi bi-cart-plus"></i> Añadir
          </button>
          */}

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

// const CardPizza = ({ name, price, ingredients, img }) => {
//   return (
//     <div className="card mb-4 border-naranjo">
//       <img src={img} className="card-img-top" alt={name} />
//       <div className="card-body">
//         <h5 className="card-title">Pizza {name}</h5>
//         <p className="card-text">
//           <strong>Ingredientes:</strong> {ingredients.join(", ")}
//         </p>
//         <p className="card-text">
//           <strong>Precio:</strong> ${price.toLocaleString()}
//         </p>
//         <div className="d-flex justify-content-between">
//           <button className="btn btn-outline-dark">
//             <i className="bi bi-eye"></i> Ver más
//           </button>
//           <button className="btn btn-dark">
//             <i className="bi bi-cart-plus"></i> Añadir
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

export default CardPizza;
