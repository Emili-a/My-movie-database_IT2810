import React from 'react'
import { IMovie } from '../model/IMovie'

/**
 * @description Component that takes in movies and setSearchResults as a prop and sets search results to a result array 
 * This all happens clien side, it probably should'nt
 * Will try to fix it to happen with a query in the results file
 */

export interface ISearch {
  movies: IMovie[];
  setSearchResults: React.Dispatch<React.SetStateAction<IMovie[]>>;
}

const SearchBar = ({ movies, setSearchResults }: ISearch) => {
  const handleSubmit = (e: any) => e.preventDefault() //no relaod on submitt?

  const handleSearchChange = (e: any) => {
    if (!e.target.value) return setSearchResults(movies)  //if input is empty


    // write this as query the input should be the variable that the query uses
    const resultArray = movies.filter(movie => movie.title.includes(e.target.value)
      || movie.plot?.includes(e.target.value)
      || movie.genres?.includes(e.target.value))
    // hva med fliter på spesifike parametere som director eller år?
    setSearchResults(resultArray)
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