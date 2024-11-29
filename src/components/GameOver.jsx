export function GameOver( {gameWin, hiddenWord ,resetGame} ) {

    const textGameOver =  (gameWin ? 'Ganaste!' : 'Perdiste :(');

    return(
        <section className="game-over">
            <div className="text-game-over">
                <p>{textGameOver}</p>
                <p className="hiddenWord">La palabra era: {hiddenWord}</p>
                <button onClick={resetGame}>Restar</button>
            </div>
        </section>
    )
}