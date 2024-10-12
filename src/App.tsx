import { useState } from 'react';
import BoardComponent from './classes/boardComponent';
import GameSettings from './components/gamesettings/GameSettings';

const App: React.FC = () => {
  const [boardSize, setBoardSize] = useState<number>(0);
  const [mineCount, setMineCount] = useState<number>(0);
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);

  const handleGameSettingsClick = (newBoardSize: number, newMineCount: number) => {
    setBoardSize(newBoardSize);
    setMineCount(newMineCount);
    setIsGameStarted(true);
  };

  const handleChangeDifficulty = () => {
    setIsGameStarted(false);
  };

  return (
    <>
      {!isGameStarted && <GameSettings onClick={handleGameSettingsClick} />}
      {/* Pass the boardSize and mineCount to the BoardComponent */}
      {/* Rendeer the boardComponent if isGameStarted = true */}
      {isGameStarted && (
        <BoardComponent boardSize={boardSize} mineCount={mineCount} onChangeDifficulty={handleChangeDifficulty} />
      )}
    </>
  );
};

export default App;
