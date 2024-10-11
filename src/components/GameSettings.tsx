import React from 'react';

type GameSettingsProps = {
  onClick: (boardSize: number, mineCount: number) => void;
};

// GameSettings component
const GameSettings: React.FC<GameSettingsProps> = ({ onClick }) => {
  // Render the game settings buttons
  // first value = boardSize, second value = mineCount
  // returns values to parent component
  return (
    <div className='gamesettings-container'>
      <h1>Choose Difficulty !</h1>
      <button onClick={() => onClick(4, 1)}>Easy</button>
      <button onClick={() => onClick(16, 4)}>Medium</button>
      <button onClick={() => onClick(25, 7)}>Hard</button>
      <button onClick={() => onClick(49, 15)}>Extreme</button>
      <button onClick={() => onClick(64, 20)}>Extreme++</button>
    </div>
  );
};

export default GameSettings;
