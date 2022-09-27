import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({ isOpen, onClose, onAddCard }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddCard({ name, link });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="add-card"
      title="Новое место"
      buttonText="Создать"
      onSubmit={handleSubmit}
    >
      <>
        <input
          id="place-name-field"
          className="popup__field popup__field_type_name"
          type="text"
          name="name"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
          value={name || ""}
          onChange={handleNameChange}
        />
        <span className="place-name-field-error popup__field-error"></span>
        <input
          id="place-image"
          className="popup__field popup__field_type_job"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required
          value={link || ""}
          onChange={handleLinkChange}
        />
        <span className="place-image-error popup__field-error"></span>
      </>
    </PopupWithForm>
  );
}
