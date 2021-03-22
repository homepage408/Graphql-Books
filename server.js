const express = require("express");
const port = process.env.PORT || 3000;
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./app/schema/typeDefs");
const { resolvers } = require("./app/schema/resolvers");
const db = require("./app/db/models");
const app = express();

app.use(express.json());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { db },
  playground: {
    settings: {
      "editor.theme": "dark",
    },
  },
  introspection: true,
});
server.applyMiddleware({ app });

app.get("/", async (req, res) => {
  return res.json({
    message: "welcome",
  });
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
