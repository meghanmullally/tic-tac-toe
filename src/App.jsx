import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";


function App() {

  const [activePlayer, setActivePlayer] = useState('X');


  function handleSelectSquare() {
    // if player is X then set to O and vice versa when a square is selected
    // switching active player
      setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X');
  }

  return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        {/* components instances work in isolation - when clicking on edit, it edits 1 player at a time, because it creates a separate instance for each */}
        {/* player 1 is active is X and player 2 is active if O */}
        <Player initName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
        <Player initName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
      </ol>
      <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
    </div>

    LOG
  </main>;
}

export default App
