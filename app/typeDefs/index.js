const { gql } = require("apollo-server-express");
const { writeType } = require("./write");

const rootType = gql`
  type Query {
    root: String
  }
`;

module.exports = [rootType, writeType];
