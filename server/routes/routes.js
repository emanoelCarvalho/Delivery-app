const connection = require('../database/connection');
const express = require('express');
const router = express.Router();
const clientController = require('../controllers/admin');

router.post('/novoAdmin', clientController.novoCliente);
router.get('/listarAdmin', clientController.listarClientes);
router.patch('/updateAdmin/:id', clientController.updateAdmin);
router.delete( '/deleteAdmin/:id', clientController.deleteAdmin);

module.exports = router;