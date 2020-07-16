const Sequelize = require("sequilize");
const db = new Sequelize("postgres://localhost:5432/wikistack", {
  logging: false
});

const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');

applicationCache.use('/wiki', wikiRouter);

const Page = db.define("page", {
  title: {
    type: Sequelize.STRING,
  },
  slug: {
    type: Sequelize.STRING,
  },
  content: {
    type: Sequelize.TEXT,
  },
  status: {
    type: Sequelize.ENUM("open", "closed"),
  },
});

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
});
module.exports = { db, Page, User };</
