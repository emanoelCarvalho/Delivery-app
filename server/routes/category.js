const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/category");

router.post("/createCategory", CategoryController.createCategory);
router.get("/getCategories", CategoryController.getCategories);
router.delete("/deleteCategory/:id", CategoryController.deleteCategory);

module.exports = router;