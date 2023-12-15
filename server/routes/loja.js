const express = require('express');
const router = express.Router();
const LojaController = require('../controllers/loja');

router.post('/createLoja', LojaController.createLoja);
router.get('/getLojas', LojaController.getLojas);

module.exports = router;