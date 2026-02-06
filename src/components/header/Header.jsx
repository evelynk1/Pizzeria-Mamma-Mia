import React from "react";
const Header = () => {
  return (
    <header
      className="text-center text-light py-5"
      style={{
        backgroundImage: `url(/img/Header.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "darken",
        minHeight: "300px",
      }}
    >
      <h1>¡Pizzería Mamma Mia!</h1>
      <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
    </header>
  );
};

export default Header;
