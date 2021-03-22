const { gql } = require("apollo-server-core");
const { typeDefs: writer } = require("./writer");
const { typeDefs: book } = require("./book");
const { typeDefs: category } = require("./category");
const root = gql`
    type Query {
        root: String
    }

    type Mutation {
        root: String
    }
`;

const typeDefs = [writer, book, category, root];

module.exports = {typeDefs}