import { useState, useRef } from "react";

export default function Player() {

  const playerName = useRef();
  const [enteredPlayerName, setPlayerName] = useState(null);

  function handleNameSubmit() {
    setPlayerName(playerName.current.value);
    playerName.current.value = ''; // imperative clearing of input field (change of DOM directly is technically against react rules) 
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text"/>
        <button onClick={handleNameSubmit}>Set Name</button>
      </p>
    </section>
  );
}
