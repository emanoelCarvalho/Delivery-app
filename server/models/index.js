const Admin = require("./admin");
const Cardapio = require("./cardapio");
const Pedido = require("./pedido");
const ItemPedido = require("./itemPedido");
const sequelize = require("../database/connection");

try {
  //Pedido

  Pedido.belongsTo(Admin, {});
  Pedido.belongsTo(Cardapio, {});
  Pedido.hasMany(ItemPedido, {})
  //Admin

  Admin.hasMany(Pedido, {});

  //Cardapio

  Cardapio.hasMany(Pedido, {});

  //ItemPedido

  ItemPedido.belongsTo(Pedido, {});



  console.log("Relacionamentos definidos com sucesso");
} catch (error) {
  console.log("Erro ao definir relacionamentos");
  console.log(error);
}

sequelize
  .sync({ force: true })
  .then(() => console.log("Sincronizados com sucesso"))
  .catch((error) => {
    console.log("Erro ao sincronizar banco de dados");
    console.log(error.message);
  });

module.exports = {
  Admin,
  Cardapio,
  Pedido,
  ItemPedido
};