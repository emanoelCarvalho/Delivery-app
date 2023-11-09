const { where } = require("sequelize");
const Admin = require("../models/admin");

class clientController {
  async novoCliente(req, res) {
    try {
      const { name, phoneNumber, address, email, password } = req.body;

      if (!name || !phoneNumber || !address || !email || !password) {
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
      await Admin.update(
        {
          name,
          phoneNumber,
          address,
          email,
          password,
        },
        {
          where: { id: id },
        }
      );

      const updatedAdmin = await Admin.findByPk(id);

      return res
        .status(200)
        .json({ message: "Cliente atualizado com sucesso", updatedAdmin });
    } catch (error) {
      console.log("Erro ao atualizar cliente: ", error);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }
  }
  async deleteAdmin(req, res) {
    try {
      const { id } = req.params;

      const deletedAdmin = await Admin.findByPk(id);

      if (!deletedAdmin) {
        return res.status(404).json({ message: "Admin não encontrado"});
      }

      await Admin.destroy({
        where: {id : id},
      });

      return res.status(200).json({ message: "Admin deletado co sucesso ", deletedAdmin});
    } catch (error) {
      console.log("Erro ao deletar admin", error);
      return res.status(500).json({ error: "Erro interno no servidor "});
    }
  } 
}

module.exports = new clientController();
