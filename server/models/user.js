const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER, 
            autoIncrement: true, 
            primaryKey: true,
        }, 
        name: {
            type: DataTypes.STRING, 
            allowNull: false,
        }
    }, 
    {
        sequelize, 
        modelName: 'User', 
        freezeTableName: true, 
    }
);

module.exports = User;
