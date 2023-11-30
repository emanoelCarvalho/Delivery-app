const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.post("/criarUsuario", userController.createUser);
router.get("/listarUsuarios", userController.getUsers);
router.get("/getUsuarioById/:id", userController.getUserById);
router.patch("/updateUsuario/:id", userController.updateUser);
router.delete("/deleteUsuario/:id", userController.deleteUser);


router.post("/authenticate/:id", userController.authenticateUser);

module.exports = router;
