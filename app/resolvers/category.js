const { verifyJwt, generateJwt } = require("../helpers/authJwt");
const { isLoggedIn } = require("../helpers/isLoggedIn");

const resolvers = {
    Query: {
        // category
        async categories(parent, _, { db }) {
            return await db.category.findAll();
        },

        async category(parent, args, { db }) {
            return await db.category.findOne({
                where: { id: args.id },
            });
        },
    },

    Mutation: {
        // Mutation Category
        async createCategory(parent, args, { db }) {
            return await db.category.create(args);
        },

        async updateCategory(parent, args, { db }) {
            const dataUpdate = await db.category.update(
                {
                    category: args.category,
                },
                {
                    where: { id: args.id },
                }
            );
            if (dataUpdate[0]) {
                const data = await db.category.findOne({
                    where: { id: args.id },
                });
                return data;
            } else {
                throw new Error("Gagal Update");
            }
        },

        async deleteCategory(parent, args, { db }) {
            return await db.category.destroy({ where: { id: args.id } });
        },
    },
};
module.exports = {
    resolvers,
};
