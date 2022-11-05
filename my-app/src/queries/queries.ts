import { gql } from "@apollo/client";

export const FILTER_QUERY = gql`
  query FilterMovies ($searchText: String!, $skip: Int!, $limit: Int!, $favorite: Boolean!) {
    movies(
        limit: $limit,
        skip: $skip,
        search: $searchText
        favorite: $favorite
        ) {
            _id
            title
            plot
            runtime
            genres
            poster
            favorite
        }
  }
`;

export const FAVORITE_MOVIES = gql`
  query FilterMovies ($searchText: String!, $skip: Int!, $limit: Int!) {
    movies(
        limit: $limit,
        skip: $skip,
        search: $searchText
        favorite: $favorite
        ) {
            _id
            title
            plot
            runtime
            genres
            poster
            favorite
        }
  }
`;

//String!: the exclamation mark means non-nullable, meaning GraphQL service promises to always give you a value when you query this field
export const GET_MOVIE = gql`
  query GetMovie ($movieId: String!) { 
    movie (
      _id: $movieId
    ) {
      _id
      title
      plot
      runtime
      genres
      poster
      favorite
      cast
      year
    }
  }
`;

export const SET_FAVORITE = gql`
  mutation SetFavorite ($movieId: String!, $favorite: Boolean!) {
    setFavorite (
      _id: $movieId,
      favorite: $favorite
    ) {
      _id
      favorite
    }
  }
`;