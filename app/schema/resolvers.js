const resolvers = {
  Query: {
    // Books
    // async books(parent, _, { db }) {
    //   return await db.book.findAll();
    // },
    // Writers
    async writers(parent, _, { db }) {
      return await db.write.findAll();
    },

    async findOneWrite(parent, args, { db }) {
      const data = await db.write.findOne({
        where: { id: args.id },
        include: {
          model: db.book,
        },
      });
      console.log(data.dataValues);
      return data;
    },

    async categories(parent, _, { db }) {
      return await db.category.findAll();
    },

    async findOneCategories(parent, args, { db }) {
      return await db.category.findOne({
        where: { id: args.id },
      });
    },
  },
};
module.exports = {
  resolvers,
};
