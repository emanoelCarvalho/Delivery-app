const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database/connection");

class Admin extends Model {}

Admin.init(
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
    phoneNumber: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Admin",
    freezeTableName: true,
  }
);

// Admin.sync({
//   force: true,
// }).then(() => {
//   console.log("A tabela admin foi criada");
// });

module.exports = Admin;
