const { gql } = require("apollo-server-express");

const typeDefs = gql`
    extend type Query {
        # Books
        books: [Book]
        findBooksWriterCategory: [Book]
        book(id: Int!): Book
    }

    type Book {
        id: Int
        writeId: Int
        categoryId: Int
        title: String
        description: String
        writer: Writer
        category: Category
    }

    extend type Mutation {
        # Book
        createBook(
            writeId: Int
            categoryId: Int
            title: String
            description: String
        ): Book

        updateBook(
            id: Int
            writeId: Int
            categoryId: Int
            title: String
            description: String
        ): Book

        deleteBook(id: Int): Book
    }
`;
module.exports = {
    typeDefs,
};
