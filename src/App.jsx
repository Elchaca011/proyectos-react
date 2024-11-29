import { useState } from 'react';
import Menu from './components/Menu';
import Input from './components/Input';
import Output from './components/Output';
import { GameOver } from './components/GameOver';
import './App.css'

function App() {
  //Estados
  const [startKey, setStartKey] = useState(false);
  const [hiddenWord, setHiddenWord] = useState('');
  const [mistakes, setMistakes] = useState(0);
  const [chosenLetters, setChosenLetters] = useState([]);
  const [gameWin, setGameWin] = useState(false);
  
  //variables para manejar la logica de los estilos 
  const classGameStart =  startKey ? 'startDisable' : 'activeStart';
  const classGameBody  =  startKey ? 'activeGame' : 'gameDisabled';
  const classGameOver = gameWin || mistakes == 3 ? 'game-over' : 'gameOverDisabled';

  //funcion para manejar el inicio del juego
  const handleStartKey = () => {
    setStartKey(true);
  }

  //funcion para manejar el input de la palabra a adivinar
  const handleInputStart = (inputValue)=> {
    setHiddenWord(inputValue);
  }

  //funcion para manejar la entrada de la palabra elegida por el usuario
  const handleInputGame = (inputValue, hiddenWord) => { //SE DECLARA
    
    //esta condicion evalua que el usuario no pueda ingresar un valor vacio en el input
    if(inputValue === ''){
      return;
    }
    //si el usuario ya eligio esa letra no se vuelve a incluir en el arreglo chosenLetters
    if(chosenLetters.includes(inputValue)) {
      return;
    }
  
    //copio el arrelo chosenLetters y le agrego la palabra escogida por el usuario
    setChosenLetters([...chosenLetters, inputValue]);

    if(!hiddenWord.includes(inputValue)) {
      setMistakes(mistakes + 1);
      return;
    }
  }


  //esta funcion tiene la logica para corroborar que el jugador gano el juego
  const handleGameWon = () => {
    const newHiddenWord = [...hiddenWord];
    const newGussedLetters = [...chosenLetters];
    //si todas las letras de la palabra a adivinar estan incluidas en las letras que coloco el usuario
    const allLettersGuessed = newHiddenWord.every(letter => newGussedLetters.includes(letter));
    if(newHiddenWord.length > 0 && allLettersGuessed){
      setGameWin(true);
    }
  }

  //funcion para restar el juego
  const resetGame = ()=> {
    //seteamos los useStates a sus estados originales
    setStartKey(false);
    setHiddenWord('');
    setMistakes(0);
    setChosenLetters([]);
    setGameWin(false);
  }


  return (
    <>
      <main>
          <header className="game-header">
                <h1>
                    <span className="c1">A</span>
                    <span className="c2">h</span>
                    <span className="c3">o</span>
                    <span className="c4">r</span>
                    <span className="c5">c</span>
                    <span className="c6">a</span>
                    <span className="c7">d</span>
                    <span className="c8">o</span>
                </h1>
            </header>
        <section className={classGameStart}>
          <Menu
            gameStart = {handleStartKey}
            handleStart = {handleInputStart}
          />
        </section>
        <section className= {classGameBody}>
          <Input 
            handleInput = {handleInputGame} 
            hiddenWord = {hiddenWord}
            handleGameWon = {handleGameWon}
            />

          <Output 
            hiddenWord = {hiddenWord}
            mistakes = {mistakes}
            chosenLetters = {chosenLetters}
          />
        </section>
        <section className = {classGameOver}>
          <GameOver
              gameWin = {gameWin}
              hiddenWord = {hiddenWord}
              resetGame = {resetGame}
          />
        </section>
      </main>
    </>
  )
}

export default App
