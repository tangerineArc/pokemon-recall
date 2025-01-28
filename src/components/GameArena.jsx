import "../styles/game-arena.css";

import pokeballImage from "../assets/pokeball.png";

import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";

import getSpritesData from "../utils/fetch-data.js";
import randomShuffler from "../utils/shuffle-array.js";

export default function GameArena() {
  const [sprites, setSprites] = useState([]);

  function handleSelection(target) {
    if (target.isSelected) {
      console.log("out!");
      return;
    }

    setSprites((prevSprites) => {
      const newSprites = structuredClone(prevSprites).map((sprite) => {
        if (sprite.id === target.id) sprite.isSelected = true;
        return sprite;
      });
      return randomShuffler(newSprites);
    });
  }

  useEffect(() => {
    getSpritesData().then((data) => {
      setSprites(randomShuffler(data));
    });
  }, []);

  return (
    <div id="game-arena">
      <div>
        <img src={pokeballImage} alt="pokeball" width={80} height={80} />
        <p>Recall</p>
      </div>

      <div>
        <p>Score: 0</p>
        <p>Record: 29</p>
      </div>

      <div>
        <p>3 / 20</p>
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
    </div>
  );
}
