const { Sequelize } = require("sequelize");

const database = "BANCO_PROJETO";
const user = "root";
const password = "faculdade";
const host = "localhost";

const sequelize = new Sequelize(database, user, password, {
  host,
  dialect: "mysql",
});

module.exports = sequelize;
