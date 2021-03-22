const lodash = require("lodash");
const { resolvers: writer } = require("./writer");
const { resolvers: book } = require("./book");
const { resolvers: category } = require("./category");

const resolvers = lodash.merge(writer, book, category);
console.log(resolvers)

module.exports = {
    resolvers
}
