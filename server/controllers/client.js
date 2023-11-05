const User = require("../models/user")
class clientController {
  async novoCliente(req, res) {
    try {
      const {name, phoneNumber, address, email} = req.body;

      if (!name || !phoneNumber || !address || !email) {
        return res.status(400).json({error: "Preencha todos os campos"});
      }

      const novoUser = await User.create({
        name, 
        phoneNumber, 
        address,
        email
      });

      return res.status(201).json({
        content: novoUser.dataValues, 
      });
    } catch (error) {
      console.log('Erro ao criar usuário : ' , error);
      return res.status(500).json({error: "Erro interno no servidor "});
    }
  }

  async listarClientes(req, res) {
    try {
      const clients = await User.findAll();
      return res.status(200).json(clients);
    } catch (error) {
      console.log("Erro ao listar clientes " , error);
      return res.status(500).json({error: 'Erro interno no servidor : '});
    }
  }
}

module.exports = new clientController();