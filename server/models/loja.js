const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database/connection");

class Loja extends Model {}

Loja.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Loja",
    freezeTableName: true,
  }
);

module.exports = Loja;
