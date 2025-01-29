import "../styles/game-over-modal.css";

import pokeballImage from "../assets/pokeball.png";

export default function GameOverModal({
  score,
  playAgainEventHandler,
  quitEventHandler,
  message,
}) {
  return (
    <div id="game-over-modal">
      <div>
        <img src={pokeballImage} alt="" width={60} height={60} />
        <p>{message}</p>
        <p>Your final score is {score}</p>
        <div>
          <button onClick={playAgainEventHandler}>Play Again</button>
          <button onClick={quitEventHandler}>Quit</button>
        </div>
      </div>
    </div>
  );
}
