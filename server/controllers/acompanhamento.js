const Acompanhamento = require("../models/acompanhamento");

class AcompanhamentoController {
    async createAcompanhamento(req, res) {
        try {
            const { name, amount } = req.body;

            const requiredFields = [name, amount];

            if (requiredFields.some((field) => !field)) {
                return res.status(400).json({ error: "Preencha todos os campos" });
            }

            const newAcompanhamento = await Acompanhamento.create({
                name,
                amount
            });

            return res.status(201).json({
                content: newAcompanhamento.dataValues,
            });
        } catch (error) {
            console.error("Erro ao criar acompanhamento: ", error);
            return res.status(500).json({ error: "Erro interno no servidor" });            
        }
    }

    async getAcompanhamentos(req, res) {
        try {
            const acompanhamentos = await Acompanhamento.findAll();
            return res.status(200).json({ acompanhamentos });
        } catch (error) {
            console.error("Erro ao encontrar acompanhamentos: ", error);
            return res.status(500).json({ error: "Erro interno no servidor" });            
        }
    }

    async getAcompanhamentoById(req, res) {
        try {
            const acompanhamento = await Acompanhamento.findByPk(req.params.id);
            if (acompanhamento) {
                return res.status(200).json({ acompanhamento });
            } else {
                return res.status(404).json({ error: "Acompanhamento não encontrado" });
            }
        } catch (error) {
            console.error("Erro ao buscar o acompanhamento, verifique o ID: ", error);
            return res.status(500).json({ error: "Erro interno no servidor" });            
        }
    }

    async updateAcompanhamento(req, res) {
        try {
            const { id } = req.params;
            const { name, amount } = req.body;

            const requiredFields = [name, amount];

            if (requiredFields.some((field) => !field)) {
                return res.status(400).json({ error: "Preencha todos os campos" });
            }

            const acompanhamento = await Acompanhamento.findByPk(id);

            if (acompanhamento) {
                await acompanhamento.update({
                    name,
                    amount
                });
                return res.status(200).json({ acompanhamento });
            } else {
                return res.status(404).json({ error: "Acompanhamento não encontrado" });
            }
        } catch (error) {
            console.error("Erro ao atualizar acompanhamento: ", error);
            return res.status(500).json({ error: "Erro interno no servidor" });            
        }
    }

    async deleteAcompanhamento(req, res) {
        try {
            const { id } = req.params;
            const acompanhamento = await Acompanhamento.findByPk(id);

            if (acompanhamento) {
                await acompanhamento.destroy();
                return res.status(200).json({ message: "Acompanhamento deletado com sucesso" });
            } else {
                return res.status(404).json({ error: "Acompanhamento não encontrado" });
            }
        } catch (error) {
            console.error("Erro ao deletar acompanhamento: ", error);
            return res.status(500).json({ error: "Erro interno no servidor" });            
        }
    }
}

module.exports = new AcompanhamentoController();