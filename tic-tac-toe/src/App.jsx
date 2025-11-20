import { useState } from "react"

import Player from "./components/Player"
import GameBoard from "./components/Gameboard"
import Log from "./components/Log"
import GameOver from "./components/GameOver"

import { WINNING_COMBINATIONS } from "./winnging-combinations"

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2',
}

const INITIAL_GAMEBOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function derviveGameboard(turns) {
let gameboard = [...INITIAL_GAMEBOARD.map(array => [...array])];

  // Deriving state from gameturns in the App component
  for (const turn of gameTurns) {
        // square: {row: rowIndex, col: colIndex}
        const { square, player } = turn;
        const { row, col } = square;

        gameboard[row][col] = player;

    }
    return gameboard;
}

function deriveActivePlayer(turns) {
  let currentPlayer = 'X';

  if (turns.length > 0 && turns[0].player === 'X') {
    currentPlayer = 'O';
  }
  
  return currentPlayer; 
}

function derviveWinner(gameboard) {
let winner = null;

    for (const combination of WINNING_COMBINATIONS) {
      const firstSquareSymbol = gameboard[combination[0].row][combination[0].column];
      const secondSquareSymbol = gameboard[combination[1].row][combination[1].column];
      const thirdSquareSymbol = gameboard[combination[2].row][combination[2].column];

      if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
        console.log(`Winner is ${firstSquareSymbol}`);
        winner = playerNames[firstSquareSymbol];


      }
    }
    return winner;
}

function App() {
  // save player names in state on save
  const [playerNames, setPlayerNames] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  const gameboard = derviveGameboard(gameTurns);

  const winner = derviveWinner(gameboard);
  
  const isDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevTurns => {
      let curActivePlayer = deriveActivePlayer(prevTurns);
      
      const updatedTurns = [
        { square: {row: rowIndex, col: colIndex}, player: curActivePlayer},
        ...prevTurns,
      ];

      return updatedTurns;
    })
  }

  function handlePlayAgain() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayerNames(prevNames => ({
      ...prevNames,
      [symbol]: newName,
    }));
  }
  
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={PLAYERS.X} symbol="X" isActive={ activePlayer =='X' } onChangeName={handlePlayerNameChange} />
          <Player initialName={PLAYERS.O} symbol="O" isActive={ activePlayer =='O' } onChangeName={handlePlayerNameChange} />
        </ol> 
        { (winner || isDraw) && <GameOver winner={winner} onRestart={handlePlayAgain}/>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameboard} />
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
