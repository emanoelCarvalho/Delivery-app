const express = require("express");
const router = express.Router();
const cardapioController = require("../controllers/cardapio");

router.post("/criarCardapio", cardapioController.criarCardapio);
router.get("/listarCardapio", cardapioController.listarCardapio);
router.patch("/updateCardapio/:id", cardapioController.updateCardapio);
router.delete("/deleteCardapio/:id", cardapioController.deleteCardapio);

module.exports = router;
