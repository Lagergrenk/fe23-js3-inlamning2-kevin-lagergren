import React from 'react';
import createBoard from '../../utils/utils.js';
import Cell from '../../components/cell/Cell';
import { CellType } from '../../types/CellType';
import {
  getClickedCell,
  checkIfMine,
  updateBoardWithVisibility,
  isOnlyMinesLeft,
  revealAllCells,
} from './boardHelper.js';
import './Board.css';

type BoardClassProps = {
  boardSize: number;
  mineCount: number;
  onChangeDifficulty: () => void;
};
type BoardState = {
  board: CellType[];
  isGameOver: boolean;
  isWinner: boolean;
};

class BoardClass extends React.Component<BoardClassProps, BoardState> {
  // Initialize the state with a board, gameOver state and isWinner state
  constructor(props: BoardClassProps) {
    super(props);
    this.state = {
      board: createBoard(props.boardSize, props.mineCount),
      isGameOver: false,
      isWinner: false,
    };
  }

  handleTryAgainClick = () => {
    // If the try again button is clicked, reset the board and gameOver status
    this.setState({
      board: createBoard(this.props.boardSize, this.props.mineCount),
      isGameOver: false,
      isWinner: false,
    });
  };

  handleCellClick = (index: number) => {
    if (this.state.isGameOver) return; // if gameover=true, do nothing

    // Find the clicked cell
    const clickedCell = getClickedCell(this.state.board, index);
    if (!clickedCell) return; // if clickedCell=undefined, do nothing

    // Update gameOver state if the clicked cell is a mine
    // Show all the cells if the clicked cell is a mine
    const isMine = checkIfMine(clickedCell);
    if (isMine) {
      this.setState({
        board: revealAllCells(this.state.board),
        isGameOver: true,
      });
      return;
    }

    // Update visible prop of the clicked cell
    const newBoard = updateBoardWithVisibility(this.state.board, index);

    // Check if the game is won
    // if game is won, set isWinner=true
    const isWin = isOnlyMinesLeft(newBoard);
    if (isWin) {
      this.setState({
        board: newBoard,
        isGameOver: false,
        isWinner: true,
      });

      return;
    }

    // initialize the state with the new board, gameOver status and isWinner status
    this.setState({
      board: newBoard,
      isGameOver: isMine,
      isWinner: isWin,
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
          {this.state.isGameOver && (
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
