import { useState } from "react";

export default function Player({ initName, symbol }) {

    const [currentPlayer, setCurrentPlayer] = useState(initName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        // another option would of been a turnary setIsEditing(isEditing ? false : true); 
        // setIsEditing(!isEditing); // => true
        // best option would be passing a value to return the new state you want to set - always using with the available value from state updating function
        setIsEditing((editing)=> !editing); // => gets latest state value from react, at point at time where it is executed
    }
    
    function handleChange(event) {
        setCurrentPlayer();
    }
    
    let editablePlayerName = <span className="player-name">{currentPlayer}</span>;

    // if isEditing is true - then we will have an input field instead
    if(isEditing) {
        editablePlayerName = <input type="text" required value={currentPlayer} onChange={handleChange}/>
    } 




    return (
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}