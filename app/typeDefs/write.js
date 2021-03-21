const { gql } = require("apollo-server-express");

module.exports = gql`
  type Write {
    id: Int
    fullName: String
    email: String
    phone: String
    updatedAt: Date
  }

  extend type Query {
    getAllWrite: [Write]
  }
`;
