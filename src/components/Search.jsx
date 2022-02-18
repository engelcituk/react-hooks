import React from 'react'

export const Search = ({search, searchInput, handleSearch}) => {
  return (
    <div className="input-group mb-3">
        <input type="text" className="form-control" value={search} onChange={handleSearch} ref={searchInput}/>
        {/* <button className="btn btn-primary" type="button" id="button-addon2" onClick={handleSearch}>Buscar</button> */}
    </div>
  )
}

export default Search