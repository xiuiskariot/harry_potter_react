import s from "./Card.module.css";

export const Card = ({ card, children }) => {
  return (
    <div className={s.character_card}>
      {children}

      <div className={s.character_card__photo}>
        <img src={card.image} alt="character" />
      </div>
      <div className={s.character_card__info}>
        <p className={s.character_card__info__name}>{card.name}</p>
        <p className={s.character_card__info__subinfo}>Actor: {card.actor}</p>
        <p className={s.character_card__info__subinfo}>Gender: {card.gender}</p>
        <p className={s.character_card__info__subinfo}>
          House: {card.house ? card.house : "unknown"}
        </p>
        <p className={s.character_card__info__subinfo}>
          Wand core: {card.wand.core ? card.wand.core : "unknown"}
        </p>
        <p className={s.character_card__info__subinfo}>
          Alive: {card.alive ? "yes" : "no"}
        </p>
      </div>
    </div>
  );
};
