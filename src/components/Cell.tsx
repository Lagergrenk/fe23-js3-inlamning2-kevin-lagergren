import React from 'react';
import { CellType } from '../types/CellType';

type CellProps = {
  cell: CellType;
  onClick: (index: number) => void;
};

const Cell: React.FC<CellProps> = ({ cell, onClick }) => {
  const handleClick = () => {
    // if cell.visible=false, call onClick(cell.index)
    if (!cell.visible) {
      onClick(cell.index);
    }
  };

  return (
    <div className='cell' onClick={handleClick}>
      {cell.visible
        ? cell.hasMine
          ? '💣'
          : cell.numberOfNeighbouringMines > 0
          ? cell.numberOfNeighbouringMines
          : ' '
        : '?'}
      {/* if cell.visible=true, display the number of neighbouring mines if it is greater than 0, otherwise display a space */}
    </div>
  );
};

export default Cell;
