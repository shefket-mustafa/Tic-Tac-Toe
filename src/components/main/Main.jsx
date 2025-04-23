import Gameboard from "../gameboard/Gameboard";
import Log from "../log/Log";
import Player from "../player/Player";
import {useState} from 'react';

export default function Main() {
  const [gameTurns, setGameTurns] = useState([]);
   const [activePlayer, setActivePlayer] = useState('X');

   const handleSelectSquare = (rowIndex, colIndex) => {
    setActivePlayer((currentActive) => currentActive === 'X' ? 'O' : 'X');

    setGameTurns(prevTurns => {
      let currentPlayer = 'X';

      if(prevTurns.length > 0 && prevTurns[0].player === 'X'){
        currentPlayer = 'O';
      }

      const updatedTurns = [{ square: {row: rowIndex, col: colIndex}  , player: activePlayer} ,...prevTurns];

      return updatedTurns;
    });
   };


  return <main>
    <div id="game-container">
        <ol id="players" className="highlight-player">
            
            <Player player={'Player 1'} playerSymbol={'X'} isActive={activePlayer === 'X'}/>
            <Player player={'Player 2'} playerSymbol={'O'} isActive={activePlayer === 'O'}/>

        </ol>
        <Gameboard 
        onSelectSquare={handleSelectSquare} 
        turns={gameTurns}/>
    </div>
    <Log />
  </main>
      
    
}