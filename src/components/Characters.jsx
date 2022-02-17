import { useState, useEffect } from 'react'

export const Characters = () => {
    const [characters, setCharacters ] = useState([])

    //usa dos parametros, una funcion anonima donde está la logica
    //el segundo la variable que va estar escuchando en dado caso que tenga un cambio
    useEffect( () => {
        fetch('https://rickandmortyapi.com/api/character')
        .then( response => response.json() )
        .then( data => setCharacters( data.results ) )
    }, []) //cuando no tiene nada que escuchar se le pasa como 2do parametro un arreglo vacio []

    return (
        <div className="Characters">
            {
                characters.map( character  => (
                    <h2>{character.name }</h2>
                ))
            }
            
        </div>
    )
}

export default Characters