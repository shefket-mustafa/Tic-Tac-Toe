export default function GameOver({winner, rematchHandler}) {
  return (
      <>
        <div id="game-over">
            <h2>Game Over!</h2>
            { winner && <p>{winner} Won!</p>}
            { !winner && <p>It&apos;s a Draw</p>}
            <p>
            <button onClick={rematchHandler}>Rematch!</button>
            </p>
        </div>
      </>
    );
}