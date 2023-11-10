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
}

module.exports = new cardapioController();