import { useState, useEffect, useReducer, useMemo, useRef } from 'react'

const initialState = {
    favorites: []
}

const favoriteReducer = (state, action ) => {
    switch (action.type){
        case 'ADD_TO_FAVORITE':
        return {
            ...state,
            favorites:[...state.favorites, action.payload ]
        }
        default:
            return state
    }
}

const Characters = () => {
    const [characters, setCharacters ] = useState([])
    const [ favorites, dispatch ] = useReducer(favoriteReducer, initialState)
    const [ search , setSearch ] = useState('')
    const searchInput = useRef(null)

    //usa dos parametros, una funcion anonima donde está la logica
    //el segundo la variable que va estar escuchando en dado caso que tenga un cambio
    useEffect( () => {
        fetch('https://rickandmortyapi.com/api/character')
        .then( response => response.json() )
        .then( data => setCharacters( data.results ) )
    }, []) //cuando no tiene nada que escuchar se le pasa como 2do parametro un arreglo vacio []

    const handleClick = favorite => {
        dispatch( { type: 'ADD_TO_FAVORITE', payload: favorite } )
    }

    const handleSearch= () => {
        setSearch( searchInput.current.value )
    }

    /*const filteredCharacters = characters.filter( (user) => {
        return user.name.toLowerCase().includes( search.toLowerCase() )
    })*/

    const filteredCharacters = useMemo( () =>  //usa una funcion anonima
        characters.filter( (user) => {
            return user.name.toLowerCase().includes( search.toLowerCase() )
        }), [characters, search] // segundo parametros, escuchando sobre los personajes y search
    )

    return (
        <div className="row">
            <h2>Favoritos</h2>
            
            {
                favorites.favorites.map( (character ) => (
                    <div className='col-md-2 mb-2' key={character.id}>
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
            <div className="input-group mb-3">
                <input type="text" className="form-control" value={search} onChange={handleSearch} ref={searchInput}/>
                {/* <button className="btn btn-primary" type="button" id="button-addon2" onClick={handleSearch}>Buscar</button> */}
            </div>
            <h2>Personajes api</h2>
            {
                filteredCharacters.map( (character)  => (
                    <div className='col-md-3 mb-2' key={character.id}>
                        <div className="card" style={{width: '18rem'}}>
                            <img src={character.image} className="card-img-top" alt={character.name }/>
                            <div className="card-body">
                                <h5 className="card-title">{character.name }</h5>
                                <p className="card-text">{character.species}</p>
                                <p className="card-text">{character.origin.name}</p>
                                <button className="btn btn-primary" type='button' onClick={ () => handleClick(character) }>Add to favorites</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Characters