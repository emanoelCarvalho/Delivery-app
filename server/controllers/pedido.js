const { Pedido, User, Cardapio } = require("../models");

class PedidoController {
  async getPedidos(req, res) {
    try {
      const pedidos = await Pedido.findAll({
        include: [User, Cardapio],
      });
      res.json(pedidos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao obter os pedidos" });
    }
  }

  async createPedido(req, res) {
    try {
      const { description, UserId, CardapioId } = req.body;

      const requiredFields = [description, UserId, CardapioId];

      if (requiredFields.some((field) => !field)) {
        return res.status(400).json({
          error: "Preencha todos os campos necessários do pedido",
        });
      }

      const novoPedido = await Pedido.create({
        description,
        UserId,
        CardapioId,
      });
      res.status(201).json(novoPedido);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao criar um novo pedido" });
    }
  }

  async getPedidoById(req, res) {
    try {
      const pedido = await Pedido.findByPk(req.params.id, {
        include: [User, Cardapio],
      });
      if (pedido) {
        res.json(pedido);
      } else {
        res.status(404).json({ error: "Pedido não encontrado" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao obter o pedido" });
    }
  }

  async updatePedido(req, res) {
    try {
      const pedido = await Pedido.findByPk(req.params.id);

      if (!pedido) {
        return res.status(404).json({ error: "Pedido não encontrado" });
      }

      const { description, UserId, CardapioId } = req.body;

      const requiredFields = [description, UserId, CardapioId];

      if (requiredFields.some((field) => !field)) {
        return res.status(400).json({
          error: "Preencha todos os campos necessários do pedido",
        });
      }
      
      await pedido.update({
        description,
        UserId,
        CardapioId,
      });

      res.json(pedido);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao atualizar o pedido" });
    }
  }

  async deletePedido(req, res) {
    try {
      const pedido = await Pedido.findByPk(req.params.id);
      if (pedido) {
        await pedido.destroy();
        res.json({ message: "Pedido excluído com sucesso" });
      } else {
        res.status(404).json({ error: "Pedido não encontrado" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao excluir o pedido" });
    }
  }
}

module.exports = new PedidoController();
