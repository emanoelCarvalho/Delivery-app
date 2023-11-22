const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/admin");

router.post("/novoAdmin", AdminController.criarAdmin);
router.get("/listarAdmin", AdminController.listarAdmins);
router.patch("/updateAdmin/:id", AdminController.atualizarAdmin);
router.delete("/deleteAdmin/:id", AdminController.deletarAdmin);
router.post("/admin/login", AdminController.logiAdmin);

module.exports = router;
