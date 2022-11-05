import React from "react";
import { useQuery } from "@apollo/client";
import { GET_MOVIE } from "../queries/queries";
import { IMovie } from "../model/IMovie";
import '../styles/MovieInfo.css';

/**
 * @description Component that fetches a single movie by movie id and show info popup for that movie.
 */

export interface IData {
  movie: IMovie;
}

const MovieInfo = (props: { selectedMovieID: string }) => {
  const { loading, error, data } = useQuery<IData>(GET_MOVIE, {
    variables: {
      movieId: props.selectedMovieID,
    },
    fetchPolicy: "network-only",
  });


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div key={data?.movie._id} className="movieInfo">
      <h3 className="movieTitle" >{data?.movie.title}</h3>
      <img width="35%" height="60%" alt="location-reference" src={`${data?.movie.poster}`} />
      <br />
      <b>About this movie:</b>
      <p>{data?.movie.plot}</p>
      <p><b>Duration:</b> {data?.movie.runtime}</p>
      <p><b>Released:</b> {data?.movie.year}</p>
      <p className="infoTitle"> <b>Cast:</b></p>
      <p className="cast">
        {data?.movie.cast.map((actor: string) => {
          return (
            <p>{actor}</p>
          )
        })}
      </p>
      <p className="infoTitle"> <b>Genres:</b></p>
      <p className="genres">
        {data?.movie.genres.map((genre: string) => {
          return (
            <p>{genre}</p>
          )
        })}
      </p>
      <p>{data?.movie.favorite}</p>
      <br />
    </div> 
  )
}

export default MovieInfo