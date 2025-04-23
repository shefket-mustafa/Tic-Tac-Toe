import { useState } from "react";

const initialGameboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function Gameboard() {

    const [gameboard, setGameboard] = useState(initialGameboard);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameboard((previousBoard) => {
            const updatedBoard =  [...previousBoard.map(innerArray => [...innerArray])]; 
            updatedBoard[rowIndex][colIndex] = 'X';
            return updatedBoard;
        })
    }


  return (
      <ol id="game-board">

        {gameboard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex)=> <li key={colIndex}>
                    <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button></li>)}
            </ol>
        </li>)}
      </ol>
    );
}