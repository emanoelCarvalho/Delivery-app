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
      console.log("Erro ao criar item: ", err);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }
  }

  async getItems(req, res) {
    try {
      const items = await Item.findAll();
      return res.status(200).json({ items });
    } catch (error) {
      console.log("Erro ao encontrar o cardápio: ", error);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }
  }

  async getItemById(req, res) {
    try {
        const item = await Item.findByPk(req.params.id);
        if (item) {
            return res.status(200).json({ item });
        } else {
            return res.status(404).json({ error: "Item não encontrado" });
        }
    } catch (error) {
        console.log("Erro ao buscar o item, verifique o ID: ", error);
        return res.status(500).json({ error: "Erro interno no servidor" });
    }
}
}

module.exports = new ItemController();
