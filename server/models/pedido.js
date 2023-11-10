const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database/connection");

class Pedido extends Model {
  description;
}

Pedido.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  description: {
    type: DataTypes.STRING, 
    allowNull: false
  }
});
