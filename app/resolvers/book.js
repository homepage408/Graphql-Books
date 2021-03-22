const { verifyJwt, generateJwt } = require("../helpers/authJwt");
const { isLoggedIn } = require("../helpers/isLoggedIn");

const resolvers = {
    Query: {
        // Books
        async books(parent, _, { db, auth }) {
            const { loggedIn, user } = isLoggedIn(auth);
            console.log({ user });
            if (loggedIn) {
                return await db.book.findAll({
                    include: db.category,
                    where: {
                        writeId: user.id,
                    },
                });
            }
        },

        async findBooksWriterCategory(parent, _, { db }) {
            return await db.book.findAll({
                include: [db.category, db.write],
            });
        },

        async book(parent, args, { db }) {
            return await db.book.findOne({
                where: { id: args.id },
                include: [db.category, db.write],
            });
        },
    },

    Mutation: {
        // Login
        async login(_, args, { db }) {
            const data = generateJwt(args.email, args.password);
            return {
                token: data.token,
                id: data.id,
                email: data.email,
                username: data.username,
            };
        },

        // Mutation Book
        async createBook(parent, args, { db }) {
            return await db.book.create(args);
        },

        async updateBook(parent, args, { db }) {
            const bookUpdate = await db.book.update(
                {
                    writeInt: args.writeInt,
                    categoryId: args.categoryId,
                    title: args.title,
                    description: args.description,
                },
                {
                    where: { id: args.id },
                }
            );
            if (bookUpdate[0]) {
                const book = await db.book.findOne({
                    where: { id: args.id },
                });
                return book;
            } else {
                throw new Error("Tidak berhasil update");
            }
        },

        async deleteBook(parent, args, { db }) {
            const delBook = await db.book.destroy({
                where: {
                    id: args.id,
                },
            });

            if (delBook) {
                return {
                    message: "Berhasil",
                };
            } else {
                throw new Error("Data tidak ada");
            }
        },
    },
};
module.exports = {
    resolvers,
};
