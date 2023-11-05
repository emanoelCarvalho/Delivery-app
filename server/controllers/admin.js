const Admin = require("../models/admin");

class clientController {

  async novoCliente(req, res) {

    try {
      const { name, phoneNumber, address, email, password } = req.body;

      if (!name || !phoneNumber || !address || !email || !password ) {
        return res.status(400).json({ error: "Preencha todos os campos" });
      }

      const novoAdmin = await Admin.create({
        name,
        phoneNumber,
        address,
        email,
        password,
      });

      return res.status(201).json({
        content: novoAdmin.dataValues,
      });
    } catch (error) {
      console.log("Erro ao criar usuário : ", error);
      return res.status(500).json({ error: "Erro interno no servidor " });
    }
  }

  async listarClientes(req, res) {
    try {
      const clients = await Admin.findAll();
      return res.status(200).json(clients);
    } catch (error) {
      console.log("Erro ao listar clientes ", error);
      return res.status(500).json({ error: "Erro interno no servidor : " });
    }
  }

  async updateAdmin(req, res) {
    try {
      const { id } = req.params;
      const { name, phoneNumber, address, email, password } = req.body;

    if (!name || !phoneNumber || !address || !email || !password) {
       return res.status(400).json({ error: "Preencha todos os campos" });
    }

    const adminExistente = await Admin.findByPk(id);

    if (!adminExistente) {
      return res.status(404).json({ error: "Admin não encontrado " });
    }

    adminExistente.name = name;
    adminExistente.phoneNumber = phoneNumber;
    adminExistente.address = address;
    adminExistente.email = email;
    adminExistente.password = password;

    await adminExistente.save();

    return res.status(200).json({ message: "Admin atualizado com sucesso "});
    } catch (error) {
      console.log("Erro ao atualizar cliente: ", error);
      return res.status(500).json({ error: "Erro interno no servidor "})
    }
  }
}

module.exports = new clientController();
