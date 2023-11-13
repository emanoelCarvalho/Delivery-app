const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection');

const Cardapio = require('./cardapio');
const Admin = require('./admin');

class Pedido extends Model {
  description;
}

Pedido.init(
  {
    id: {
      type: DataTypes.INTEGER, 
      autoIncrement: true, 
      primaryKey: true, 
    }, 
    description: {
      type: DataTypes.STRING, 
      allowNull: false
    }, 
  }, 
  {
    sequelize, 
    modelName: "Pedido", 
    freezeTableName: true,
  }
);

Pedido.belongsTo(Admin, { foreignKey: 'id'});
Pedido.belongsTo(Cardapio, { foreignKey: 'id'});

module.exports = Pedido;