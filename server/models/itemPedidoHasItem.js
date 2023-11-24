const sequelize = require("../database/connection");

const ItemPedidoHasItem = sequelize.define('ItemPedido_has_item', {}, {
    timestamps: true, 
    freezeTableName: true
});

module.exports = ItemPedidoHasItem;