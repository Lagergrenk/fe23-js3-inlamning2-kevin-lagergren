import BoardClass from './classes/board/BoardClass';
import GameSettings from './components/ui/gamesettings/GameSettings';
import useGameLogic from './hooks/useGameLogic';

const App: React.FC = () => {
  // Custom hook to manage game logic
  const { boardSize, mineCount, isGameStarted, handleChangeDifficulty, handleGameSettingsClick } = useGameLogic();
  return (
    <>
      {/* Render the GameSettings component if isGameStarted = false */}

      {!isGameStarted && <GameSettings onClick={handleGameSettingsClick} />}
      {/* Pass the boardSize and mineCount to the BoardClass */}
      {/* Rendeer the boardComponent if isGameStarted = true */}
      {isGameStarted && (
        <BoardClass boardSize={boardSize} mineCount={mineCount} onChangeDifficulty={handleChangeDifficulty} />
      )}
    </>
  );
};

export default App;
