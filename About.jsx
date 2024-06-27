//About.jsx
import React from "react";

import "./Container_about.css";

const About = () => {
  return (
    <div>
      <div className="container_about">
        <div className="about_us">
          <h3>Почему выбирают нас?</h3>
          <ul>
            <li>
              <strong>💎Широкий ассортимент товаров</strong>: Мы предлагаем
              широкий выбор одежды и украшений для любого стиля и на любой вкус.
            </li>
            <li>
              <strong>💎Качество и стиль</strong>: Мы тщательно отбираем каждую
              вещь, чтобы предложить вам только самое лучшее.
            </li>
            <li>
              <strong>💎Доступные цены</strong>: Мы верим, что стильная и
              качественная одежда должна быть доступной для всех.
            </li>
            <li>
              <strong>💎Удобный интерфейс и простота покупок</strong>: Наш сайт
              разработан с учетом максимального удобства для пользователей.
            </li>
            <li>
              <strong>💎Быстрая доставка и хороший сервис</strong>: Ваше время
              для нас — это самое ценное.
            </li>
            <li>
              <strong>💎Возврат и обмен</strong>: Если вдруг что-то не подошло,
              мы всегда готовы предложить вам легкий возврат или обмен товара.
            </li>
          </ul>
          <h2>Наша миссия</h2>
          <p>
            Мы стремимся сделать моду доступной для каждого. В{" "}
            <strong>Style</strong> мы верим, что каждый заслуживает выглядеть
            стильно и чувствовать себя уверенно.
          </p>
        </div>
        <div className="about_descrVideo">
          <h2>Вашему вниманию видеообзор</h2>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5DqMJ5IsW2o?si=MkLWLa3RU8l6OC1z"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
