const  { where } = require("sequelize");
const Cardapio = require('../models/cardapio');

class cardapioController{
    async criarCardapio(req, res) {
        try {
            const { dia } = req.body;

            if (!dia) {
                return res.status(400).json({ error : "Preencha o dia" });
            }

            const novoCardapio = await Cardapio.create({
                dia,
            });

            return res.status(201).json({
                content: novoCardapio.dataValues, 
            });
        } catch (error) {
            console.log("Erro ao criar cárdapio", error);
            return res.status(500).json({ error: "Erro interno no servidor "});
        }
    }
    async listarCardapio(req, res) {
        try {
            const cardapio = await Cardapio.findAll();
            return res.status(200).json({cardapio});
        } catch (error) {
            console.log('Erro ao encontrar o cardápio', error);
            return res.status(500).json({ error: "Erro interno no servidor"});
        }
    }

    async updateCardapio(req, res) {
        try {
            const { id } = req.params;
            const { dia } = req.body;

            if (!dia) {
                return res.status(400).json({error: "Preencha o campo para atualizar"})
            }

            await Cardapio.update({
                dia,
            }, {
                where: { id : id}, 
            });

            const updatedCardapio = await Cardapio.findByPk(id);
            
            return res.status(200).json({ message: "Cardápio atualizado com sucesso", updatedCardapio});
        } catch (error) {
            console.log("Erro ao atualizar cliente: ", error);
            return res.status(500).json({error: "Erro interno no servidor "});
        }
    }
}

module.exports = new cardapioController();