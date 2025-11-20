import React, { useState } from 'react';

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing);

        if (isEditing) {
            // save button clicked - update the name in parent component
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(event) {
        // triggered upon some event like enter or paste character into input field
        setPlayerName(event.target.value);
    }
    
    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        editablePlayerName = (
            <input type='text' required value={playerName} onChange={handleChange}/>
        )
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}   