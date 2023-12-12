const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database/connection");

class Categoria extends Model {}

Categoria.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Categoria",
    freezeTableName: true,
  }
);

module.exports = Categoria;