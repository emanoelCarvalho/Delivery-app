const { ItemPedido, Pedido } = require("../models");
const { findByPk } = require("../models/admin");

class ItemPedidoController {
  async getItemPedido(req, res) {
    try {
      const itemPedido = await ItemPedido.findAll({
        include: [Pedido],
      });
      res.json(itemPedido);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao obter o item do pedido" });
    }
  }
  async getItemPedidoById(req, res) {
    try {
      const itemPedidoById = await ItemPedido.findByPk(req.params.id, {
        include: [Pedido],
      });
      if (itemPedidoById) {
        res.json(itemPedidoById);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao obter item do pedido" });
    }
  }

  async createItemPedido(req, res) {
    try {
      const { amount, price, PedidoId } = req.body;

      const requiredFields = [amount, price, PedidoId];

      if (requiredFields.some((field) => !field)) {
        return res.status(400).json({
          error: "Preencha todos os campos necessários do item pedido",
        });
      }

      const newItemPedido = await ItemPedido.create({
        amount,
        price,
        PedidoId,
      });
      res.status(201).json(newItemPedido);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Erro ao criar um novo pedido" });
    }
  }

  async updateItemPedido(req, res) {
    try {
      const updateItemPedido = await ItemPedido.findByPk(req.params.id);

      if (!updateItemPedido) {
        return res.status(404).json({ error: "Item pedido não encontrado" });
      }

      const { amount, price, PedidoId } = req.body;

      const requiredFields = [amount, price, PedidoId];

      if (requiredFields.some((field) => !field)) {
        return res.status(400).json({
          error: "Preencha todos os campos necessários do item pedido",
        });
      }
      
      await updateItemPedido.update({
        amount,
        price,
        PedidoId,
      });

      res.json(updateItemPedido);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao atualizar item pedido" });
    }
  }

  async deleteItemPedido(req, res) {
    try {
      const itemPedido = await ItemPedido.findByPk(req.params.id);

      if (itemPedido) {
        await itemPedido.destroy();
        res.json({ message: "Item pedido excluído com sucesso " });
      } else {
        res.status(404).json({ error: "Item pedido não encontrado" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao excluir o pedido" });
    }
  }
}

module.exports = new ItemPedidoController();
