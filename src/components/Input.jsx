import { useEffect, useState } from "react";

function Input( {handleInput, hiddenWord, handleGameWon} ) {
    //estado para manejar el estado del input 
    const [inputValue, setInputValue] = useState('');

    //La funcion handleChange maneja el valor del input
    const handleChange = (value)=> {
        //condicion para manejar que el usuario ingrese solamente una letra
        if(value.target.value.length > 1) { 
            return;
        }
        setInputValue(value.target.value);
    }

    const handleSumbit = (event)=> {
        event.preventDefault();
        //SE EJECUTA la funcion handleInput pasada como prop
        handleInput(inputValue, hiddenWord); 
        //limpio el valor del input despues de enviar
        setInputValue('');
    }
    //useEffect se encarga de llamar a la funcion handleGameWon despues de cada cambio en 
    //hiddenWord, inputValue o handleGameWon
    useEffect(()=> {
        handleGameWon();
    }, [hiddenWord, inputValue, handleGameWon]);

    return(
        <>
        <section className="input-game">
            <form onSubmit={handleSumbit}>
                <input type="text" value={inputValue} onChange={handleChange}/>
                <button onClick={handleGameWon}>Corroborar</button>
            </form>
        </section>
        </>
    )
}

export default Input;