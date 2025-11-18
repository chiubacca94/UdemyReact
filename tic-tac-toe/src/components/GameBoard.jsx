import { useState } from "react";

const initialGameboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
    const [gameboard, setGameboard] = useState(initialGameboard);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameboard((prevGameBoard) => {
            const updatedGameBoard = prevGameBoard.map(innerArr => [...innerArr]);    
            updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedGameBoard;
        });

        onSelectSquare();
    }

    return (
        <ol id="game-board">
            {gameboard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => 
                    <li key={colIndex}>
                        <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    );
}