import React from 'react';
import createBoard from '../../utils/utils.js';
import { CellType } from '../../types/CellType';
import { getClickedCell, checkIfMine, updateBoardWithVisibility, isOnlyMinesLeft, revealAllCells } from './boardHelper';
import './Board.css';
import BoardUi from '../../ui/BoardUi.js';
import GameEndUi from '../../ui/GameEndUi.js';

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
    return (
      //Render the board
      <div className='board__container'>
        <BoardUi board={this.state.board} onCellClick={this.handleCellClick} boardSize={this.props.boardSize} />
        {this.state.isGameOver && (
          <GameEndUi
            onTryAgainClick={this.handleTryAgainClick}
            onChangeDifficulty={this.props.onChangeDifficulty}
            isWinner={this.state.isWinner}
          />
        )}
        {this.state.isWinner && (
          <GameEndUi
            onTryAgainClick={this.handleTryAgainClick}
            onChangeDifficulty={this.props.onChangeDifficulty}
            isWinner={this.state.isWinner}
          />
        )}

        {!this.state.isGameOver && (
          <div className='board__change-difficutly-container'>
            <button onClick={this.props.onChangeDifficulty}>Change Difficulty</button>
          </div>
        )}
      </div>
    );
  }
}

export default BoardClass;
