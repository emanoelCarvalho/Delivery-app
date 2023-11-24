const sequelize = require("../database/connection");

const ItemHasCardapio = sequelize.define('Item_has_cardapio', {}, {
    timestamps: true, 
    freezeTableName: true
});

module.exports = ItemHasCardapio;