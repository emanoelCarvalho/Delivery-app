const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/admin");

router.post("/novoAdmin", AdminController.createAdmin);
router.get("/listarAdmins", AdminController.getAdmins);
router.get("/getAdminById/:id", AdminController.getAdminById);
router.patch("/updateAdmin/:id", AdminController.updateAdmin);

router.patch("/updateStatus/:id", AdminController.updateStatus);
router.get("/getStatus/:id", AdminController.getStatus);

router.delete("/deleteAdmin/:id", AdminController.deleteAdmin);


router.post("/login", AdminController.loginAdmin);

module.exports = router;
