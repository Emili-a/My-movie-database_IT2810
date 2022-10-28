import React from "react";
import '../styles/FrontPage.css';
import {useState, useEffect} from 'react'
import SearchBar from "../components/SearchBar";
import Movie from "../components/Movie";


const FrontPage = () => { 
    const [movies, setMovies] = useState([])
    const [searchResults, setsearchResults] = useState([])
    
    const results = searchResults.map(movie => <Movie key={movie.id} movie={movie}/>)
    const content = results?.length ? results : <article><p> </>
    return (
        <div className='PageWrapper'>
        
        

        


        <SearchBar movies={movie} setSearchResults={searchResults}/>

        */Movielist, display title + (picture)/*
        </div>
    )
}

export default FrontPage