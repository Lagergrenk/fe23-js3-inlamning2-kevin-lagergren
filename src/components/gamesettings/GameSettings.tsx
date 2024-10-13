import React from 'react';

type GameSettingsProps = {
  onClick: (boardSize: number, mineCount: number) => void;
};

type GameSettings = {
  boardSize: number;
  mineCount: number;
  buttonText: string;
};

// GameSettings component
const GameSettings: React.FC<GameSettingsProps> = ({ onClick }) => {
  // Render the game settings buttons
  // first value = boardSize, second value = mineCount

  // gameSettinsg arrayObject, add to the array the boardSize, mineCount and buttonText if you want to add a new difficulty
  const gameSettings: GameSettings[] = [
    { boardSize: 4, mineCount: 1, buttonText: 'Easy' },
    { boardSize: 16, mineCount: 4, buttonText: 'Medium' },
    { boardSize: 25, mineCount: 7, buttonText: 'Hard' },
    { boardSize: 49, mineCount: 15, buttonText: 'Extreme' },
    { boardSize: 64, mineCount: 20, buttonText: 'Extreme++' },
    { boardSize: 100, mineCount: 40, buttonText: 'Insane' },
    { boardSize: 144, mineCount: 60, buttonText: 'Insane++' },
    { boardSize: 196, mineCount: 80, buttonText: 'Impossible' },
    { boardSize: 256, mineCount: 255, buttonText: 'Not worth it' },
  ];

  // Render the gamesettings buttons
  return (
    <div className='gamesettings-container'>
      <h1>Choose Difficulty!</h1>
      {gameSettings.map((setting, index) => (
        <button key={index} onClick={() => onClick(setting.boardSize, setting.mineCount)}>
          {setting.buttonText}
        </button>
      ))}
    </div>
  );
};

export default GameSettings;
