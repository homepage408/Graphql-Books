const { gql } = require("apollo-server-express");

const typeDefs = gql`
    extend type Query {
        # writer
        writers: [Writer]
        writer(id: Int!): Writer
        findWritersBook: [Writer]
    }

    type Writer {
        id: Int
        fullname: String
        email: String
        photo: String
        books: [Book]
    }

    type AuthPayload {
        id: Int!
        username: String
        email: String
        token: String
    }

    extend type Mutation {
        # Login
        login(email: String, password: String): AuthPayload

        # Write
        createWriter(fullname: String, email: String, photo: String): Writer
        updateWriter(
            id: Int
            fullname: String
            email: String
            photo: String
        ): Writer

        deleteWriter(id: Int): Writer
    }
`;
module.exports = {
    typeDefs,
};
