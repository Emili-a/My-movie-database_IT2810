var { graphql, buildSchema } = require('graphql');

// Sett opp et skjema via GraphQL-spoerrespraak
var schema = buildSchema(`
  type Query {
    hei: String
  }
`);

// Til API-endpoint
var rootValue = {
  hei: () => {
    return "Hallo verden!";
  },
};

// Brukseksempel: Kjør query (hei), få tilbake "Hallo verden!" og spytt ut til console.log
graphql({
  schema,
  source: "{ hei }",
  rootValue
}).then((response) => {
  console.log(response);
});