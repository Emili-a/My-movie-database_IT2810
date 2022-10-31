import React from 'react';
import {useState, useEffect} from 'react';

type starRating = 1 | 2 | 3 | 4 | 5;
// fetch from database the specific movie info
interface IReview {
    rating: starRating;
    username: string;
    comment: string;
}


interface IMovie {
    title: string;
    duration: string;
    plot: string;
    genre: string[];
    filmid: number;
    reviews: IReview[];
    rating: number;
}

const submitReview = (review: IReview) => {
    const [rating, setRating] = useState(0);
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");
    const [reviews, setReviews] = useState<IReview[]>([]);

    
}