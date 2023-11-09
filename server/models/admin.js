const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database/connection");

class Admin extends Model {
  name;
  phoneNumber;
  address;
  email;
  password;
}

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
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
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

Admin.sync({
  force: true,
}).then(() => {
  console.log("A tabela admin foi criada");
});

module.exports = Admin;
