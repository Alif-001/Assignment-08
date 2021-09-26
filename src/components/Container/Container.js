import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Developer from "../Developer/Developer";
import "./Container.css";

// fetch data
const Container = () => {
  const [developers, setDevelopers] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => setDevelopers(data));
  }, []);
  const handleAddToCart = (developer) => {
    const newCart = [...cart, developer];
    setCart(newCart);
  };
  return (
    <div className="developer-container">
      <div className="row row-cols-1 row-cols-md-3 g-4 container">
        {developers.map((developer) => (
          <Developer
            key={developer.key}
            developer={developer}
            handleAddToCart={handleAddToCart}
          ></Developer>
        ))}
      </div>
      <Cart cart={cart}></Cart>
    </div>
  );
};

export default Container;
