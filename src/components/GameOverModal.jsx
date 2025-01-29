import "../styles/game-over-modal.css";

import pokeballImage from "../assets/pokeball.png";

export default function GameOverModal({ score, playAgainEventHandler }) {
  return (
    <div id="game-over-modal">
      <div>
        <img src={pokeballImage} alt="" width={60} height={60} />
        <p>Game Over</p>
        <p>Your final score is {score}</p>
        <div>
          <button onClick={playAgainEventHandler}>
            Play Again
          </button>
          <button>Quit</button>
        </div>
      </div>
    </div>
  );
}
