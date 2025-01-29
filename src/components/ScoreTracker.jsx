import "../styles/score-tracker.css";

export default function ScoreTracker({ score, highScore, limit }) {
  return (
    <>
      <div id="score-tracker">
        <p>Score: {score}</p>
        <p>Level Record: {highScore}</p>
      </div>
      <div id="hit-tracker">
        <p>
          {score} / {limit}
        </p>
      </div>
    </>
  );
}
