import React from 'react'

/**
 * @description Component that handles input of searchText and passes the searchText to MoviesPage
 */

export interface ISearch {
  setSearchResults: React.Dispatch<React.SetStateAction<String>>;
}

const SearchBar = ({ setSearchResults }: ISearch) => {
  const handleSubmit = (e: any) => e.preventDefault() //no relaod on submitt?

  const handleSearchChange = (e: any) => {
    if (!e.target.value) return setSearchResults("")  //if input is empty all movies should be displayed
    setSearchResults(e.target.value)
  }
  return (
    <header>
      <form className="search" onSubmit={handleSubmit}>
        <input
          className="searchInput"
          type='text'
          id='search'
          onChange={handleSearchChange}
        />
        <button className="searchButton">
        </button>
      </form>
    </header>
  )
}

export default SearchBar