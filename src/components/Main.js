import { useState, useEffect } from "react";
import { api } from "../utils/Api";
import Card from "./Card";

export default function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
}) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setInitialCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((e) => {
        console.log(e);
      })
      .then(() => {
        api.getCards().then((cards) => {
          setInitialCards(cards);
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-wrapper">
          <button
            type="button"
            aria-label="Открыть окно изменения аватара"
            className="profile__change-avatar-button"
            onClick={onEditAvatar}
          ></button>
          <img
            src={userAvatar}
            alt="Аватар пользователя"
            className="profile__avatar"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            type="button"
            className="profile__edit-button"
            aria-label="Редактировать профиль"
            onClick={onEditProfile}
          ></button>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          aria-label="Добавить карточку места"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="elements">
        {cards?.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}
