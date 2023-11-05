const connection = require('../database/connection');
const express = require('express');
const router = express.Router();
const clientController = require('../controllers/client');

router.post('/novoCliente', clientController.novoCliente);
router.get('/listarClientes', clientController.listarClientes);

module.exports = router;