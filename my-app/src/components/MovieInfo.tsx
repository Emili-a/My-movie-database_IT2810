import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_MOVIE } from "../queries/queries";
import { IMovie } from "../model/IMovie";

/**
 * @description Component that fetches a single movie by movie id and show info popup for that movie
 */

export interface IData {
    movie: IMovie;
  }
  
export const MovieInfo = (props: { selectedMovieID: string }) => {
    const { loading, error, data } = useQuery<IData>(GET_MOVIE, {
        variables: {
          movieId: props.selectedMovieID,
        },
        fetchPolicy: "network-only",
      });
    
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return (
      <div key={data?.movie.id} className="MovieInfo">
        <h3>{data?.movie.title}</h3>
        <img width="400" height="250" alt="location-reference" src={`${data?.movie.image_url}`} />
        <br />
        <b>About this movie:</b>
        <p>{data?.movie.plot}</p>
        <p>{data?.movie.duration}</p>
        <p>{data?.movie.genre}</p>
        <br />
      </div>
    )
}
//id, title, duration, plot, genre, image_url, review, agvRating



