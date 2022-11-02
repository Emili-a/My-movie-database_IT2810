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
        }
  }
`;

//String!: the exclamation mark means non-nullable, meaning GraphQL service promises to always give you a value when you query this field
export const GET_MOVIE = gql`
  query getMovie ($movieId: String!) { 
    movie (input: { id: movieId }) {
      id
      title
      duration
      plot
      genre
      image_url
      review
      agvRating
    }
  }
`;