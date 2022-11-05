import React from "react";
import '../styles/MoviesPage.css';
import { useState } from 'react'
import { Results } from "../components/Results";
import SearchBar from "../components/SearchBar";

/**
 * @description Component that displays searchbar, resutls and a menu with options to switch
 * between laoding just "My favorites" og "All movies". This component passes the search text from
 * the SearchBar component to the Results component.
 */


const MoviesPage: React.FC = () => {
    const [searchResults, setSearchResults] = useState<String>("S");
    const [favorite, setfavorite] = useState<boolean>(false);

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
                            setfavorite(false);
                        }}
                    >All movies</button>
                    <button className="MenuButton"
                        onClick={() => {
                            setfavorite(true);
                        }}
                    >My favorites</button>
                </menu>
                <section>
                    <Results searchText={searchResults} favorite={favorite} />
                </section>
            </main>
        </div>
    )
}

export default MoviesPage