import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import Modal from '@mui/material/Modal';
import MovieInfo from "./MovieInfo";

import { FILTER_QUERY, SET_FAVORITE } from "../queries/queries";
import { IMovie } from "../model/IMovie";

/**
 * @description Component that
 */


export interface IData {
    movies: IMovie[];
}

const limitEntities = 25;

// lage en async funksjon for execute search? eller ikke
// vv(nedenfor) hvordan vi hadde gjort det tidligere i api-filen(som nå er slettet)  
// export const getMovies = async () => {
//     const response = await api.get('/movies')
//     return response.data
// } 

export const Results = (props: { searchText: String, favorite: Boolean }) => {
    const [movies, setMovies] = useState<IMovie[]>([]); // kan hende denne ikke trengs siden det hentes inn direkte fra databasen.
    const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);
    const [selectedBeverageId, setSelectedBeverageId] = useState("");


    const [openMovie, setOpenMovie] = useState<boolean>(false);
    const handleCloseMovie = () => setOpenMovie(false);

    const { loading, error, data } = useQuery<IData>(FILTER_QUERY, {
        variables: {
            searchText: props.searchText,
            skip: 1,
            limit: limitEntities,
            favorite: props.favorite
        },
        notifyOnNetworkStatusChange: true, //what does this do
    });

    const [setFavorite, { data: data2, loading: loading2, error: error2 }] = useMutation(SET_FAVORITE);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;


    return (
        <div className='Results'>
            {data?.movies.map((movie) => {
                return (
                    <div key={movie._id}>
                        <h3>{movie.title}</h3>
                        <img width="400" height="250" className="movieCover" alt="location-reference" src={`${movie.poster}`} />
                        <br />
                        <button onClick={() => {
                            setFavorite({ variables: { movieId: movie._id, favorite: !movie.favorite } });
                        }}>
                            {movie.favorite ? "Remove from favorites" : "Add to favorites"}
                        </button>
                    </div>
                )
            })}
        </div>
    )
}
//id, title, duration, plot, genre, image_url, review, agvRating



