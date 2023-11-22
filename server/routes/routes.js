const connection = require("../database/connection");
const express = require("express");
const router = express.Router();

const AdminController = require("../controllers/admin");
const cardapioController = require("../controllers/cardapio");
const PedidoController = require("../controllers/pedido");
const ItemController = require("../controllers/item");
const ItemPedidoController = require('../controllers/itemPedido');

//Admin

router.post("/novoAdmin", AdminController.criarAdmin);
router.get("/listarAdmin", AdminController.listarAdmins);
router.patch("/updateAdmin/:id", AdminController.atualizarAdmin);
router.delete("/deleteAdmin/:id", AdminController.deletarAdmin);
router.post("/admin/login", AdminController.logiAdmin);

//Cardápio

router.post("/criarCardapio", cardapioController.criarCardapio);
router.get("/listarCardapio", cardapioController.listarCardapio);
router.patch("/updateCardapio/:id", cardapioController.updateCardapio);
router.delete("/deleteCardapio/:id", cardapioController.deleteCardapio);

//Pedido
router.post("/criarPedido", PedidoController.createPedido);
router.get("/listarPedidos", PedidoController.getPedidos);
router.get("/listarPedido/:id", PedidoController.getPedidoById);
router.patch("/updatePedido/:id", PedidoController.updatePedido);
router.delete("/deletePedido/:id", PedidoController.deletePedido);

//Item

router.post("/createItem", ItemController.createItem);
router.get("/getItems", ItemController.getItems);
router.get("/getItem/:id", ItemController.getItemById);
router.patch("/updateItem/:id", ItemController.updateItem);
router.delete("/deleteItem/:id", ItemController.deleteItem);

//ItemPedido 

router.post('/createItemPedido', ItemPedidoController.createItemPedido);
router.get('/getItemsPedidos', ItemPedidoController.getItemPedido);
router.get('/getItemPedido/:id', ItemPedidoController.getItemPedidoById);

module.exports = router;
