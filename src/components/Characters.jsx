import { useState, useReducer, useMemo, useRef, useCallback } from 'react'
import Search from './Search'
import useCharacters from '../hooks/useCharacters';

const initialState = {
    favorites: []
}

const API_URL = 'https://rickandmortyapi.com/api/character'
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

    const [ favorites, dispatch ] = useReducer(favoriteReducer, initialState)
    const [ search , setSearch ] = useState('')
    const searchInput = useRef(null)

    const characters = useCharacters(API_URL)
    const handleClick = favorite => {
        dispatch( { type: 'ADD_TO_FAVORITE', payload: favorite } )
    }

    
    /*const handleSearch= () => {
        setSearch( searchInput.current.value )
    }*/
    const handleSearch = useCallback( ()=> {
        setSearch( searchInput.current.value )
    }, [])

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
            <Search search={search} searchInput={searchInput} handleSearch={handleSearch}/>
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