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
    setSelectedCard(null);
  }

  function handleCardClick(e) {
    setSelectedCard(e);
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
        children={
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
            <button
              type="submit"
              className="popup__submit popup__submit_type_save"
              aria-label="Сохранить информацию"
            >
              Сохранить
            </button>
          </>
        }
      ></PopupWithForm>

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name="add-card"
        title="Новое место"
        children={
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
            <button
              type="submit"
              className="popup__submit popup__submit_type_add"
              aria-label="Создать новую карточку"
            >
              Создать
            </button>
          </>
        }
      ></PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <PopupWithForm
        isOpen={false}
        onClose={closeAllPopups}
        name="confirm"
        title="Вы уверены?"
        children={
          <>
            <button
              type="submit"
              className="popup__submit"
              aria-label="Подтвердить удаление карточки"
            >
              Да
            </button>
          </>
        }
      ></PopupWithForm>

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name="avatar"
        title="Обновить аватар"
        children={
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
            <button
              type="submit"
              className="popup__submit"
              aria-label="Подтвердить сохранение аватара"
            >
              Сохранить
            </button>
          </>
        }
      ></PopupWithForm>

      <Footer />
    </div>
  );
}

export default App;
