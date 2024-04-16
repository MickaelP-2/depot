const sequelize = require('sequelize');
const db = new sequelize({
  dialect: 'sqlite',
  storage: 'game.sqlite'//game
});

db.sync();

module.exports = db;