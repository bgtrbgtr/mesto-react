export default function Card({ card, onCardClick }) {
  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <article className="element">
      <button
        type="button"
        className="element__delete-button"
        aria-label="Удалить карточку"
      ></button>
      <div
        className="element__image"
        style={{
          backgroundImage: `url(${card.link})`,
        }}
        onClick={handleCardClick}
      ></div>
      <div className="element__label">
        <h2 className="element__caption">{card.name}</h2>
        <div className="element__like-container">
          <button
            type="button"
            className="element__like-button"
            aria-label="Поставить лайк"
          ></button>
          <p className="element__like-amount">{card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}
