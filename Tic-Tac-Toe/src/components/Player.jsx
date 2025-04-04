import { useState } from "react"

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)


    function handleEditClick() {
        setIsEditing(() => !isEditing)

        if (isEditing) {
            onChangeName(symbol, playerName)
        }
    }


    function handleChange(event) {
        setPlayerName(event.target.value)
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    let btnCaption = "Edit "




    if (isEditing) {
        editablePlayerName = <input
            type="text"
            required
            value={playerName}
            onChange={handleChange} />

        btnCaption = 'Save'
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



/**
 * if the state in this first player component instance here changes
 * the second player component instance does not care awbout that at all
 * it doens't even know about that. So we have a shared component
 * with the smae logic inside of it, but then once you use that component,
 * totally different isolated instances are created which only use the 
 * same logic but they then use it on hteir own, and that's a really
 * important feature in React, and a feature which I absolutely wanna 
 * emphasie here. Having this isolation allows you to build super 
 * complex reusable components which don't interfere with each other,
 * 
 * 
 * 
 * 
 */