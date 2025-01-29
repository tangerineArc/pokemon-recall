import "../styles/home-arena.css";

import pokeballImage from "../assets/pokeball.png";

export default function HomeArena({ playEventHandler }) {
  return (
    <div id="home-arena">
      <div id="home-header">
        <img src={pokeballImage} alt="pokeball" width={80} height={80} />
        <p>Recall</p>
      </div>

      <div id="level-selector">
        <p>Select difficulty level</p>
        <div>
          <p onClick={() => playEventHandler(5)}>Easy</p>
          <p onClick={() => playEventHandler(10)}>Medium</p>
          <p onClick={() => playEventHandler(20)}>Hard</p>
        </div>
      </div>
    </div>
  );
}
