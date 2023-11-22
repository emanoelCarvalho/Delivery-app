const express = require("express");
const router = express.Router();
const PedidoController = require("../controllers/pedido");

router.post("/criarPedido", PedidoController.createPedido);
router.get("/listarPedidos", PedidoController.getPedidos);
router.get("/listarPedido/:id", PedidoController.getPedidoById);
router.patch("/updatePedido/:id", PedidoController.updatePedido);
router.delete("/deletePedido/:id", PedidoController.deletePedido);

module.exports = router;
