import { CellType } from '../types/CellType';

// Helper function: Find the clicked cell
export const getClickedCell = (board: CellType[], index: number): CellType | undefined => {
  return board.find((cell: CellType) => cell.index === index);
};

// Helper function: Check if the clicked cell is a mine
export const checkIfMine = (cell: CellType): boolean => {
  if (cell.hasMine) {
    return true;
  }
  return false;
};

// Helper function: Update visibility of the clicked cell
export const updateBoardWithVisibility = (board: CellType[], index: number): CellType[] => {
  return board.map((cell: CellType) => {
    if (cell.index === index) {
      return { ...cell, visible: true }; // Update visibility of the clicked cell to true other attributes remain the same
    }
    return cell;
  });
};

// Helper function: Check if all the cells left are mines or visible
export const isOnlyMinesLeft = (board: CellType[]): boolean => {
  return board.every((cell: CellType) => {
    // Check if the cell is visible or has a mine
    return cell.visible || cell.hasMine;
  });
};

// Helper function: Set all the cells to visible = true
export const revealAllCells = (board: CellType[]): CellType[] => {
  return board.map((cell: CellType) => {
    return { ...cell, visible: true };
  });
};
