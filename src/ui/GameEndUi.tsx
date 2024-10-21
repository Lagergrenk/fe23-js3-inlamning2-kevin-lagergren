import React from 'react';
import './GameEndUi.css';

type GameEndUiProps = {
  onTryAgainClick: () => void;
  onChangeDifficulty: () => void;
  isWinner: boolean;
};

const GameEndUi: React.FC<GameEndUiProps> = ({ onTryAgainClick, onChangeDifficulty, isWinner }) => {
  return (
    <div className='board__end-container'>
      <div className='board__end-text'>
        <h1>{isWinner ? 'You Win!' : 'You Lose'}</h1>
        <button onClick={onTryAgainClick}>Try Again</button>
        <button onClick={onChangeDifficulty}>Change Difficulty</button>
      </div>
    </div>
  );
};

export default GameEndUi;
