import "../styles/game-header.css";

import pokeballImage from "../assets/pokeball.png";

export default function GameHeader() {
  return (
    <div id="game-header">
      <img src={pokeballImage} alt="pokeball" width={80} height={80} />
      <p>Recall</p>
    </div>
  );
}
