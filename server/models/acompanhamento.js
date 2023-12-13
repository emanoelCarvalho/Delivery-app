const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

class Acompanhamento extends Model {}

Acompanhamento.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    }, 
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    }
  },
  {
    sequelize,
    modelName: "Acompanhamento",
    freezeTableName: true,
  }
);

module.exports = Acompanhamento;
