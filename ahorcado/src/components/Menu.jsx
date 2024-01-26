import { useState } from "react";

export function Menu( {gameStart, handleStart} ) {
    // estado para manejar el estado del input 
    const [inputValueStart, setInputValueStart] = useState('');


    //funcion para capturar el valor del input
    const handleInputValue = (value)=> {
        setInputValueStart(value.target.value);
    }

    //funcion para manejar el inicio del juego
    const handleSumbitStart = (event)=> {
        event.preventDefault();

        handleStart(inputValueStart);
        setInputValueStart('');

        if(inputValueStart.length > 0){
            gameStart();
        }
    }


    return (
        <section className="menu">
            <form className="menu-form" onSubmit={handleSumbitStart}>
                <h4>Ingrese una palabra para iniciar el juego</h4>
                <input type="text" onChange={handleInputValue} />
                <button>A jugar!</button>
            </form>
            <footer className="menu-footer">
                <p>Hecho por iñaki gopar</p>
            </footer>
        </section>
    )
}

export default Menu;