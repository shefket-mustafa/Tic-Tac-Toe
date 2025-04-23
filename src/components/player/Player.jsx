import { useState } from "react";

export default function Player({player, playerSymbol, isActive}) {

    const [isEditing, setIsEditing] = useState(false);
    const [newPlayer, setNewPlayer] = useState(player);

    const editHandler = () => {
        setIsEditing(state => !state);
    };

    const handleChange = (e) => {
        setNewPlayer(e.target.value);
    }
  return (
    <li className={isActive ? 'active' : undefined}>
    <span className="player">
        {!isEditing ? 
        <span className="player-name">{newPlayer}</span>
        : <input type="text" required value={newPlayer} onChange={handleChange}/>}
    <span className="player-symbol-x">{playerSymbol}</span>
    </span>
    <button onClick={editHandler}>{!isEditing ? 'Edit' : 'Save'}</button>
    </li>
    );
}