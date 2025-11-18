 function handleSelectSquare(rowIndex, colIndex) {
        setGameboard((prevGameBoard) => {
            prevGameBoard[rowIndex][colIndex] = 'X';
            return prevGameBoard;

        })