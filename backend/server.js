var express = require("express");
var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");
var { readFileSync } = require("fs");

// get MongoDB driver connection
const dbo = require("./conn");

// Construct a schema, using GraphQL schema language
var schema = buildSchema(readFileSync("./schema.gql", "utf8"));

// The root provides a resolver function for each API endpoint
var root = {
  movies: (args) => {
    console.log(args)

    const dbConnect = dbo.getDb();
    if ("genre" in args) {
        query = { "genres": args.genre }
    } else {
        query = {}
    }
    console.log(query)
    var sorter = { title: args.orderBy == "desc" ? -1 : 1 };

    var ret = dbConnect
      .collection("movies")
      .find(query)
      .sort(sorter)
      .skip(args.skip)
      .limit(args.take)
      .toArray();
    return ret;
  },
  search: (args) => {
    const dbConnect = dbo.getDb();
    const query = { $text: { $search: args.search } };
    
    // Return only the `title` of each matched document.
    const projection = {
        _id: 0,
        title: 1,
        plot: 2,
    };

    var ret = dbConnect
      .collection("movies")
      .find(query)
      .project(projection)
      .toArray();
    return ret;
  },
};

const PORT = process.env.PORT || 4000;
var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

// perform a database connection when the server starts
dbo.connectToServer(function (err) {
  if (err) {
    console.error(err);
    process.exit();
  }

  // start the Express server
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});

console.log("Running a GraphQL API server at http://localhost:4000/graphql");