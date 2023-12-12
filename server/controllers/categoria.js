const { Categoria, Item } = require("../models");

class CategoriaController {
  async getCategorias(req, res) {
    try {
      const categorias = await Categoria.findAll({
        include: [Item],
      });
      res.json(categorias);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: "Erro  ao obter categorias",
      });
    }
  }

  async getCategoriaById(req, res) {
    try {
      const categoria = await Categoria.findByPk(req.params.id, {
        include: [Item],
      });

      if (categoria) {
        res.json(categoria);
      } else {
        res.status(404).json({
          error: "Categoria não encontrada",
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao obter a categoria" });
    }
  }

  async createCategoria(req, res) {
    try {
      const { name, ItemId } = req.body;

      if (!name || !ItemId) {
        return res
          .status(400)
          .json({ error: "Preencha todos os campos da categoria" });
      }

      const novaCategoria = await Categoria.create({
        name,
        ItemId,
      });
      res.status(201).json(novaCategoria);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: "Erro ao criar uma nova categoria",
      });
    }
  }

  async updateCategoria(req, res) {
    try {
      const categoria = await Categoria.findByPk(req.params.id);

      if (!categoria) {
        return res.status(404).json({
          error: "Categoria não encontrada",
        });
      }

      const { name, ItemId } = req.body;

      if (!name || !ItemId) {
        return res
          .status(400)
          .json({ error: "Preencha todos os campos da categoria" });
      }

      await categoria.update({
        name,
        ItemId,
      });

      res.json(categoria);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao atualizar a categoria" });
    }
  }

  async deleteCategoria(req, res) {
    try {
      const categoria = await Categoria.findByPk(req.params.id);

      if (categoria) {
        await categoria.destroy();
      } else {
        res.status(404).json({
          error: "Categoria não encontrada",
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao excluir a categoria" });
    }
  }
}

module.exports = new CategoriaController();
