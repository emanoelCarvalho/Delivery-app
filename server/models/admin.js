const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database/connection");
const bcrypt = require("bcrypt");

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
    // hooks: {
    //   beforeCreate: async (admin) => {
    //     // Hash the password before saving to the database
    //     const saltRounds = 10;
    //     admin.password = await bcrypt.hash(admin.password, saltRounds);
    //   },
    // },
  }
);

Admin.sync({
  force: true,
}).then(() => {
  console.log("A tabela admin foi criada");
});

module.exports = Admin;
