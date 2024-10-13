import BoardComponent from './classes/boardComponent';
import GameSettings from './components/gamesettings/GameSettings';
import useGameLogic from './hooks/useGameLogic';

const App: React.FC = () => {
  // Custom hook to manage game logic
  const { boardSize, mineCount, isGameStarted, handleGameSettingsClick, handleChangeDifficulty } = useGameLogic();
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
