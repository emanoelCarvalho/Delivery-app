const express = require("express");
const router = express.Router();

const adminRoutes = require("./admin");
const cardapioRoutes = require("./cardapio");
const pedidoRoutes = require("./pedido");
const itemRoutes = require("./item");
const itemPedidoRoutes = require("./itemPedido");
const userRoutes = require("./user");

router.use("/admin", adminRoutes);
router.use("/cardapio", cardapioRoutes);
router.use("/pedido", pedidoRoutes);
router.use("/item", itemRoutes);
router.use("/itemPedido", itemPedidoRoutes);
router.use("/user", userRoutes);

module.exports = router;
