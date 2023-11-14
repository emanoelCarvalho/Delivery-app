// const { DataTypes, Model } = require('sequelize');
// const sequelize = require('../database/connection');

// const Cardapio = require('./cardapio');
// const Admin = require('./admin');

// class Pedido extends Model {
//   description;
// }

// Pedido.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     description: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     modelName: "Pedido",
//     freezeTableName: true,
//   }
// );

// // Associations
// Pedido.belongsTo(Admin, { foreignKey: 'adminId' }); // Use a different foreign key name like 'adminId'
// Admin.hasOne(Pedido, { foreignKey: 'adminId' });

// Pedido.belongsTo(Cardapio, { foreignKey: 'cardapioId' }); // Use a different foreign key name like 'cardapioId'
// Cardapio.hasOne(Pedido, { foreignKey: 'cardapioId' });

// Pedido.sync({
//   force:true
// }).then(() => {
//   console.log("Tabela pedidos foi criada com sucesso")
// })
// module.exports = Pedido;
