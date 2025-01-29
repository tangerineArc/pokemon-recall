import "../styles/tile.css";

import Tilt from "react-parallax-tilt";

export default function Tile({ sprite, selectEventHandler }) {
  return (
    <Tilt
      className="tilt"
      glareEnable={true}
      glareMaxOpacity={0.7}
      glareBorderRadius="5px"
      scale={1.05}
      key={Math.random()}
    >
      <div
        tabIndex={0}
        onClick={() => {
          selectEventHandler(sprite);
        }}
        className="tile"
      >
        <div
          style={{
            backgroundImage: `url(${sprite.image})`,
          }}
        ></div>
        <p>{sprite.name}</p>
      </div>
    </Tilt>
  );
}
