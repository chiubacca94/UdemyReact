import { useState } from "react";

export default function Player() {

  const [playerName, setPlayerName] = useState('unknown entity');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const playerNameRef = useRef();

  function handleChange(event) {
    setIsSubmitted(false);
    setPlayerName(event.target.value);
  }

  function handleNameSubmit(event) {
    setIsSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {isSubmitted ? playerName : 'unknown entity'}</h2>
      <p>
        <input type="text" onChange={handleChange} value={playerName}/>
        <button onClick={handleNameSubmit}>Set Name</button>
      </p>
    </section>
  );
}
