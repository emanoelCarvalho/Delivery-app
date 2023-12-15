const {Category} = require("../models");

class CategoryController {
    async createCategory(req, res) {
        try {
            const { name } = req.body;

            const requiredFields = [name];

            if (requiredFields.some((field) => !field)) {
                return res.status(400).json({ error: "Preencha todos os campos" });
            }

            const newCategory = await Category.create({ name });

            return res.status(201).json({
                content: newCategory.dataValues,
            });
        } catch (error) {
            console.log("Erro ao criar categoria: ", error);
            return res.status(500).json({ error: "Erro interno no servidor" });
        }
    }

    async getCategories(req, res) {
        try {
            const categories = await Category.findAll();
            return res.status(200).json({ categories });
        } catch (error) {
            console.log("Erro ao encontrar categorias: ", error);
            return res.status(500).json({ error: "Erro interno no servidor" });
        }
    }

    async deleteCategory(req, res) {
        try {
            const category = await Category.findByPk(req.params.id);
            if (category) {
                await category.destroy();
                return res.status(200).json({ message: "Categoria deletada com sucesso" });
            } else {
                return res.status(404).json({ error: "Categoria não encontrada" });
            }
        } catch (error) {
            console.log("Erro ao deletar categoria: ", error);
            return res.status(500).json({ error: "Erro interno no servidor" });
        }
    }
}

module.exports = new CategoryController();