const resolvers = {
  Query: {
    // Books
    async books(parent, _, { db }) {
      return await db.book.findAll();
    },

    async findBooksWriteCategory(parent, _, { db }) {
      return await db.book.findAll({
        include: [db.category, db.write],
      });
    },

    async findOneBook(parent, args, { db }) {
      return await db.book.findOne({
        where: { id: args.id },
        include: [db.category, db.write],
      });
    },

    // Writers
    async writers(parent, _, { db }) {
      return await db.write.findAll({
        include: [db.book],
      });
    },

    async findOneWrite(parent, args, { db }) {
      return await db.write.findOne({
        where: { id: args.id },
        include: {
          model: db.book,
        },
      });
    },

    async findWritesBook(parent, _, { db }) {
      return await db.write.findAll({
        include: [db.book],
      });
    },

    // category
    async categories(parent, _, { db }) {
      return await db.category.findAll();
    },

    async findOneCategories(parent, args, { db }) {
      return await db.category.findOne({
        where: { id: args.id },
      });
    },
  },

  Mutation: {
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
        const data = await db.category.findOne({ where: { id: args.id } });
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
