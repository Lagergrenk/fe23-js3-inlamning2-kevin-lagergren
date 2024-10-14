import React from 'react';
import './GameSettings.css';
import { gameSettings } from './GameSettingsConstants';
type GameSettingsProps = {
  onClick: (boardSize: number, mineCount: number) => void;
};

// GameSettings component
const GameSettings: React.FC<GameSettingsProps> = ({ onClick }) => {
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
