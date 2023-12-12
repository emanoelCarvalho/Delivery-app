const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database/connection");

class Cardapio extends Model {
  // day;
}

Cardapio.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    day: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Cardapio",
    freezeTableName: true,
  }
);

module.exports = Cardapio;
