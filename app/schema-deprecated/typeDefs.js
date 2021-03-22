const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Query {
        # Books
        books: [Book]
        findBooksWriterCategory: [Book]
        book(id: Int!): Book

        # write
        writers: [Writer]
        writer(id: Int!): Writer
        findWritersBook: [Writer]

        # category
        categories: [Category]
        category(id: Int!): Category
    }

    type Writer {
        id: Int
        fullname: String
        email: String
        photo: String
        books: [Book]
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

    type Category {
        id: Int!
        category: String
        books: [Book]
    }

    type AuthPayload {
        id: Int!
        username: String
        email: String
        token: String
    }

    type Mutation {
        # Login
        login(email: String, password: String): AuthPayload

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

        # Write
        createWriter(fullname: String, email: String, photo: String): Writer
        updateWriter(
            id: Int
            fullname: String
            email: String
            photo: String
        ): Writer

        deleteWriter(id: Int): Writer

        # Category
        createCategory(category: String): Category
        updateCategory(id: Int, category: String): Category
        deleteCategory(id: Int): Category
    }
`;
module.exports = {
    typeDefs,
};
