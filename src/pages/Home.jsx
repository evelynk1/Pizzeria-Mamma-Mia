import React, { useEffect, useState, useContext } from "react";
import Header from "../components/header/Header";
import CardPizza from "../components/card/CardPizza";
import { CartContext } from "../context/CartContext";
const Home = () => {

  // ✅ Hooks deben ir DENTRO del componente
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        const data = await response.json();

        setPizzas(data);

      } catch (error) {
        console.error("Error al cargar las pizzas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPizzas();
  }, []);

  return (
    <div className="container mt-4">
      <Header />

      <h2 className="mb-4">Nuestras Pizzas</h2>

      {/* Estado de carga */}
      {loading && <p>Cargando pizzas...</p>}

      <div className="row">
        {pizzas.map((pizza) => (
          <div className="col-md-4" key={pizza.id}>
            <CardPizza
              id={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
              onAdd={() => addToCart(pizza)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;