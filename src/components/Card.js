import React from "react";
import "./Card.css";
export default function Card({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "card__flipped" : ""}>
        <img className="card__front" src={card.src} alt="card front" />
        <img
          className="card__back"
          src="/img/cover.png"
          alt="card back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
