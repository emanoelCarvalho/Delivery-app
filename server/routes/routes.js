const connection = require('../database/connection');
const express = require('express');
const router = express.Router();
const clientController = require('../controllers/admin');

router.post('/novoAdmin', clientController.novoCliente);
router.get('/listarAdmin', clientController.listarClientes);
router.patch('/updateAdmin/1', clientController.updateAdmin);

module.exports = router;