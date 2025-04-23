import Gameboard from "../gameboard/Gameboard";
import Player from "../player/Player";

export default function Main() {
  return <main>
    <div id="game-container">
        <ol id="players">
            
            <Player player={'Player 1'} playerSymbol={'X'}/>
            <Player player={'Player 2'} playerSymbol={'O'}/>

        </ol>
        <Gameboard />
    </div>
  </main>
      
    
}