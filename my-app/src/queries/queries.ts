import { gql } from "@apollo/client";

export const FILTER_QUERY = gql`
  query FilterMovies ($searchText: String!, $skip: Int!, $limit: Int!) {
    movies(
        limit: $limit,
        skip: $skip,
        search: $searchText
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
      id: $movieId
    ) {
      _id
      title
      plot
      fullplot
      runtime
      genres
      poster
      favorite
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