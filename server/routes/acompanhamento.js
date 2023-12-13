const express = require("express");
const router = express.Router();
const AcompanhamentoController = require("../controllers/acompanhamento");

router.post("/createAcompanhamento", AcompanhamentoController.createAcompanhamento);
router.get("/getAcompanhamentos", AcompanhamentoController.getAcompanhamentos);
router.get("/getAcompanhamentoById/:id", AcompanhamentoController.getAcompanhamentoById);
router.patch("/updateAcompanhamento/:id", AcompanhamentoController.updateAcompanhamento);
router.delete("/deleteAcompanhamento/:id", AcompanhamentoController.deleteAcompanhamento);

module.exports = router;
