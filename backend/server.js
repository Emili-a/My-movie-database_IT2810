var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
//

var movies = [
    {
      typename: "movies",
      title: "The Adam Project",
      id: 2,
      cover_Image_url: "https://i.ibb.co/7zKYFwn/proyecto-adam-2636933.webp",
      image_url: "https://i.ibb.co/Nts3bYj/w-Fjbo-E0a-FZNb-VOF05fzrka9-Fqyx.jpg",
      trailer_url: " https://youtu.be/IE8HIsIrq4o",
      rating: "6.5",
      duration: "1hour 46mins",
      plot: "Adam Raki (Hugh Dancy), an electronics engineer, has an autism disorder called Asperger syndrome. When a young woman named Beth (Rose Byrne) moves into his apartment building, he is quite taken with her. She does not quite know how to react to Adam's unconventional overtures but decides to give him a chance nonetheless. But Beth's parents are apprehensive about her new romance, which could end the young lovers' relationship before it has a chance.",
      genre: ["action", "trending", "sci-fi"],
    },
    {
      typename: "movies",
      title: "Spider Man: No way Home",
      id: 1,
      cover_Image_url:
        " https://i.ibb.co/92Kckj4/spider-man-no-way-home-12-920x518.jpg",
      image_url: "https://i.ibb.co/KwQck1k/spider-man.jpg",
      trailer_url: "https://youtu.be/JfVOs4VSpmA",
      rating: "7",
      duration: "2 Hours 28mins",
      plot: "With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
      genre: ["trending", "action"],
    },
  ];
  
  // Construct a schema, using GraphQL schema language
  var schema = buildSchema(`
  enum Sort {
    asc
    desc
  }
  
  type Movie {
    title: String
    rating: Float
    genre: [String]
  }

  type Query {
    movies(take: Int, skip: Int, orderBy: Sort): [Movie]
    search(search: String): [Movie]
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  movies: (args) => {
    console.log(args);
    return movies.slice(args.skip, args.skip + args.take);
  },
  search: (args) => {
    console.log(args);
    return movies.filter((movie) => movie.title.toLowerCase().includes(args.search.toLowerCase()));
  }
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');