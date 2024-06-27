import React from "react";
import "./MensClothing.css";

const MensClothing = ({ cart, onAddToCart }) => {
  const products = [
    {
      id: 1,
      name: "Lacoste",
      price: "50000 т.",
      image:
        "https://i.pinimg.com/736x/0a/5d/18/0a5d18fea8d1c8d8dfd2ed73074c243b.jpg",
    },
    {
      id: 2,
      name: "Gucci",
      price: "60000 т.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmmwFDo3WAGcZ1QEEUvvVCC_KSk6H_8Gkrx3LQGV2CzshaPfS5ZKwPMZIOeRjZnmgPJjk&usqp=CAU",
    },
  ];

  return (
    <div className="mens-clothing-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <h2>{product.name}</h2>
          <p>Цена: {product.price}</p>
          <button
            onClick={() => onAddToCart(product)}
            disabled={cart.some((item) => item.id === product.id)}
          >
            {cart.some((item) => item.id === product.id)
              ? "Добавлено в корзину"
              : "Добавить в корзину"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MensClothing;
