import React from "react";
import '../styles/MoviesPage.css';
import { useState } from 'react'
import { Results } from "../components/Results";
import SearchBar from "../components/SearchBar";


const MoviesPage = () => {
    const [searchResults, setSearchResults] = useState<String>("")

    /*useEffect
    const results = searchResults.map(movie => <Movie key={movie.id} movie={movie}/>)
    const content = results?.length ? results : <article><p> </>
    */

    return (
        <div className='PageWrapper'>
            <SearchBar setSearchResults={setSearchResults} />
            <Results searchText={searchResults}/>
        </div>
    )
}

export default MoviesPage