import React from 'react'

const SearchBar = ({ movies, setSearchResults}:any) => {
  const handleSubmit = (e: any) => e.preventDefault() //no relaod on submitt?
  
  const handleSearchChange = (e:any) => {
    if (!e.target.value) return setSearchResults(movies)  //if input is empty

    const resultArray = movies.filter(movie => movie.tilte.includes(e.target.value)
    || movie.body.includes(e.target.value))
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