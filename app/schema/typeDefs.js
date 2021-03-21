const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type Query {
    # Books
    books: [Books]
    findBooksWriteCategory: [Books]
    findOneBook(id: Int!): Books

    # write
    writers: [Writers]
    findOneWrite(id: Int!): Writers
    findWritesBook: Writers

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
    write: Writers
    category: Categories
  }

  type Categories {
    id: Int!
    category: String
    books: [Books]
  }

  type Mutation {
    # Book
    createBook(
      writeId: Int
      categoryId: Int
      title: String
      description: String
    ): Books

    updateBook(
      id: Int
      writeId: Int
      categoryId: Int
      title: String
      description: String
    ): Books

    deleteBook(id: Int): Books

    # Write
    createWriter(fullname: String, email: String, photo: String): Writers
    updateWriter(
      id: Int
      fullname: String
      email: String
      photo: String
    ): Writers

    deleteWriter(id: Int): Writers

    # Category
    createCategory(category: String): Categories
    updateCategory(id: Int, category: String): Categories
    deleteCategory(id: Int): Categories
  }
`;
module.exports = {
  typeDefs,
};
