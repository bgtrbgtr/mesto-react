import { useState } from "react";
import "../index.css";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfileOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfileOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfileOpen(false);
    setAddPlacePopupOpen(false);
    setImagePopupOpen(false);
  }

  function handleCardClick(e) {
    setSelectedCard(e);
    setTimeout(() => {
      setImagePopupOpen(true);
    }, 200);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name="edit-profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
      >
        <>
          <input
            id="name-field"
            className="popup__field popup__field_type_name"
            type="text"
            name="name"
            placeholder="Имя"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="name-field-error popup__field-error"></span>
          <input
            id="job-field"
            className="popup__field popup__field_type_job"
            type="text"
            name="about"
            placeholder="О себе"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="job-field-error popup__field-error"></span>
        </>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name="add-card"
        title="Новое место"
        buttonText="Создать"
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
          />
          <span className="place-name-field-error popup__field-error"></span>
          <input
            id="place-image"
            className="popup__field popup__field_type_job"
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="place-image-error popup__field-error"></span>
        </>
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
        isOpen={isImagePopupOpen}
      />

      <PopupWithForm
        isOpen={false}
        onClose={closeAllPopups}
        name="confirm"
        title="Вы уверены?"
        buttonText="Да"
      ></PopupWithForm>

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name="avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
      >
        <>
          <input
            id="avatar-image"
            className="popup__field popup__field_type_name"
            type="url"
            name="avatar"
            placeholder="Ссылка на новый аватар"
            required
          />
          <span className="avatar-image-error popup__field-error"></span>
        </>
      </PopupWithForm>

      <Footer />
    </div>
  );
}

export default App;
