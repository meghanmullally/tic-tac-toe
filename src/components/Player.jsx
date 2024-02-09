import { useState } from "react";

export default function Player({ name, symbol }) {

    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(true);
    }

    let playerName = <span className="player-name">{name}</span>;

    // if isEditing is true - then we will have an input field instead
    if(isEditing) {
        playerName = <input type="text" required />
    } 



    return (
        <li>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>Edit</button>
        </li>
    );
}