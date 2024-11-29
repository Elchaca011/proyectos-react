export function Output( {hiddenWord, mistakes, chosenLetters} ) {

    //esta funcion crea un nuevo arreglo donde cada letra de hiddenWord se reemplaza por si misma
    //si esta en el arreglo pasado como prop (gussedLetters) o por un '_' si no esta.
    const getHiddenWord = () => {
        return hiddenWord
            .split('')  //'palabraAAdivinar => [p,a,l,a,b,r,a,A,A,d...]'
            .map((letter) => (chosenLetters.includes(letter) ? letter : '_'))
            .join(' ');
    };

    return(
        <>
        <section className="output">
            <h3>{getHiddenWord()}</h3>
            <p> 
                Letras: {' '}
                {chosenLetters + ' '}
            </p>
            <h3> <span className="mistake"> Errores: {mistakes}</span></h3>
        </section>
        </>
    )
}

export default Output;