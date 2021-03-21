const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type Query {
    todo: String!
  }
`;
module.exports = {
  typeDefs,
};
