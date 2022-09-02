export default function ImagePopup(props) {
  return (
    <>
      {props.card ? (
        <div className="popup popup_type_image popup_opened">
          <div className="popup__image-wrap">
            <img src={`${props.card.link}`} alt="" className="popup__image" />
            <button
              type="button"
              className="popup__close-button"
              aria-label="Закрыть изображение"
              onClick={props.onClose}
            ></button>
            <p className="popup__image-caption"></p>
          </div>
        </div>
      ) : null}
    </>
  );
}
