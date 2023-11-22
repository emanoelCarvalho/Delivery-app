const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/connection');

class ItemPedido extends Model {}

ItemPedido.init(
    {
        id: {
            type: DataTypes.INTEGER, 
            autoIncrement:true, 
            primaryKey: true
        },
        amount: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        price: {
            type: DataTypes.STRING, 
            allowNull: false
        }
    }, 
    {
        sequelize, 
        modelName: 'ItemPedido', 
        freezeTableName: true
    }
);

module.exports = ItemPedido;