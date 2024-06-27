import React from "react";
import "./Footer.css";
import logo from "./assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact">
          <h3>Наши контакты:</h3>
          <p>Адрес: улица Ауэзова, дом 123, г.Павлодар</p>
          <p>Телефон: (123) 456-7890</p>
          <p>Email: aaaa@example.com</p>
        </div>
        <div className="footer-section links">
          <h3>Online store Style</h3>
          <img src={logo} alt="logo" />
        </div>
        <div className="footer-section social">
          <h3>Ищи нас:</h3>
          <a href="#">Facebook</a> | <a href="#">X</a> |
          <a href="#">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Онлайн-магазин "Style". Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
