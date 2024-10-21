import { CellType } from './CellType';

type BoardType = {
  board: CellType[];
  isGameOver: boolean;
  isWinner: boolean;
};
export type { BoardType };
