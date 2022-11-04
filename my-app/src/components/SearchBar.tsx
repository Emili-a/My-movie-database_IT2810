import React from 'react'
import '../styles/SearchBar.css';

/**
 * @description Component that handles input of searchText and passes the searchText to MoviesPage
 */

export interface ISearch {
  setSearchResults: React.Dispatch<React.SetStateAction<String>>;
}

const SearchBar = ({ setSearchResults }: ISearch) => {

  const handleSearchChange = (e: any) => {
    if (e.target.value == "") {
      setSearchResults("B") 
    }
    else {
      setSearchResults(e.target.value)
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault() //no relaod on submitt?
    //console.log("Hi")
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