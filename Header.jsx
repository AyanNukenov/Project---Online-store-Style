import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = ({ setShowLoginModal, setShowRegisterModal }) => {
  const [activeButton, setActiveButton] = useState("/home");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleButtonClick = (path) => {
    setActiveButton(path);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <div className="header">
      <h1>
        Style <br />
        онлайн магазин
      </h1>

      <div className={`header_menu ${menuVisible ? "visible" : ""}`}>
        <Link
          to="/home"
          className={`button ${activeButton === "/home" ? "active" : ""}`}
          onClick={() => handleButtonClick("/home")}
        >
          Главная
        </Link>
        <Link
          to="/about"
          className={`button ${activeButton === "/about" ? "active" : ""}`}
          onClick={() => handleButtonClick("/about")}
        >
          О нас
        </Link>
        <Link
          to="/categories"
          className={`button ${activeButton === "/categories" ? "active" : ""}`}
          onClick={() => handleButtonClick("/categories")}
        >
          Категории
        </Link>
        <Link
          to="/cart"
          className={`button ${activeButton === "/cart" ? "active" : ""}`}
          onClick={() => handleButtonClick("/cart")}
        >
          Корзина
        </Link>
      </div>
      <div className="search">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Поиск товаров..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="btn_search">
            Поиск
          </button>
        </form>
      </div>
      <div className="login">
        <button onClick={() => setShowLoginModal(true)} className="button">
          Войти
        </button>
        <button onClick={() => setShowRegisterModal(true)} className="button">
          Регистрация
        </button>
      </div>
      <div className="burger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
