import "../styles/game-arena.css";

import { useEffect, useState } from "react";

import getSpritesData from "../utils/fetch-data.js";
import randomShuffler from "../utils/shuffle-array.js";

import GameHeader from "./GameHeader.jsx";
import GameOverModal from "./GameOverModal.jsx";
import ScoreTracker from "./ScoreTracker.jsx";
import TilesContainer from "./TilesContainer.jsx";

export default function GameArena() {
  const [sprites, setSprites] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (!isGameOver) {
      getSpritesData().then((data) => {
        setSprites(randomShuffler(data));
      });
    }
  }, [isGameOver]);

  function handleSelection(target) {
    if (target.isSelected) {
      setIsGameOver(true);
      return;
    }

    setScore((prevScore) => ++prevScore);

    setSprites((prevSprites) => {
      const newSprites = structuredClone(prevSprites).map((sprite) => {
        if (sprite.id === target.id) sprite.isSelected = true;
        return sprite;
      });
      return randomShuffler(newSprites);
    });
  }

  function handlePlayAgain() {
    setIsGameOver(false);
    setScore(0);
  }

  return (
    <div id="game-arena">
      <GameHeader />
      <ScoreTracker score={score} highScore={highScore} />
      <TilesContainer sprites={sprites} selectEventHandler={handleSelection} />

      {isGameOver && (
        <GameOverModal score={score} playAgainEventHandler={handlePlayAgain} />
      )}
    </div>
  );
}
