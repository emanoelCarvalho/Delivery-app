const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/admin");

router.post("/novoAdmin", AdminController.createAdmin);
router.get("/listarAdmin", AdminController.loginAdmin);
router.patch("/updateAdmin/:id", AdminController.updateAdmin);
router.delete("/deleteAdmin/:id", AdminController.deleteAdmin);
router.post("/admin/login", AdminController.loginAdmin);

module.exports = router;
