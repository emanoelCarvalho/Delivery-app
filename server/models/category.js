const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database/connection");

class Category extends Model {}

Category.init(
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
    },
    {
        sequelize,
        modelName: "Category",
        freezeTableName: true,
    }
    );

module.exports = Category;