const { where } = require("sequelize");
const Item = require("../models/item");

class ItemController {
  async createItem(req, res) {
    try {
      const { name, itemDescription, unitPrice } = req.body;

      if (!name || !itemDescription || !unitPrice) {
        return res
          .status(400)
          .json({ error: "Preencha todos os campos relacionados ao item" });
      }

      const newItem = await Item.create({
        name,
        itemDescription,
        unitPrice,
      });

      return res.status(201).json({
        content: newItem.dataValues,
      });
    } catch (error) {
      console.log("Erro ao criar item: " , error.message);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }
  }
}

module.exports = new ItemController();
