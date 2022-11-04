import { gql } from "@apollo/client";

export const FILTER_QUERY = gql`
  query filterMovies ($searchText: String!) {
    movies(
        $limit: Int
        filter: {
            OR: [{
                title_contains: $searchText
            }, {
                plot_contains: $searchText
            },
            {
                genre_contains: $searchText
            }]
        }) {
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

//String!: the exclamation mark means non-nullable, meaning GraphQL service promises to always give you a value when you query this field
export const GET_MOVIE = gql`
  query getMovie ($movieId: String!) { 
    movie (input: { id: $movieId }) {
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