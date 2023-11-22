const express = require("express");
const router = express.Router();
const ItemController = require("../controllers/item");

router.post("/createItem", ItemController.createItem);
router.get("/getItems", ItemController.getItems);
router.get("/getItem/:id", ItemController.getItemById);
router.patch("/updateItem/:id", ItemController.updateItem);
router.delete("/deleteItem/:id", ItemController.deleteItem);

module.exports = router;
