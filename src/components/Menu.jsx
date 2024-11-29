import { useEffect, useState } from "react";

export function Menu( {gameStart, handleStart} ) {
    // estado para manejar el estado del input 
    const [inputValueStart, setInputValueStart] = useState('');

    //funcion para manjear espacios entre palabras 
    const handleSpaces = (word) => {
        const wordArray = Array.from(word);
        return wordArray.map((letter)=> (letter != ' ' ? letter : '-' ));
    }
    //funcion para capturar el valor del input
    const handleInputValue = (value)=> {
        const inputValue = handleSpaces(value.target.value).join('');
        setInputValueStart(inputValue);
    }

    //funcion para manejar el inicio del juego
    const handleSumbitStart = (event)=> {
        event.preventDefault();

        handleStart(inputValueStart);
        if(inputValueStart.length > 0) {
            gameStart();
        }
        setInputValueStart('');
    }


    return (
        <section className="menu">
            <form className="menu-form" onSubmit={handleSumbitStart}>
                <h4>Ingrese una palabra para iniciar el juego</h4>
                <input  type="text" value={inputValueStart} onChange={handleInputValue} />
                <button>A jugar!</button>
            </form>
            <footer className="menu-footer">
                <p>Hecho por iñaki gopar</p>
            </footer>
        </section>
    )
}

export default Menu;