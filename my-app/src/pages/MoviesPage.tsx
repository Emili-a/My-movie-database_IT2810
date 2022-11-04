import React from "react";
import '../styles/MoviesPage.css';
import { useState } from 'react'
import { Results } from "../components/Results";
import SearchBar from "../components/SearchBar";

//<Results searchText={searchResults}/>

const MoviesPage = () => {
    const [searchResults, setSearchResults] = useState<String>("B");
    const [favorits, setFavorits] = useState<boolean>(false);

    /*useEffect
    const results = searchResults.map(movie => <Movie key={movie.id} movie={movie}/>)
    const content = results?.length ? results : <article><p> </>
    */
    function handleSubmit(e: any) {
        e.preventDefault();
        console.log('You clicked submit.');
    }

    return (
        <div className="wrapper">
            <header>
                <h1>My movie database</h1>
                <SearchBar setSearchResults={setSearchResults} />
            </header>
            <main>
                <menu>
                    <button className="MenuButton"
                        onClick={() => {
                            setFavorits(false);
                        }}
                    >All movies</button>
                    <button className="MenuButton"
                        onClick={() => {
                            setFavorits(true);
                        }}
                    >My favorites</button>
                </menu>
                <div>
                    <Results searchText={searchResults} />
                </div>
            </main>
        </div>
    )
}

export default MoviesPage