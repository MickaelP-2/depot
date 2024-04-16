const sequelize = require('sequelize');
const db = require('../config/database');
//game + attirbuts de game
const Game = db.define('games', 
{
    won_result: { type: sequelize.INTEGER}, //Gagne
    lost_result: {type:sequelize.INTEGER}, //perdu
    tie_result: {type:sequelize.INTEGER} //Egalite
});

module.exports = Game;