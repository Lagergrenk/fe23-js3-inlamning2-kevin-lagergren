import React from 'react';
import Cell from '../components/cell/Cell';
import { CellType } from '../types/CellType';

type BoardUiProps = {
  board: CellType[];
  onCellClick: (index: number) => void;
  boardSize: number;
};

const BoardUi: React.FC<BoardUiProps> = ({ board, onCellClick, boardSize }) => {
  // Dynamically set the board style based on the boardSize
  const boardStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${Math.sqrt(boardSize)}, 50px)`,
    gridTemplateRows: `repeat(${Math.sqrt(boardSize)}, 50px)`,
    alignItems: 'center',
    justifyItems: 'center',
  };

  return (
    <div className='board' style={boardStyle}>
      {board.map((cell: CellType) => (
        <Cell key={cell.index} cell={cell} onClick={() => onCellClick(cell.index)} />
      ))}
    </div>
  );
};

export default BoardUi;
