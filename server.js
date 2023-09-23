const express = require("express");
const schema = require("./schemas/schema");
const expressGraphQL = require("express-graphql").graphqlHTTP;

const app = express();
app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true,
  })
);
app.listen(4000, () => console.log("Server running on port 3000"));
