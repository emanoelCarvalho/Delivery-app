const { Loja } =  require("../models");

class LojaController {
    async createLoja(req, res) {
        try {
            const { status } = req.body;

            const requiredFields = [status];

            if (requiredFields.some((field) => !field)) {
                return res.status(400).json({ error: "Preencha todos os campos" });
            }

            const newLoja = await Loja.create({ status });

            return res.status(201).json({
                content: newLoja.dataValues,
            });
        } catch (error) {
            console.log("Erro ao criar loja: ", error);
            return res.status(500).json({ error: "Erro interno no servidor" });
        }
    }

    async getLojas(req, res) {
        try {
            const lojas = await Loja.findAll();
            return res.status(200).json({ lojas });
        } catch (error) {
            console.log("Erro ao encontrar lojas: ", error);
            return res.status(500).json({ error: "Erro interno no servidor" });
        }
    }
}

module.exports = new LojaController();