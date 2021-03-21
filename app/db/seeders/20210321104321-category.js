"use strict";
const faker = require("faker");
// const categorii = [
//   "Business",
//   "Comics",
//   "Computers & Tech",
//   "History",
//   "Horror",
// ];

// const categories = [...Array(5)].map((e, i) => {
//   return {
//     category: categorii[i],
//     createdAt: faker.date.recent(),
//     updatedAt: faker.date.recent(),
//   };
// });

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkInsert("categories", categories);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
