import React from "react";
import ReactModal from "react-modal";
import "./ModalStyles.css";

const RegisterModal = ({ isOpen, onRequestClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Register Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <h2>Регистрация</h2>
      <button onClick={onRequestClose} className="close-button">
        Закрыть
      </button>
      <form>
        <label>
          Имя:
          <input type="text" name="name" autoComplete="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" autoComplete="email" />
        </label>
        <label>
          Пароль:
          <input type="password" name="password" autoComplete="new-password" />
        </label>
        <button type="submit">Регистрация</button>
      </form>
    </ReactModal>
  );
};

export default RegisterModal;
