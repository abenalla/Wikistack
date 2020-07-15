const Sequelize = require("sequilize");
const db = new Sequelize("postgres://localhost:5432/wikistack");

module.exports = {
  db,
};
