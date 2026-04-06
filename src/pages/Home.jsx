import React from "react";
import Header from "../components/header/Header";
import CardPizza from "../components/card/CardPizza";
import { pizzas } from "../pizzas";
import { useEffect, useState } from "react";


import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  /* usamos el context */
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error al cargar las pizzas:", error);
      }
    };

    fetchPizzas();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Nuestras Pizzas</h2>
      <div className="row">
        {pizzas.map((pizza) => (
          <div className="col-md-4" key={pizza.id}>
            
            {/* código  sin carrito) */}
            {/*
            <CardPizza
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
            */}

            {/* agregamos funcin para el carrito */}
            <CardPizza
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}

              /* la función passa al componente */
              onAdd={() => addToCart(pizza)}
            />

          </div>
        ))}
      </div>
    </div>
  );

  // ===== Hito 3 ====
  // return (
  //   <>
  //     <Header image={Header} />
  //     <div className="container my-5">
  //       <div className="row g-4">
  //         {pizzas.map((el) => (
  //           <div className="col-12 col-md-4" key={el.id}>
  //             <CardPizza
  //               name={el.name}
  //               price={el.price}
  //               ingredients={el.ingredients}
  //               img={el.img}
  //               descripcion={el.desc}
  //             />
  //           </div>
  //         ))}
  //       </div>  
  //     </div>
  //   </>
  // );

  // return (
  //   <div className="container mt-4">
  //     <Header />

  //     <div className="row mt-4">
  //       <div className="col-md-4">
  //         <CardPizza
  //           name="Napolitana"
  //           price={5950}
  //           ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
  //           img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
  //         />
  //       </div>
  //       <div className="col-md-4">
  //         <CardPizza
  //           name="Española"
  //           price={6950}
  //           ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
  //           img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
  //         />
  //       </div>
  //       <div className="col-md-4">
  //         <CardPizza
  //           name="Pepperoni"
  //           price={6950}
  //           ingredients={["mozzarella", "pepperoni", "orégano"]}
  //           img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
  //         />
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Home;
