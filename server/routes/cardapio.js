const express = require("express");
const router = express.Router();
const cardapioController = require("../controllers/cardapio");

router.post("/criarCardapio", cardapioController.createCardapio);
router.get("/listarCardapio", cardapioController.getCardapios);
router.patch("/updateCardapio/:id", cardapioController.updateCardapio);
router.delete("/deleteCardapio/:id", cardapioController.deleteCardapio);

module.exports = router;
