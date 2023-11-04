const connection = require('../database/connection');
const express = require('express');
const router = express.Router();
const clientController = require('../controllers/client');

router.get('/novoCliente', clientController.novoCliente);

module.exports = router;