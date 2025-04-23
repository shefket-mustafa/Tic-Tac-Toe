import GameOver from "../game-over/GameOver";
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
  const [players, setPlayers] = useState({X: 'Player 1', O: 'Player 2'});
  const [gameTurns, setGameTurns] = useState([]);
  // const [hasWinner, setHasWinner] = useState(false);
  //  const [activePlayer, setActivePlayer] = useState('X');

  const rematchHandler = () => {
    setGameTurns([]);
  };

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameboard.map(array => [...array])];

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
        winner = players[firstSquare];
      };
  };

  const hasDraw = gameTurns.length === 9 && !winner;


   const handleSelectSquare = (rowIndex, colIndex) => {
    // setActivePlayer((currentActive) => currentActive === 'X' ? 'O' : 'X');

    setGameTurns(prevTurns => {
      
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{ square: {row: rowIndex, col: colIndex}  , player: currentPlayer} ,...prevTurns];

      return updatedTurns;
    });
   };

   const handleNameChange = (symbol, newName) => {
    setPlayers(state => {
      return {
        ...state,
        [symbol]: newName 
      }
    })
   }


  return <main>
    <div id="game-container">
        <ol id="players" className="highlight-player">
            
            <Player 
            player={'Player 1'} 
            playerSymbol={'X'} 
            isActive={activePlayer === 'X'}
            onChangeName = {handleNameChange}/>

            <Player 
            player={'Player 2'} 
            playerSymbol={'O'} 
            isActive={activePlayer === 'O'}
            onChangeName = {handleNameChange}/>

        </ol>

        {(winner || hasDraw) && <GameOver rematchHandler={rematchHandler} winner={winner} />}
        <Gameboard 
        onSelectSquare={handleSelectSquare} 
        board={gameBoard}
        
        />
    </div>
    <Log turns = {gameTurns}/>
  </main>
      
    
}