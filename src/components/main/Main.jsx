import Gameboard from "../gameboard/Gameboard";
import Log from "../log/Log";
import Player from "../player/Player";
import { WINNING_COMBINATIONS } from "../winning-combinations";

import {useState} from 'react';

const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];


function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';

  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O';
  }

  return currentPlayer;
};

export default function Main() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [hasWinner, setHasWinner] = useState(false);
  //  const [activePlayer, setActivePlayer] = useState('X');

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialGameboard;

  for (const turn of gameTurns) {
      const { square, player } = turn;
      const { row, col } = square;

      gameBoard[row][col] = player;
  };

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
      const firstSquare = gameBoard[combination[0].row][combination[0].column];
      const secondSquare = gameBoard[combination[1].row][combination[1].column];
      const thirdSquare = gameBoard[combination[2].row][combination[2].column];

      if(firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare){
        winner = firstSquare;
      };
  };


   const handleSelectSquare = (rowIndex, colIndex) => {
    // setActivePlayer((currentActive) => currentActive === 'X' ? 'O' : 'X');

    setGameTurns(prevTurns => {
      
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{ square: {row: rowIndex, col: colIndex}  , player: currentPlayer} ,...prevTurns];

      return updatedTurns;
    });
   };


  return <main>
    <div id="game-container">
        <ol id="players" className="highlight-player">
            
            <Player player={'Player 1'} playerSymbol={'X'} isActive={activePlayer === 'X'}/>
            <Player player={'Player 2'} playerSymbol={'O'} isActive={activePlayer === 'O'}/>

        </ol>

        {winner && <p>You won, {winner}!</p>}
        <Gameboard 
        onSelectSquare={handleSelectSquare} 
        board={gameBoard}/>
    </div>
    <Log turns = {gameTurns}/>
  </main>
      
    
}