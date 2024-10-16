import React from 'react';
import createBoard from '../../utils/utils.js';
import Cell from '../../components/cell/Cell.js';
import { CellType } from '../../types/CellType.js';
import './Board.css';

type BoardClassProps = {
  boardSize: number;
  mineCount: number;
  onChangeDifficulty: () => void;
};
type BoardState = {
  board: CellType[];
  gameOver: boolean;
  isWinner: boolean;
};

class BoardClass extends React.Component<BoardClassProps, BoardState> {
  // Initialize the state with a board, gameOver state and isWinner state
  constructor(props: BoardClassProps) {
    super(props);
    this.state = {
      board: createBoard(props.boardSize, props.mineCount),
      gameOver: false,
      isWinner: false,
    };
  }

  handleTryAgainClick = () => {
    // If the try again button is clicked, reset the board and gameOver status
    this.setState({
      board: createBoard(this.props.boardSize, this.props.mineCount),
      gameOver: false,
      isWinner: false,
    });
  };

  handleCellClick = (index: number) => {
    if (this.state.gameOver) return; // if gameover=true, do nothing

    // Find the clicked cell
    const clickedCell = this.getClickedCell(index);
    if (!clickedCell) return; // if clickedCell=undefined, do nothing

    // Update gameOver state if the clicked cell is a mine
    // Show all the cells if the clicked cell is a mine
    const isMine = this.checkIfMine(clickedCell);
    if (isMine) {
      this.setState({
        board: this.revealAllCells(this.state.board),
        gameOver: true,
      });
      return;
    }

    // Update visible prop of the clicked cell
    const newBoard = this.updateBoardWithVisibility(index);

    // Check if the game is won
    // if game is won, set isWinner=true
    const isWin = this.isOnlyMinesLeft(newBoard);
    if (isWin) {
      this.setState({
        board: newBoard,
        gameOver: false,
        isWinner: true,
      });

      return;
    }

    // initialize the state with the new board, gameOver status and isWinner status
    this.setState({
      board: newBoard,
      gameOver: isMine,
      isWinner: isWin,
    });
  };

  // Helper function: Find the clicked cell
  getClickedCell = (index: number): CellType | undefined => {
    return this.state.board.find((cell: CellType) => cell.index === index);
  };

  // Helper function: Check if the clicked cell is a mine
  checkIfMine = (cell: CellType): boolean => {
    if (cell.hasMine) {
      return true;
    }
    return false;
  };

  // Helper function: Update visibility of the clicked cell
  updateBoardWithVisibility = (index: number): CellType[] => {
    return this.state.board.map((cell: CellType) => {
      if (cell.index === index) {
        return { ...cell, visible: true }; // Update visibility of the clicked cell to true other attributes remain the same
      }
      return cell;
    });
  };

  // Helper function: Check if all the cells left are mines or visible
  isOnlyMinesLeft = (board: CellType[]): boolean => {
    return board.every((cell: CellType) => {
      // Check if the cell is visible or has a mine
      return cell.visible || cell.hasMine;
    });
  };

  // Helper function: Set all the cells to visible
  revealAllCells = (board: CellType[]): CellType[] => {
    return board.map((cell: CellType) => {
      return { ...cell, visible: true };
    });
  };

  render() {
    //Dynamic styling for board depending on the boardSize
    const boardStyle = {
      display: 'grid',
      gridTemplateColumns: `repeat(${Math.sqrt(this.props.boardSize)}, 50px)`,
      gridTemplateRows: `repeat(${Math.sqrt(this.props.boardSize)}, 50px)`,
      alignItems: 'center',
      justifyItems: 'center',
    };
    return (
      //Render the board
      <div className='board__container'>
        <div className='board' style={boardStyle}>
          {this.state.board.map((cell: CellType) => (
            <Cell key={cell.index} cell={cell} onClick={this.handleCellClick} />
          ))}
          {this.state.gameOver && (
            <div className='board__you-lose-container'>
              <div className='board__you-lose-text'>
                Game Over <button onClick={this.handleTryAgainClick}>Try again</button>
                <button onClick={this.props.onChangeDifficulty}>Change Difficulty</button>
              </div>
            </div>
          )}
          {this.state.isWinner && (
            <div className='board__you-win-container'>
              <div className='board__you-win-text'>
                <p>You Win!</p>
                <button onClick={this.handleTryAgainClick}>Play again</button>
                <button onClick={this.props.onChangeDifficulty}>Change Difficulty</button>
              </div>
            </div>
          )}
        </div>
        <div className='board__change-difficutly-container'>
          <button onClick={this.props.onChangeDifficulty}>Change Difficulty</button>
        </div>
      </div>
    );
  }
}

export default BoardClass;
