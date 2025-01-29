import "../styles/game-arena.css";

import pokeballImage from "../assets/pokeball.png";

import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";

import getSpritesData from "../utils/fetch-data.js";
import randomShuffler from "../utils/shuffle-array.js";

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
      <div>
        <img src={pokeballImage} alt="pokeball" width={80} height={80} />
        <p>Recall</p>
      </div>
      <div>
        <p>Score: {score}</p>
        <p>Record: {highScore}</p>
      </div>
      <div>
        <p>{score} / 20</p>
      </div>
      <div>
        {sprites.map((sprite) => {
          return (
            <Tilt
              key={sprite.id}
              className="tilt"
              glareEnable={true}
              glareMaxOpacity={0.7}
              glareBorderRadius="5px"
              scale={1.05}
            >
              <div
                tabIndex={0}
                onClick={() => {
                  handleSelection(sprite);
                }}
              >
                <div
                  style={{
                    backgroundImage: `url(${sprite.image})`,
                  }}
                  className="image-container"
                ></div>
                <p>{sprite.name}</p>
              </div>
            </Tilt>
          );
        })}
      </div>

      {isGameOver && (
        <div id="game-over-modal">
          <div>
            <img src={pokeballImage} alt="" width={60} height={60} />
            <p>Game Over</p>
            <p>Your final score is {score}</p>
            <div>
              <button onClick={handlePlayAgain}>Play Again</button>
              <button>Quit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
