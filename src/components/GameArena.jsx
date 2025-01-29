import "../styles/game-arena.css";

import { useEffect, useState } from "react";

import getSpritesData from "../utils/fetch-data.js";
import randomShuffler from "../utils/shuffle-array.js";

import GameHeader from "./GameHeader.jsx";
import GameOverModal from "./GameOverModal.jsx";
import ScoreTracker from "./ScoreTracker.jsx";
import StatusDisplay from "./StatusDisplay.jsx";
import TilesContainer from "./TilesContainer.jsx";

export default function GameArena({ playEventHandler, cardsCount }) {
  const [sprites, setSprites] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [overMessage, setOverMessage] = useState("");

  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let ignore = false;
    if (!isGameOver) {
      setIsFetching(true);
      getSpritesData(cardsCount)
        .then((data) => {
          if (!ignore) {
            setSprites(randomShuffler(data));
          }
        })
        .catch((error) => {
          setErrorMessage(error.message);
          setIsError(true);
        })
        .finally(() => {
          setIsFetching(false);
        });
    }

    return () => {
      setSprites([]);
      setIsError(false);
      ignore = true;
    };
  }, [isGameOver, cardsCount]);

  const handleSelection = (target) => {
    if (target.isSelected) {
      setIsGameOver(true);
      setOverMessage("Game Over");
      return;
    }

    if (score + 1 >= cardsCount) {
      setIsGameOver(true);
      setScore((prevScore) => ++prevScore);
      setOverMessage("You Win!");
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
  };

  const handlePlayAgain = () => {
    setIsGameOver(false);
    setScore(0);
  };

  const handleQuit = () => {
    setIsGameOver(true);
    setScore(0);
    playEventHandler();
  };

  return (
    <div id="game-arena">
      <GameHeader />
      <ScoreTracker score={score} highScore={highScore} limit={cardsCount} />

      {isError ? (
        <StatusDisplay
          status={`${errorMessage} ... Reload or try again later`}
        />
      ) : !isFetching ? (
        <TilesContainer
          sprites={sprites}
          selectEventHandler={handleSelection}
        />
      ) : (
        <StatusDisplay status={"Loading ..."} />
      )}

      {isGameOver && (
        <GameOverModal
          score={score}
          playAgainEventHandler={handlePlayAgain}
          quitEventHandler={handleQuit}
          message={overMessage}
        />
      )}
    </div>
  );
}
