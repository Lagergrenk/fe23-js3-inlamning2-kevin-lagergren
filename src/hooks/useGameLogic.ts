import { useState } from 'react';

// Custom hook to manage game logic
const useGameLogic = () => {
  const [boardSize, setBoardSize] = useState<number>(0);
  const [mineCount, setMineCount] = useState<number>(0);
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);

  // Function to handle the game settings click
  // It sets the boardSize and mineCount and sets isGameStarted to true
  const handleGameSettingsClick = (newBoardSize: number, newMineCount: number) => {
    setBoardSize(newBoardSize);
    setMineCount(newMineCount);
    setIsGameStarted(true);
  };

  // Function to handle the change in difficulty
  const handleChangeDifficulty = () => {
    setIsGameStarted(false);
  };

  return { boardSize, mineCount, isGameStarted, handleGameSettingsClick, handleChangeDifficulty };
};

export default useGameLogic;
