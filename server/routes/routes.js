const connection = require('../database/connection');
const express = require('express');
const router = express.Router();

const AdminController = require('../controllers/admin');
const cardapioController = require('../controllers/cardapio');
const pedidoController = require('../controllers/pedido');

//Admin

router.post('/novoAdmin', AdminController.criarAdmin);
router.get('/listarAdmin', AdminController.listarAdmins);
router.patch('/updateAdmin/:id', AdminController.atualizarAdmin);
router.delete( '/deleteAdmin/:id', AdminController.deletarAdmin);
router.post('/login', AdminController.loginAdmin);

//Cardápio

router.post('/criarCardapio', cardapioController.criarCardapio);
router.get('/listarCardapio', cardapioController.listarCardapio);
router.patch('/updateCardapio/:id',cardapioController.updateCardapio);
router.delete('/deleteCardapio/:id', cardapioController.deleteCardapio);

//Pedido

// router.post('/criarPedido', pedidoController.criarPedido);

module.exports = router;