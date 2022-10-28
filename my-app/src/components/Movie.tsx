import React from "react";


const Movie = ({movie}:any) => { 
    return (
        <article>
            <h2>{movie.title}</h2>
            <p>{movie.body}</p>
            <p> Post ID: {movie.id}</p>
        </article>
    )
}

export default Movie