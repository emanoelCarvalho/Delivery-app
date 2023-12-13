const { where, Op } = require("sequelize");
const Cardapio = require("../models/cardapio");
const Item = require("../models/item");

class cardapioController {
  async createCardapio(req, res) {
    try {
      const { day, itemIds } = req.body;

      if (!day || !itemIds || itemIds.length === 0) {
        return res.status(400).json({ error: "Preencha day e pelo menos um item" });
      }

      const novoCardapio = await Cardapio.create({
        day,
      });

      await novoCardapio.addItems(itemIds);

      const cardapioWithItems = await Cardapio.findByPk(novoCardapio.id, {
        include: Item,
      });

      return res.status(201).json({
        content: cardapioWithItems,
      });
    } catch (error) {
      console.log("Erro ao criar cardápio", error);
      return res.status(500).json({ error: "Erro interno no servidor " });
    }
  }

  async getCardapios(req, res) {
    try {
      const cardapios = await Cardapio.findAll({
        include: Item,
      });

      return res.status(200).json({ cardapios });
    } catch (error) {
      console.log("Erro ao encontrar o cardápio", error);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }
  }

  async getCardapioById(req, res) {
    try {
      const cardapio = await Cardapio.findByPk(req.params.id, {
        include: Item,
      });

      if (cardapio) {
        return res.status(200).json({ cardapio });
      } else {
        return res.status(404).json({ error: "Cardápio não encontrado " });
      }
    } catch (error) {
      console.log("Erro ao buscar o cardápio, verifique o ID: ", error);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }
  }

  async updateCardapio(req, res) {
    try {
      const { id } = req.params;
      const { day, itemIds } = req.body;

      if (!day) {
        return res.status(400).json({ error: "Preencha o campo para atualizar" });
      }

      await Cardapio.update(
        {
          day,
        },
        {
          where: { id: id },
        }
      );

      if (itemIds && itemIds.length > 0) {
        const cardapioInstance = await Cardapio.findByPk(id);
        await cardapioInstance.setItems(itemIds);
      }

      const updatedCardapio = await Cardapio.findByPk(id, {
        include: Item,
      });

      return res
        .status(200)
        .json({ message: "Cardápio atualizado com sucesso", updatedCardapio });
    } catch (error) {
      console.log("Erro ao atualizar cardápio: ", error);
      return res.status(500).json({ error: "Erro interno no servidor " });
    }
  }

  async deleteCardapio(req, res) {
    try {
      const { id } = req.params;

      const deletedCardapio = await Cardapio.findByPk(id);

      if (!deletedCardapio) {
        return res.status(404).json({ message: "Cardápio não encontrado" });
      }

      await Cardapio.destroy({
        where: { id: id },
      });

      return res
        .status(200)
        .json({ message: "Cardápio deletado com sucesso", deletedCardapio });
    } catch (error) {
      console.log("Erro ao deletar cardápio ", error);
      return res.status(500).json({ error: "Erro interno no servidor " });
    }
  }
}

module.exports = new cardapioController();
