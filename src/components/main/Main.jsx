export default function Main() {
  return <main>
    <div id="game-container">
        <ol id="players">
            <li>
                <span className="player">
                <span className="player-name">Player 1</span>
                <span className="player-symbol-x">X</span>
                </span>
                <button>Edit</button>
            </li>

            <li>
                <span className="player">
                <span className="player-name">Player 2</span>
                <span className="player-symbol-x">O</span>
                </span>
                <button>Edit</button>
            </li>
        </ol>
        Game Board
    </div>
  </main>
      
    
}