const connection = require('../database/connection');
const express = require('express');
const router = express.Router();

const clientController = require('../controllers/admin');
const cardapioController = require('../controllers/cardapio');

//Admin

router.post('/novoAdmin', clientController.novoCliente);
router.get('/listarAdmin', clientController.listarClientes);
router.patch('/updateAdmin/:id', clientController.updateAdmin);
router.delete( '/deleteAdmin/:id', clientController.deleteAdmin);

//Cardápio

router.post('/criarCardapio', cardapioController.criarCardapio);
router.get('/listarCardapio', cardapioController.listarCardapio);
router.patch('/updateCardapio/:id',cardapioController.updateCardapio);
module.exports = router;