import React from "react";
import ReactModal from "react-modal";
import "./ModalStyles.css";

const LoginModal = ({ isOpen, onRequestClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Login Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <h2>Войти</h2>
      <button onClick={onRequestClose} className="close-button">
        Закрыть
      </button>
      <form>
        <label>
          Email:
          <input type="email" name="email" autoComplete="username" />
        </label>
        <label>
          Пароль:
          <input
            type="password"
            name="password"
            autoComplete="current-password"
          />
        </label>
        <button type="submit">Войти</button>
      </form>
    </ReactModal>
  );
};

export default LoginModal;
