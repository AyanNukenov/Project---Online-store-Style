import React, { useState } from "react";
import "./Cart.css";
import cartlogo from "./assets/cartlogo.png";

const Cart = ({
  cart,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveFromCart,
}) => {
  const [isBuyButtonDisabled, setIsBuyButtonDisabled] = useState({});

  const handleBuyClick = (productId) => {
    setIsBuyButtonDisabled((prevState) => ({
      ...prevState,
      [productId]: true,
    }));
  };

  return (
    <div>
      <div className="cart_main">
        {cart.length === 0 ? (
          <div className="cart_empty">
            <img src={cartlogo} alt="cartlogo" />
            <p>Ваша корзина пуста</p>
          </div>
        ) : (
          <div className="cart_items">
            {cart.map((item) => (
              <div key={item.id} className="cart_item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart_item_image"
                />
                <div className="cart_item_details">
                  <h2>{item.name}</h2>
                  <p>Цена: {parseFloat(item.price) * item.quantity} т.</p>
                  <div className="cart_item_quantity">
                    <button onClick={() => onDecreaseQuantity(item.id)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onIncreaseQuantity(item.id)}>
                      +
                    </button>
                  </div>
                  <div className="cart_item_actions">
                    <button onClick={() => onRemoveFromCart(item.id)}>
                      Удалить
                    </button>
                    <button
                      className="buy_button"
                      onClick={() => handleBuyClick(item.id)}
                      disabled={isBuyButtonDisabled[item.id]}
                    >
                      Купить
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
