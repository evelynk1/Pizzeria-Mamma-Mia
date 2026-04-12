import { pizzaCart } from "../pizzas";
import { useState } from "react";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

/*importar UserContext */
import { UserContext } from "../context/UserContext";

const Cart = () => {

    // const [cart, setCart] = useState(pizzaCart);

    const { cart, total, addToCart, removeFromCart } = useContext(CartContext);

    /*  obtenemos el token */
    const { token } = useContext(UserContext);

    /* estado para mensaje de compra */
    const [mensaje, setMensaje] = useState("");

    /*
    const aumentarCantidad = (id) => {
        setCart(cart.map((pizza) => 
            pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
        ));
    };
    */
    const aumentarCantidad = (pizza) => {
        addToCart(pizza);
    };

    /*
    const disminuirCantidad = (id) => {
        setCart(cart.map((pizza) => 
            pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
        ).filter(pizza => pizza.count > 0)); 
    };
    */

    const disminuirCantidad = (id) => {
        removeFromCart(id);
    };

    /*
    const total = cart.reduce((acc, p) => acc + (p.price * p.count), 0);
    */

    /*
    =====================================================
    FUNCION PARA ENVIAR COMPRA AL BACKEND
    =====================================================
    */
    const handleCheckout = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/checkouts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",

                    /* enviamos el token */
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ cart }), // enviamos el carrito
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Error en la compra");
            }

            /* mensaje de éxito */
            setMensaje("Compra realizada con éxito");

        } catch (error) {
            console.error(error);
            setMensaje("Error al procesar la compra");
        }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: '600px' }}>
            <h3 className="mb-4">Detalles del pedido:</h3>

            {cart.map(el => (
                <div className="d-flex align-items-center justify-content-between mb-3 p-2 border-bottom" key={el.id}>
                    <div className="d-flex align-items-center">
                        <img src={el.img} alt={el.name} className="img-thumbnail" style={{ width: '60px' }} />
                        <h6 className="ms-3 mb-0 text-capitalize">{el.name}</h6>
                    </div>
                    <div className="d-flex align-items-center">
                        <span className="me-3 fw-bold">${el.price.toLocaleString()}</span>
    
                        <button 
                            className="btn btn-outline-danger btn-sm px-2" 
                            onClick={() => disminuirCantidad(el.id)}
                        >
                            -
                        </button>
                        
                        <span className="mx-3 fw-bold">{el.quantity}</span>
                        
                        <button 
                            className="btn btn-outline-primary btn-sm px-2" 
                            onClick={() => aumentarCantidad(el)}
                        >
                            +
                        </button>
                    </div>
                </div>
            ))}

            <div className="mt-4">
                <h2 className="fw-bold">Total: ${total.toLocaleString()}</h2>

                {/* Si NO hay token - botón deshabilitado */}
                <button 
                    className="btn btn-dark mt-2 px-4"
                    disabled={!token}
                    onClick={handleCheckout} // ejecuta la compra
                >
                    Pagar
                </button>

                {/* mensaje de resultado */}
                {mensaje && <p className="mt-3">{mensaje}</p>}

            </div>
        </div>
    );
};

export default Cart;