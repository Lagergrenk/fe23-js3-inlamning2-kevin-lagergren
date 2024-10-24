import { CellType } from './CellType';

export type BoardType = {
  board: CellType[];
  isGameOver: boolean;
  isWinner: boolean;
};
