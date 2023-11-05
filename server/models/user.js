const {  DataTypes, Model } = require("sequelize");
const sequelize = require('../database/connection');

class User extends Model {
  name;
  phoneNumber;
  address;
  email;
}

User.init({
  id: {
    type: DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
     allowNull: false, 
  }, 
  phoneNumber: {
    type: DataTypes.STRING, 
    allowNull: false
  },
  address: {
    type: DataTypes.STRING, 
    allowNull: false
  },
  email: {
    type: DataTypes.STRING, 
    allowNull: false
  },
}, {
    sequelize, 
    modelName: 'User', 
    freezeTableName: true
});

User.sync({
    force: true
}).then(() => {
    console.log('A tabela user foi criada');
})


module.exports = User;