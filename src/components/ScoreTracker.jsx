import "../styles/score-tracker.css";

export default function ScoreTracker({ score, highScore }) {
  return (
    <>
      <div id="score-tracker">
        <p>Score: {score}</p>
        <p>Record: {highScore}</p>
      </div>
      <div id="hit-tracker">
        <p>{score} / 20</p>
      </div>
    </>
  );
}
