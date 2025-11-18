const initialGameboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({ onSelectSquare, turns }) {
    let gameboard = initialGameboard;

    // Deriving state from gameturns in the App component
    for (const turn of turns) {
        // square: {row: rowIndex, col: colIndex}
        const { square, player } = turn;
        const { row, col } = square;

        gameboard[row][col] = player;

    }

    return (
        <ol id="game-board">
            {gameboard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => 
                    <li key={colIndex}>
                        <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null ? true : false}>{playerSymbol}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    );
}