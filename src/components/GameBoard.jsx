import React, { useState } from "react";
import "../styles/GameBoard.css";
import Card from "./Card";

function GameBoard(props) {
  const [cards, setCards] = useState(shuffleCards());
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  function handleCardClick(index) {
    if (flippedCards.length === 2 || matchedCards.includes(index)) return;

    const newCards = [...cards];
    newCards[index].flipped = true;
    setCards(newCards);

    setFlippedCards([...flippedCards, index]);

    if (flippedCards.length === 1) {
      const firstCard = cards[flippedCards[0]];
      const secondCard = newCards[index];
      if (firstCard.value === secondCard.value) {
        // Match found
        setMatchedCards([...matchedCards, flippedCards[0], index]); // Add matched cards to matchedCards state
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
        props.counter();
      } else {
        // No match, flip them back
        setTimeout(() => {
          firstCard.flipped = false;
          secondCard.flipped = false;
          setCards([...cards]);
          setFlippedCards([]);
        }, 1000);
        props.counter();
      }
    }
  }

  return (
    <div className="game-board">
      {cards.map((card, index) => (
        <Card
          key={index}
          value={card.value}
          flipped={card.flipped}
          onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
  );
}

function shuffleCards() {
  const values = ["🍎", "🍌", "🍇", "🍉", "🍋", "🍓"];
  const cards = values
    .concat(values) // Create pairs
    .map((value, index) => ({ id: index, value, flipped: false }));

  return cards.sort(() => Math.random() - 0.5); // Shuffle
}

export default GameBoard;
