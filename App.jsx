import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import HomePage from "./HomePage.jsx";
import About from "./About.jsx";
import Cart from "./Cart.jsx";
import SearchResults from "./SearchResults.jsx";
import ReactModal from "react-modal";
import LoginModal from "./LoginModal.jsx";
import RegisterModal from "./RegisterModal.jsx";
import Categories from "./Categories.jsx";
import MensClothing from "./MensClothing.jsx";

const App = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    ReactModal.setAppElement("#root");
  }, []);

  const handleAddToCart = (product) => {
    const productInCart = cart.find((item) => item.id === product.id);
    if (productInCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleIncreaseQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <>
      <Header
        setShowLoginModal={setShowLoginModal}
        setShowRegisterModal={setShowRegisterModal}
      />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route
          path="/categories/mens-clothing"
          element={<MensClothing cart={cart} onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              onIncreaseQuantity={handleIncreaseQuantity}
              onDecreaseQuantity={handleDecreaseQuantity}
              onRemoveFromCart={handleRemoveFromCart}
            />
          }
        />
        <Route
          path="/search"
          element={<SearchResults onAddToCart={handleAddToCart} cart={cart} />}
        />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
      <LoginModal
        isOpen={showLoginModal}
        onRequestClose={() => setShowLoginModal(false)}
      />
      <RegisterModal
        isOpen={showRegisterModal}
        onRequestClose={() => setShowRegisterModal(false)}
      />
    </>
  );
};

export default App;
