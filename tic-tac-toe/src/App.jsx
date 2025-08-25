import Player from "./components/Player"

function App() {
  
  return (
    <main>
      <h1>React Tic-Tac-Toe</h1>
      <div id="game-container">
        PLAYERS
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
        GAMEBOARD
      </div>
      LOG
    </main>
  )
}

export default App
