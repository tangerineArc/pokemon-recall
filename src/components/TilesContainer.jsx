import "../styles/tiles-container.css";

import Tile from "./Tile.jsx";

export default function TilesContainer({ sprites, selectEventHandler }) {
  return (
    <div id="tiles-container">
      {sprites.map((sprite) => {
        return (
          <Tile
            key={sprite.id}
            sprite={sprite}
            selectEventHandler={selectEventHandler}
          />
        );
      })}
    </div>
  );
}
