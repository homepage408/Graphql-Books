const { gql } = require("apollo-server-express");

const typeDefs = gql`
    extend type Query {

        # category
        categories: [Category]
        category(id: Int!): Category
    }

    type Category {
        id: Int!
        category: String
        books: [Book]
    }

    extend type Mutation {

        # Category
        createCategory(category: String): Category
        updateCategory(id: Int, category: String): Category
        deleteCategory(id: Int): Category
    }
`;
module.exports = {
    typeDefs,
};
