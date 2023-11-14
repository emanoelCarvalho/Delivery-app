// const { where } = require("sequelize");
// const Pedido = require("../models//pedido");

// class pedidoController {
//     async criarPedido(req, res) {
//         try {
//             const { description } = req.body;

//             if (!description) {
//                 return res.status(400).json({ error : "Preencha a descrição do pedido"});
//             }

//             const novoPedido = await Pedido.create({
//                 description,
//             });

//             return res.status(201).json({ content: novoPedido.dataValues });

//         } catch (error) {
//             console.log("Erro ao criar pedido", error);
//             return res.status(500).json({ error: "Erro interno no servidor"});
//         }
//     }
// }

// // module.exports = new pedidoController();