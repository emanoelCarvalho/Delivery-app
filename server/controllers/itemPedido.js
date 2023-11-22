const { ItemPedido, Pedido } = require("../models");

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

      if (!amount || !price || !PedidoId) {
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
}

module.exports = new ItemPedidoController();
