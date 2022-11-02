import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { FILTER_QUERY } from "../queries/queries";
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

export const Results = (props: { searchText: String }) => {
    const [movies, setMovies] = useState<IMovie[]>([]) // kan hende denne ikke trengs siden det hentes inn direkte fra databasen


    const { loading, error, data } = useQuery<IData>(FILTER_QUERY, {
        variables: {
            //searchbar results
            searchText: props.searchText,
            limitEntities: limitEntities,
        },
        notifyOnNetworkStatusChange: true, //what does this do
    });


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            {data?.movies.map((movie) => {
                return (
                    <div key={movie.id}>
                        <h3>{movie.title}</h3>
                        <img width="400" height="250" alt="location-reference" src={`${movie.image_url}`} />
                        <br />
                    </div>
                )
            })}
        </div>
    )
}
//id, title, duration, plot, genre, image_url, review, agvRating



