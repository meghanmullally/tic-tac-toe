import Player from "./components/Player";


function App() {
  return <main>
    <div id="game-container">
      <ol id="players">
{/* components instatnces work in isolation - when clicking on edit, it edits 1 player at a time, because it creates a separate instance for each */}
        <Player initName="Player 1" symbol="X"/>
        <Player initName="Player 2" symbol="O"/>
      </ol>

      GAME BOARD
    </div>

    LOG
  </main>;
}

export default App
