const express = require("express");
const router = express.Router();
const ItemPedidoController = require("../controllers/itemPedido");

router.post("/createItemPedido", ItemPedidoController.createItemPedido);
router.get("/getItemsPedidos", ItemPedidoController.getItemPedido);
router.get("/getItemPedido/:id", ItemPedidoController.getItemPedidoById);
router.patch("/updateItemPedido/:id", ItemPedidoController.updateItemPedido);
router.delete("/deleteItemPedido/:id", ItemPedidoController.deleteItemPedido);

module.exports = router;
