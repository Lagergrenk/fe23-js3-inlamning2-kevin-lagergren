import React from 'react';

type GameSettingsProps = {
  onClick: (boardSize: number, mineCount: number) => void;
};

// GameSettings component
const GameSettings: React.FC<GameSettingsProps> = ({ onClick }) => {
  // Render the game settings buttons
  // first value = boardSize, second value = mineCount

  // gameSettinsg arrayObject, add to the array the boardSize, mineCount and buttonText if you want to add a new difficulty
  const gameSettings = [
    { boardSize: 4, mineCount: 1, buttonText: 'Easy' },
    { boardSize: 16, mineCount: 4, buttonText: 'Medium' },
    { boardSize: 25, mineCount: 7, buttonText: 'Hard' },
    { boardSize: 49, mineCount: 15, buttonText: 'Extreme' },
    { boardSize: 64, mineCount: 20, buttonText: 'Extreme++' },
  ];

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
