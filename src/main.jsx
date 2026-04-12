import React from "react";
import ReactDOM from "react-dom/client";

// Router 
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

// Estilos
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Contextos globales
import CartProvider from "./context/CartContext";
import UserProvider from "./context/UserContext";

// Punto de entrada de React
ReactDOM.createRoot(document.getElementById("root")).render(

  //Habilita navegación con rutas (/home, /pizza/:id, etc)
  <BrowserRouter>

    {/*  Contexto de usuario (token, login, logout) */}
    <UserProvider> 

      {/*  Contexto del carrito */}
      <CartProvider>

        {/* aplicación completa */}
        <App />

      </CartProvider>

    </UserProvider>

  </BrowserRouter>
);