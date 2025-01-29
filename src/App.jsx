import GameArena from "./components/GameArena.jsx";
import HomeArena from "./components/HomeArena.jsx";

import { useState } from "react";

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [cardsCount, setCardsCount] = useState(5);

  const handlePlay = (count) => {
    setIsPlaying((prevState) => !prevState);
    if (count) setCardsCount(count);
  };

  return isPlaying ? (
    <GameArena playEventHandler={handlePlay} cardsCount={cardsCount} />
  ) : (
    <HomeArena playEventHandler={handlePlay} />
  );
}
