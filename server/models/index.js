const Admin = require("./admin");
const User = require("./user");
const Cardapio = require("./cardapio");
const Pedido = require("./pedido");
const Item = require("./item");
const ItemPedido = require("./itemPedido");
const ItemHasCardapio = require("./itemHasCardapio");
const ItemPedidoHasItem = require("./itemPedidoHasItem");

const sequelize = require("../database/connection");

try {
  // Pedido
  Pedido.belongsTo(User, {});
  Pedido.belongsTo(Cardapio, {});
  Pedido.hasMany(ItemPedido, {});

  // User
  User.hasMany(Pedido, {});

  // Cardapio
  Cardapio.hasMany(Pedido, {});
  Cardapio.belongsToMany(Item, {
    through: ItemHasCardapio,
    onDelete: "cascade",
  });

  // ItemPedido
  ItemPedido.belongsTo(Pedido, {});
  ItemPedido.belongsToMany(Item, {
    through: ItemPedidoHasItem,
    onDelete: "cascade",
  });

  // Item
  Item.belongsToMany(Cardapio, {
    through: ItemHasCardapio,
    onDelete: "cascade",
  });
  Item.belongsToMany(ItemPedido, {
    through: ItemPedidoHasItem,
    onDelete: "cascade",
  });

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
  ItemPedido,
  User,
};
