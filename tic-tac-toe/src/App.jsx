import Player from "./components/Player"
import GameBoard from "./components/Gameboard"
import Log from "./components/Log"
import { useState } from "react"

function App() {

  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurn] = useState([]);

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  }
  
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={ activePlayer =='X' }/>
          <Player initialName="Player 2" symbol="O" isActive={ activePlayer =='O' }/>
        </ol> 
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={ activePlayer }/>
      </div>
      <Log />
    </main>
  )
}

export default App
