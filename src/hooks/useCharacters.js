import { useState, useEffect } from 'react'

const useCharacters = url => {
    const [characters, setCharacters ] = useState([])
 //usa dos parametros, una funcion anonima donde está la logica
    //el segundo la variable que va estar escuchando en dado caso que tenga un cambio
    useEffect( () => {
        fetch(url)
        .then( response => response.json() )
        .then( data => setCharacters( data.results ) )
    }, [url]) //cuando no tiene nada que escuchar se le pasa como 2do parametro un arreglo vacio []
    return characters
}
 export default useCharacters