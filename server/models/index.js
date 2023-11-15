const Admin = require("./admin");
const Cardapio = require("./cardapio");
const Pedido = require("./pedido");
const sequelize = require("../database/connection");

try {
  Pedido.belongsTo(Admin, { foreignKey: "adminId", onDelete:"cascade" });
  Admin.hasMany(Pedido, { foreignKey: "adminId", onDelete: "cascade" });

 Pedido.belongsTo(Cardapio, { foreignKey: 'cardapioId', onDelete: "cascade" });
  Cardapio.hasMany(Pedido, { foreignKey: "cardapioId", onDelete: "cascade" });

  console.log("Relacionamentos definidos com sucesso");
} catch (error) {
    console.log("Erro ao definir relacionamentos");
    console.log(error);
}

sequelize.sync({ force: true })
    .then(() => console.log("Sincronizados com sucesso"))
    .catch(error => {
        console.log("Erro ao sincronizar banco de dados");
        console.log(error.message)
    })

    module.exports = {
        Admin, 
        Cardapio, 
        Pedido
    }