import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import Modal from '@mui/material/Modal';
import MovieInfo from "./MovieInfo";
import { FILTER_QUERY, SET_FAVORITE } from "../queries/queries";
import { IMovie } from "../model/IMovie";

/**
 * @description Component that fetches result data with a qraphQL query based on the search text.
 * This component also handles pagination and "favorite" functionality.
 */


export interface IData {
    movies: IMovie[];
}

const limitEntities: number = 24;

export const Results = (props: { searchText: String, favorite: Boolean }) => {
    const [selectedMovieId, setSelectedMovieId] = useState("");
    const [openMovie, setOpenMovie] = useState<boolean>(false);
    const handleCloseMovie = () => setOpenMovie(false);
    const [skip, setSkip] = useState<number>(0);
    const [NextButton, setNextButton] = useState<string>("NextButtonNotEnd");
    const [PrevButton, setPrevButton] = useState<string>("PrevButtonNotEnd");


    const { loading, error, data } = useQuery<IData>(FILTER_QUERY, {
        variables: {
            searchText: props.searchText,
            skip: skip,
            limit: limitEntities,
            favorite: props.favorite
        },
        notifyOnNetworkStatusChange: true,
    });

    const [setFavorite, { data: data2, loading: loading2, error: error2 }] = useMutation(SET_FAVORITE);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const handleSkip = (IsNext: number) => { //isNext or Prev button, set to 1 or -1
        setNextButton("NextButtonNotEnd");
        setPrevButton("PrevButtonNotEnd");
        if (data?.movies.length !== undefined) {
            if (skip + (limitEntities * IsNext) >= 0) {
                if ((!(data?.movies.length < limitEntities))) {
                    setSkip(skip + (limitEntities * IsNext))
                    setNextButton("NextButtonNotEnd")
                } else {
                    setNextButton("NextButtonEnd")
                };
                setSkip(skip + (limitEntities * IsNext))
                setPrevButton("PrevButtonNotEnd")
            } else {
                setPrevButton("PrevButtonEnd")
            };
        }
    }

    return (
        <div>
            <div className='Results'>
                {data?.movies.map((movie) => {
                    return (
                        <div key={movie._id}>
                            <h3>{movie.title}</h3>
                            <div>
                                <button className="posterButton" type="button" onClick={() => {
                                    console.log(`${movie._id}`);
                                    setSelectedMovieId(`${movie._id}`);
                                    setOpenMovie(true);
                                }}>
                                    <img width="400" height="250" className="movieCover" alt="location-reference" src={`${movie.poster}`} />
                                </button>
                            </div>
                            <button className="favoriteButton" onClick={() => {
                                setFavorite({ variables: { movieId: movie._id, favorite: !movie.favorite } });
                            }}>
                                {movie.favorite ? "Remove from favorites" : "Add to favorites"}
                            </button>
                        </div>
                    )
                })}
                {selectedMovieId && (
                    <div>
                        <Modal
                            open={openMovie}
                            onClose={handleCloseMovie}
                        >
                            <MovieInfo selectedMovieID={selectedMovieId} />
                        </Modal>
                    </div>
                )}
            </div>
            <div className="pageButtons">
                <button className={PrevButton} onClick={() => {
                    handleSkip(-1);
                }}>
                    Prev
                </button>
                <button className={NextButton} onClick={() => {
                    handleSkip(1);
                }}>
                    Next
                </button>
            </div>
        </div>
    )
}
