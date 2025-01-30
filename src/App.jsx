import clickSound from "./assets/click.mp3";

import GameArena from "./components/GameArena.jsx";
import HomeArena from "./components/HomeArena.jsx";

import { useState } from "react";

const clickAudio = new Audio(clickSound);

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [cardsCount, setCardsCount] = useState(5);

  const handlePlay = (count) => {
    setIsPlaying((prevState) => !prevState);
    if (count) setCardsCount(count);
    clickAudio.play();
  };

  return isPlaying ? (
    <GameArena playEventHandler={handlePlay} cardsCount={cardsCount} />
  ) : (
    <HomeArena playEventHandler={handlePlay} />
  );
}
