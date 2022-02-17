import { useState, useEffect } from 'react'

const Characters = () => {
    const [characters, setCharacters ] = useState([])

    //usa dos parametros, una funcion anonima donde está la logica
    //el segundo la variable que va estar escuchando en dado caso que tenga un cambio
    useEffect( () => {
        fetch('https://rickandmortyapi.com/api/character')
        .then( response => response.json() )
        .then( data => setCharacters( data.results ) )
    }, []) //cuando no tiene nada que escuchar se le pasa como 2do parametro un arreglo vacio []

    return (
        <div className="row">
            {
                characters.map( (character, index)  => (
                    <div className='col-md-3 mb-2' key={index}>
                        <div className="card" style={{width: '18rem'}}>
                            <img src={character.image} className="card-img-top" alt={character.name }/>
                            <div className="card-body">
                                <h5 className="card-title">{character.name }</h5>
                                <p className="card-text">{character.species}</p>
                                <p className="card-text">{character.origin.name}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
            
        </div>
    )
}

export default Characters