

import { useState, useRef } from "react";



export default function Player() {
  const playerName = useRef()

  const [enteredPlayerName, setEnteredPlayerName] = useState('')

  function handleClick() {
    setEnteredPlayerName(playerName.current.value)
    playerName.current.value = ''
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}


/**
 * State
 * 1. causes component re-evaluation (re-execution) when changed
 * 2. should be used for values that are directly reflected in the UI
 * 3. should not be used for "behind the scenes" values that have no direct UI impact
 * 
 * Refs
 * 
 * 1. Do not cause component re-evaluation when changed
 * 2. can be used to gain direct DOM element access (=> great for reading values or accessing
 * certain browser APIs )
 * 
 * 
 * 
 */