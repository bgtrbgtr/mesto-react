import React from "react";

export default function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_opened" : null
      }`}
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button"
          aria-label="Закрыть всплывающее окно"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__heading">{props.title}</h2>
        <form
          action="#"
          className={`popup__form popup__form_type_${props.name}`}
          name={props.name}
          method="post"
          noValidate
        >
          {props.children}
        </form>
      </div>
    </div>
  );
}
