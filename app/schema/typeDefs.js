const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type Query {
    # Books
    # books: [Books]
    # write
    writers: [Writers]
    findOneWrite(id: Int!): Writers
    # category
    categories: [Categories]
    findOneCategories(id: Int!): Categories
  }

  type Writers {
    id: Int
    fullname: String
    email: String
    photo: String
    books: [Books]
  }

  type Books {
    id: Int
    writeId: Int
    categoryId: Int
    title: String
    description: String
  }

  type Categories {
    id: Int!
    category: String
  }
`;
module.exports = {
  typeDefs,
};
