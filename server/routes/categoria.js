const express = require("express");
const router = express.Router();
const CategoriaController = require("../controllers/categoria");

router.post("/criarCategoria", CategoriaController.createCategoria);
router.get("/getCategorias", CategoriaController.getCategorias);
router.get("/getCategoriaById/:id", CategoriaController.getCategoriaById);
router.patch("/updateCategoria", CategoriaController.updateCategoria);
router.delete("/deleteCategoria", CategoriaController.deleteCategoria);

module.exports = router;