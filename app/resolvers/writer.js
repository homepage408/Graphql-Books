const { verifyJwt, generateJwt } = require("../helpers/authJwt");
const { isLoggedIn } = require("../helpers/isLoggedIn");

const resolvers = {
    Query: {
        // Writers
        async writers(parent, _, { db }) {
            return await db.write.findAll({
                include: [db.book],
            });
        },

        async writer(parent, args, { db }) {
            return await db.write.findOne({
                where: { id: args.id },
                include: {
                    model: db.book,
                },
            });
        },

        async findWritersBook(parent, _, { db }) {
            const data = await db.write.findAll();
            console.log(data);
            return data;
        },
    },

    Mutation: {
        // Mutation Write
        async createWriter(parent, args, { db }) {
            return await db.write.create(args);
        },

        async updateWriter(parent, args, { db }) {
            const write = await db.write.update(
                {
                    fullname: args.fullname,
                    email: args.email,
                },
                {
                    where: { id: args.id },
                }
            );
            if (write[0]) {
                const data = await db.write.findOne({
                    where: {
                        id: args.id,
                    },
                });
                return data;
            } else {
                throw new Error("Gagal Update");
            }
        },

        async deleteWriter(parent, args, { db }) {
            return await db.write.destroy({ where: { id: args.id } });
        },
    },
};
module.exports = {
    resolvers,
};
