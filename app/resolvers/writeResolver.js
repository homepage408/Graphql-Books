const { write } = require("../db/models");

module.exports = {
  Query: {
    getAllWrite: async (root, args, write) => {
      return write.findAll();
    },
  },
};
