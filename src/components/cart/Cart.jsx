import { pizzaCart } from "../pizzas";
import { useState } from "react";

const Cart = () => {
    const [cart, setCart] = useState(pizzaCart);

   
    const aumentarCantidad = (id) => {
        setCart(cart.map((pizza) => 
            pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
        ));
    };

  
    const disminuirCantidad = (id) => {
        setCart(cart.map((pizza) => 
            pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
        ).filter(pizza => pizza.count >= 0)); 
    };


    const total = cart.reduce((acc, p) => acc + (p.price * p.count), 0);

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
                        
                        
                        <button className="btn btn-outline-danger btn-sm px-2" onClick={() => disminuirCantidad(el.id)}>-</button>
                        
                        <span className="mx-3 fw-bold">{el.count}</span>
                        
                        
                        <button className="btn btn-outline-primary btn-sm px-2" onClick={() => aumentarCantidad(el.id)}>+</button>
                    </div>
                </div>
            ))}

            <div className="mt-4">
                <h2 className="fw-bold">Total: ${total.toLocaleString()}</h2>
                <button className="btn btn-dark mt-2 px-4">Pagar</button>
            </div>
        </div>
    );
};

export default Cart;