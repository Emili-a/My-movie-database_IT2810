import React from 'react'
import '../styles/SearchBar.css';

/**
 * @description Component that handles input of searchText and passes the searchText to MoviesPage.
 * The initial seachText is set to "S" to show some movies on load.
 */

export interface ISearch {
  setSearchResults: React.Dispatch<React.SetStateAction<String>>;
}

const SearchBar = ({ setSearchResults }: ISearch) => {

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setSearchResults("S")
    }
    else {
      setSearchResults(e.target.value)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() //no relaod on submitt
  }
  return (
    <header>
      <form className="search" onSubmit={handleSubmit}>
        <input
          className="searchInput"
          placeholder='Search for title, plot or genre'
          type='text'
          id='search'
          onChange={handleSearchChange}
        />
        <button type="submit" className="searchButton">
        </button>
      </form>
    </header>
  )
}

export default SearchBar