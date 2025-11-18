import Player from "./components/Player"
import GameBoard from "./components/Gameboard"
import Log from "./components/Log"

import { useState } from "react"

function deriveActivePlayer(turns) {
  let currentPlayer = 'X';

  if (turns.length > 0 && turns[0].player === 'X') {
    currentPlayer = 'O';
  }
  
  return currentPlayer; 
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

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
  
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={ activePlayer =='X' }/>
          <Player initialName="Player 2" symbol="O" isActive={ activePlayer =='O' }/>
        </ol> 
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
