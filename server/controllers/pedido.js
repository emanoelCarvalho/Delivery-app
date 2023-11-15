const { Router } = require('express');
const { Pedido } = require('../models');
const { Admin } = require('../models');
const { Cardapio } = require('../models');
class PedidoController {

  async getPedidos(req, res) {
    try {
      const pedidos = await Pedido.findAll({
        include: [Admin, Cardapio], // Inclui os dados relacionados do Admin e do Cardapio
      });
      res.json(pedidos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao obter os pedidos' });
    }
  }

  async createPedido(req, res) {
    try {
      const novoPedido = await Pedido.create({
        description: req.body.description,
        adminId: req.body.adminId,
        cardapioId: req.body.cardapioId,
      });
      console.log(novoPedido.adminId)
      res.status(201).json(novoPedido);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar um novo pedido' });
    }
  }

  async getPedidoById(req, res) {
    try {
      const pedido = await Pedido.findByPk(req.params.id, {
        include: [Admin, Cardapio], // Inclui os dados relacionados do Admin e do Cardapio
      });
      if (pedido) {
        res.json(pedido);
      } else {
        res.status(404).json({ error: 'Pedido não encontrado' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao obter o pedido' });
    }
  }

  async updatePedido(req, res) {
    try {
      const pedido = await Pedido.findByPk(req.params.id);
      if (pedido) {
        await pedido.update({
          description: req.body.description,
          adminId: req.body.adminId,
          cardapioId: req.body.cardapioId,
        });
        res.json(pedido);
      } else {
        res.status(404).json({ error: 'Pedido não encontrado' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao atualizar o pedido' });
    }
  }

  async deletePedido(req, res) {
    try {
      const pedido = await Pedido.findByPk(req.params.id);
      if (pedido) {
        await pedido.destroy();
        res.json({ message: 'Pedido excluído com sucesso' });
      } else {
        res.status(404).json({ error: 'Pedido não encontrado' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao excluir o pedido' });
    }
  }
}

module.exports = new PedidoController();
