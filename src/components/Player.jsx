import { useState } from "react";

export default function Player({ initName, symbol, isActive, onChangeName }) {

    const [currentPlayerName, setCurrentPlayerName] = useState(initName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        // => gets latest state value from react, at point at time where it is executed
        setIsEditing((editing) => !editing); 

        if(isEditing){
            onChangeName(symbol, currentPlayerName);
        }
    }

    function handleChange(event) {
        // hold the value the user tried to enter
        setCurrentPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{currentPlayerName}</span>;

    // if isEditing is true - then we will have an input field instead
    if (isEditing) {
        editablePlayerName = <input type="text" required value={currentPlayerName} onChange={handleChange} />
    }




    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}