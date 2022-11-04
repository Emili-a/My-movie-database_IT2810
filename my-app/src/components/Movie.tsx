import React from "react";
import { IMovie} from '../model/IMovie';


/*
interface IMovie{
    title: string,
    duration: string,
    plot: string,
    genre: string[],
    image_url: string, //(link)
    movieId: number,
    review: IReview[],
    agvRating: number

}
*/

export interface IThumbnail {
    movie: IMovie;
  }

const Movie = ({movie}:IThumbnail) => { 
    return (
        <article>
            <h2>{movie.title}</h2>
            <p>{movie.plot}</p>
            <p> Movie ID: {movie._id}</p>
        </article>
    )
}

export default Movie