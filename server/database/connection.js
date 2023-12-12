const { Sequelize } = require("sequelize")
const dotenv = require("dotenv")
dotenv.config()

const database = "BANCO_PROJETO"
const user = "root"
const password = process.env.DB_PASSWORD || "faculdade"
const host = "localhost"

const sequelize = new Sequelize(database, user, password, {
  host,
  dialect: "mysql",
})

module.exports = sequelize
